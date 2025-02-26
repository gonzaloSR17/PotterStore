import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IBook } from '../../interfaces/usuario/libro.interface';
import { pelicula } from '../../interfaces/usuario/pelicula.interface';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';
import { pedido } from '../../interfaces/usuario/pedido.interfaace';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cestaLibros: IBook[] = [];
  private cestaPeliculas: pelicula[] = [];

  private cestaLibrosSubject = new BehaviorSubject<IBook[]>([]);
  private cestaPeliculasSubject = new BehaviorSubject<pelicula[]>([]);

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.cargarCesta();
  }

  private cargarCesta() {
    if (isPlatformBrowser(this.platformId)) {
      const usuario = this.authService.getUsuarioActualSync();
      if (usuario) {
        this.cestaLibros = usuario.cesta || [];
        this.cestaPeliculas = usuario.cesta2 || [];

        this.cestaLibrosSubject.next(this.cestaLibros);
        this.cestaPeliculasSubject.next(this.cestaPeliculas);
      }
    }
  }

  // Libros
  getCestaLibrosObservable() {
    return this.cestaLibrosSubject.asObservable();
  }

  agregarLibro(libro: IBook) {
    this.cestaLibros.push(libro);
    this.actualizarCesta();
  }

  eliminarLibro(libro: IBook) {
    this.cestaLibros = this.cestaLibros.filter(item => item !== libro);
    this.actualizarCesta();
  }

  vaciarCestaLibros() {
    this.cestaLibros = [];
    localStorage.removeItem('cestaLibros')
    this.actualizarCesta();
  }

  // Películas
  getCestaPeliculasObservable() {
    return this.cestaPeliculasSubject.asObservable();
  }

  agregarPelicula(peli: pelicula) {
    this.cestaPeliculas.push(peli);
    this.actualizarCesta();
  }

  eliminarPelicula(peli: pelicula) {
    this.cestaPeliculas = this.cestaPeliculas.filter(item => item !== peli);
    this.actualizarCesta();
  }

  vaciarCestaPeliculas() {
    this.cestaPeliculas = [];
    localStorage.removeItem('cestaPeliculas');
    this.actualizarCesta();
  }

  // Actualizar usuario
  private actualizarCesta() {
    if (isPlatformBrowser(this.platformId)) {
      const usuario = this.authService.getUsuarioActualSync();
      if (usuario) {
        usuario.cesta = this.cestaLibros;
        usuario.cesta2 = this.cestaPeliculas;
        this.authService.actualizarUsuario(usuario);

        this.cestaLibrosSubject.next(this.cestaLibros);
        this.cestaPeliculasSubject.next(this.cestaPeliculas);
      }
    }
  }

  realizarPedido(datosPedido: pedido) {
    const usuario = this.authService.getUsuarioActualSync();
    if (usuario) {
      // Guardamos el pedido en el historial del usuario
      usuario.pedido = usuario.pedido ? [...usuario.pedido, datosPedido] : [datosPedido];
  
      // Vaciar la cesta después del pedido
      this.vaciarCestaLibros();
      this.vaciarCestaPeliculas();
  
      // Guardamos los cambios en el usuario
      this.authService.actualizarUsuario(usuario);
    }
  }
}

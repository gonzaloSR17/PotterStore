import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../../interfaces/usuario/libro.interface';
import { pelicula } from '../../../../interfaces/usuario/pelicula.interface';
import { CartService } from '../../../../services/cart/cart-service.service';

@Component({
  selector: 'app-sidebar-carrito',
  standalone: false,
  templateUrl: './sidebar-carrito.component.html',
  styleUrl: './sidebar-carrito.component.css'
})
export class SidebarCarritoComponent implements OnInit {

  public bookList: IBook[] = [];
  public movieList: pelicula[] = [];
  public totalCarrito: number = 0; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCestaLibrosObservable().subscribe((libros: IBook[]) => {
      this.bookList = libros;
      this.calcularTotal();
    });

    this.cartService.getCestaPeliculasObservable().subscribe((peliculas: pelicula[]) => {
      this.movieList = peliculas;
      this.calcularTotal();
    });
  }

  calcularTotal(): void {
    const totalLibros = this.bookList.reduce((total, book) => total + (book.price || 0), 0);
    const totalPeliculas = this.movieList.reduce((total, peli) => total + (peli.price || 0), 0);
    this.totalCarrito = totalLibros + totalPeliculas;
  }

  eliminarLibro(libro: IBook): void {
    this.cartService.eliminarLibro(libro);
    this.calcularTotal();
  }

  eliminarPelicula(peli: pelicula): void {
    this.cartService.eliminarPelicula(peli);
    this.calcularTotal();
  }

  vaciarCarrito(): void {
    this.cartService.vaciarCestaLibros();
    this.cartService.vaciarCestaPeliculas();
    this.calcularTotal();
  }

  realizarPedido(): void {
    if (this.bookList.length === 0 && this.movieList.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }
    alert(`Pedido realizado con éxito. Total a pagar: $${this.totalCarrito}`);
    this.vaciarCarrito();
  }
}

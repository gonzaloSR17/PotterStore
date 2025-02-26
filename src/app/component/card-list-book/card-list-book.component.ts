import { Component, Input, OnInit } from '@angular/core';
import { libros } from '../../interfaces/harrypotter/libros.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';
import { UserServiceService } from '../../services/user-service.service';
import { PagesWikiComponent } from '../../pages/pages-wiki/pages-wiki.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarMenuComponent } from '../../shared/components/sidebars/sidebar-menu/sidebar-menu.component';
import { SidebarCarritoComponent } from '../../shared/components/sidebars/sidebar-carrito/sidebar-carrito.component';
 import { UserSessionService } from '../../services/usuNow/usu-now.service';

 import { IBook } from '../../interfaces/usuario/libro.interface';
 import { usuario } from '../../interfaces/usuario/usuario.interface';
import { response } from 'express';
import { BookServicesService, Libro } from '../../services/book-services.service';
import { CartService } from '../../services/cart/cart-service.service';
/**
 * Componente que muestra la lista de libros disponibles.
 * * @author Gonzalo Sánchez-Ros Paz
 */

declare var bootstrap: any;

@Component({
  selector: 'app-card-list-book',
  standalone: false,
  
  templateUrl: './card-list-book.component.html',
  styleUrl: './card-list-book.component.css'
})
export class CardListBookComponent implements OnInit {

  // creamos objeto de usuario vacio
    usuarioActual: usuario | null = null;

    

    /** Lista de libros obtenidos de la API */
  @Input()
  public resBook: libros[] = [];

  constructor (private hpServices: HarryPotterServices,
    private userServices: UserServiceService,
    private userSession: UserSessionService,
    private bookService: BookServicesService,
    private cartServive: CartService
  ){}


  // objeto para seleccionar

  public libroSeleccionado: libros | null = null;

  public iduser: number = 0;
  

  /**  Metodo que se ejcuta automaticamente */
  ngOnInit(): void{

    this.imprimirLibros();

    this.userSession.getUsuario().subscribe(usuario => {
      this.usuarioActual = usuario;
      
      // obtenemos su id 

      if (this.usuarioActual?.gmail) {

        this.userServices.getIdUser(this.usuarioActual?.gmail).subscribe(id => {
          console.log("ID del usuario:", id);
          this.iduser = id;
        });

      }

      
    });

  }

  /** funcion que solicita la respues de servicios fetchbook */
  imprimirLibros(): void {

    // Suscribirse para obtener los elementos de libros

    this.hpServices.fetchBooks().subscribe((libros) => {
      this.resBook = libros;
      console.log('Resultados cargados', this.resBook);
    })
  
  }

  detallesLibro(libro: libros): void {

    this.libroSeleccionado = libro;
    const modal = new bootstrap.Modal(document.getElementById('detalleLibroModal')!);
    modal.show();

    
  }

  agregarAlCarrito(libro: libros) {

    const libroAnadir: IBook = {
      title: libro.title,
      price: 20,
      imagenUrl: libro.cover
    }

    this.cartServive.agregarLibro(libroAnadir);

    const modalElement = document.getElementById('detalleLibroModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide(); // Cierra el modal si está abierto
    }
  }

  anadirCarrito(libro: libros): void {
    if (!this.iduser) {
      console.error('Error: No se pudo obtener el ID del usuario.');
      alert('No se pudo identificar al usuario. Intenta nuevamente.');
      return;
    }
  
    // Convertir `libros` a `Libro`
    const libroParaEnviar: Libro = {
      id: 0, // Se usa 0 porque `libros` no tiene `id`
      title: libro.title,
      pages: Number(libro.pages) || 0, // Convertir `pages` de `string` a `number`
      price: libro.price ?? 20, // Si no tiene precio, asignar 20 por defecto
      imagenUrl: libro.cover ?? '', // `cover` en `libros` equivale a `imagenUrl` en `Libro`
      userId: this.iduser // Asignar el ID del usuario actual
    };
  
    // Llamamos al servicio para agregar el libro
    this.bookService.addLibroUser(libroParaEnviar).subscribe({
      next: (response) => {
        console.log('Libro agregado al carrito con éxito:', response);
        alert('Libro agregado al carrito correctamente'); // Mensaje de éxito
      },
      error: (error) => {
        console.error('Error al agregar el libro:', error);
        alert('Hubo un error al agregar el libro al carrito. Inténtalo de nuevo.');
      }
    });
  }
  }



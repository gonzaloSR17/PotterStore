import { Component, Input } from '@angular/core';
import { libros } from '../../interfaces/harrypotter/libros.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';
import { PagesWikiComponent } from '../../pages/pages-wiki/pages-wiki.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarMenuComponent } from '../../shared/components/sidebars/sidebar-menu/sidebar-menu.component';
import { SidebarCarritoComponent } from '../../shared/components/sidebars/sidebar-carrito/sidebar-carrito.component';
 
/**
 * Componente que muestra la lista de libros disponibles.
 * * @author Gonzalo Sánchez-Ros Paz
 */

@Component({
  selector: 'app-card-list-book',
  standalone: false,
  
  templateUrl: './card-list-book.component.html',
  styleUrl: './card-list-book.component.css'
})
export class CardListBookComponent {

    /** Lista de libros obtenidos de la API */
  @Input()
  public resBook: libros[] = [];

  constructor (private hpServices: HarryPotterServices){}


  /**  Metodo que se ejcuta automaticamente */
  ngOnInit(): void{

    this.imprimirLibros();

  }

  /** funcion que solicita la respues de servicios fetchbook */
  imprimirLibros(): void {

    // Suscribirse para obtener los elementos de libros

    this.hpServices.fetchBooks().subscribe((libros) => {
      this.resBook = libros;
      console.log('Resultados cargados', this.resBook);
    })
  
  }

}

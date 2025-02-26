import { Component, OnInit, ViewChild } from '@angular/core';
import { CardListComponent } from '../../component/card-list/card-list.component';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';


@Component({
  selector: 'app-pages-wiki',
  standalone: false,
  
  templateUrl: './pages-wiki.component.html',
  styleUrl: './pages-wiki.component.css'
})
export class PagesWikiComponent {

   // Crear estancia para ejecutar la funcion, para ejecutar funciones externas

   constructor (private hpServices: HarryPotterServices) {}

   @ViewChild(CardListComponent) hpResults!: CardListComponent;

  texto: string = 'Conoce a Todos los Personajes';

  mostrarTextoPeliculas() {
    this.texto = 'Peliculas De Harry Potter'

    
  }

  mostrarTextoHechizos() {

  }

  mostrarTextoObjetos() {
    this.texto = '¡Conoce los objetos del mundo mágico!'
  }

  mostrarTextoLugares() {
  }

  /**
   * Inicia sesión con usuario y contraseña.
   * @param texto Texto Entrada.
   */

  mostrarTextoPersonajes() {
    this.texto = 'Conoce a Todos los Personajes'

    this.hpResults.imprimirPersonajes();

  }

  mostrarTextoLibros() {
    this.texto = 'El Origen de la saga'
    
  }

 /**
 * Metodo para buscar un personaje.
 */

  busquedaPersonaje(nombreAbuscar: string): void {

    this.hpResults.imprimirPersonajesDeseados(nombreAbuscar);


  }
 

  

}

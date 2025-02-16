import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Potion } from '../../interfaces/harrypotter/potions.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';

/**
 * Componente que muestra una lista de pociones de Harry Potter.
 * 
 * @author Gonzalo Sanchez-Ros Paz
 */
@Component({
  selector: 'app-card-list-potions',
  standalone: false,
  templateUrl: './card-list-potions.component.html',
  styleUrl: './card-list-potions.component.css'
})
export class CardListPotionsComponent {

  /**
   * Lista de pociones obtenidas desde el servicio.
   */
  @Input()
  public potions: Potion[] = [];

  /**
   * Constructor del componente que inyecta el servicio de Harry Potter.
   * 
   * @param hpServices Servicio que obtiene la información de las pociones.
   */
  constructor(private hpServices: HarryPotterServices) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Llama a la función para obtener las pociones.
   */
  ngOnInit(): void {
    this.imprimirPociones();
  }

  /**
   * Obtiene la lista de pociones desde el servicio y las almacena en el array potions.
   * También incrementa el contador de pociones en el servicio.
   */
  imprimirPociones(): void {
    this.hpServices.fetchPotionsData("").subscribe(
      (data: Potion[]) => {
        this.potions = this.potions.concat(data);
        console.log(this.potions);

        // Hacer scroll hasta el contenedor de las pociones (deshabilitado actualmente).
        /*
        setTimeout(() => {
          this.potionContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); 
        */
      }
    );
    this.hpServices.contadorPociones++;
  }

  /**
   * Obtiene más pociones a partir de una URL específica y las agrega a la lista existente.
   * 
   * @param url URL desde donde se obtendrán más datos de pociones.
   */
  ControlUsuarioImpresionPociones(url: string): void {
    this.hpServices.fetchPotionsData(url).subscribe((data: Potion[]) => {
      this.potions = this.potions.concat(data);
      console.log(this.potions);
    });
  }

  /**
   * Establece una imagen por defecto en caso de que la imagen original falle al cargarse.
   * 
   * @param event Evento del error de carga de imagen.
   */
  setDefaultImage(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '../assets/error.png'; 
  }
}

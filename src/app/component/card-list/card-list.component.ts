import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../interfaces/harrypotter/character.interface';
import { libros } from '../../interfaces/harrypotter/libros.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';
import { error } from 'console';
import { movie } from '../../interfaces/harrypotter/movies.interface';
import { Datum, Spells } from '../../interfaces/harrypotter/speel.interface';
import { PotionResponse, Potion } from '../../interfaces/harrypotter/potions.interface';
@Component({
  selector: 'app-card-list',
  standalone: false,
  
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {

    // Creacion de los arrays para alamacenar los objetos almacenados desde services
  @Input()
  public resCharacter: Character[] = [];

  public resBook: libros[] = [];

  public resMovies: movie[] = [];

  public spells: Datum[] = [];

  public potions: Potion[] = [];

  public mostrarBoton: boolean = false;

  public mostrarBotonMasPociones: boolean = false;

  public mostrarBotonMenosPociones: boolean = false;

  
  constructor (private hpServices: HarryPotterServices){}

  @ViewChild('potionContainer') potionContainer!: ElementRef;

  ngOnInit(): void {

    // Suscribirse al observable del servicio de Character y actualizar resCharacter

    this.imprimirPersonajes();

  }

  imprimirPersonajes(): void {

    this.vaciarArray();

    this.hpServices.fetchCharacters().subscribe(
      (characters) => {
        this.resCharacter = characters,
        console.log('Personajes cargados en el cardList:', this.resCharacter);
      },
      (error) => {
        console.error('Error al cargar personajes:', error);
      }
    )
    
  }


  imprimirPersonajesDeseados(PersonajeDeseado: string): void {
    this.hpServices.fetchCharacters().subscribe(
      (characters) => {
        this.resCharacter = characters.filter(character => character.personaje === PersonajeDeseado);
        console.log('Resultados encontrados:', this.resCharacter);
      },
      (error) => {
        console.error('Error al buscar el personaje:', error);
      }
    );
  }

  mostrarBotonSpells():void {

    // mostrar el boton al ejecutar dicha funcion

    this.mostrarBoton = true; 

  }

  paginasBotonPociones(): void{

    if (this.hpServices.contadorPociones == 1) {

      this.mostrarBotonMasPociones = true;

      this.mostrarBotonMenosPociones = false;

      this.hpServices.contadorPociones++
    
    } else if (this.hpServices.contadorPociones == 2) {

      this.mostrarBotonMasPociones = false;

      this.mostrarBotonMenosPociones = true;

      this.hpServices.contadorPociones--;
    }

  }

  imprimirSpells(): void {
    this.vaciarArray();
    this.hpServices.fetchSpellData().subscribe(
      (Data: Datum[]) => {
        this.spells = Data;
        console.log(this.spells);
      }
    );
  }

  imprimirMasSpells(): void {
    this.hpServices.contador++
    this.hpServices.fetchSpellDataDetails().subscribe(
      (Data: Datum[]) => {
        this.spells = this.spells.concat(Data);
        console.log(this.spells);
      }
    )
  }


  imprimirPociones(): void {

    this.vaciarArray();

    this.hpServices.fetchPotionsData("fiubdnubifd").subscribe(
      (data: Potion[]) => {
        this.potions = this.potions.concat(data);
        console.log(this.potions);

        // Hacer scroll hasta el contenedor de las pociones
      
        setTimeout(() => {
        this.potionContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 


      }
    );

    this.paginasBotonPociones();
  

  }


  vaciarArray(): void {

    // Vaciamos el array de libros

  this.resMovies.length = 0;

  // Vaciamos el array personaje

  this.resCharacter.length = 0;

  // Vaciamos el array libros

  this.resBook.length = 0;

  // Vaciamos el array de Hechizos

  this.spells.length = 0;

  // Vaciamos el array de pociones

  this.potions.length = 0;

  }

  setDefaultImage(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '../assets/error.png'; 
  }  
  

}

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../interfaces/harrypotter/character.interface';
import { libros } from '../../interfaces/harrypotter/libros.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';
import { error } from 'console';
import { movie } from '../../interfaces/harrypotter/movies.interface';
import { Datum, Spells } from '../../interfaces/harrypotter/speel.interface';
import { PotionResponse, Potion } from '../../interfaces/harrypotter/potions.interface';
import { FormLogginComponent } from '../form-loggin/form-loggin.component';
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
  
  constructor (private hpServices: HarryPotterServices){}

  @ViewChild('potionContainer') potionContainer!: ElementRef;
  


  ngOnInit(): void {

    // Suscribirse al observable del servicio de Character y actualizar resCharacter

    this.imprimirPersonajes();

    

  }

  imprimirPersonajes(): void {

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


  setDefaultImage(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '../assets/error.png'; 
  }  
  

}

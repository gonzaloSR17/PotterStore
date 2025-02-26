import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/harrypotter/speel.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';

@Component({
  selector: 'app-card-list-spells',
  standalone: false,
  
  templateUrl: './card-list-spells.component.html',
  styleUrl: './card-list-spells.component.css'
})
export class CardListSpellsComponent implements OnInit {

  mostrarBoton: boolean = true;

  textoIngresado: string = '';

  public spells: Datum[] = [];

  constructor (private hpServices: HarryPotterServices){}
  ngOnInit(): void {
    this.imprimirSpells();
  }

  imprimirSpells(): void {
    this.hpServices.fetchSpellData().subscribe
      ((Data: Datum[]) => {
        this.spells = this.spells.concat(Data);
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

  setDefaultImage(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '../assets/error.png'; 
  }  

  mostrarMasDetalles(): void {
    this.hpServices.contadorHechizos++
    this.imprimirSpells();

  }

  busquedaHechizos(){
  
    if(this.textoIngresado == ''){
  
      this.hpServices.contadorHechizos= 1;
      this.mostrarBoton = true;
  
      this.imprimirSpells();
  
    } else {
  
      this.spells.length = 0;
  
      this.hpServices.searchSpeelsData(this.textoIngresado).subscribe((Data: Datum[]) => {
        this.spells = this.spells.concat(Data);
        console.log(this.spells);
        
      }
      );
    
      this.mostrarBoton = false;
  
    }
  
   
  }
  

}

import { Component, Input } from '@angular/core';
import { movie } from '../../interfaces/harrypotter/movies.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';

/**
 * Componente que muestra una lista de películas de Harry Potter.
 * 
 * @author Gonzalo Sanchez-Ros Paz
 */
@Component({
  selector: 'app-card-list-movies',
  standalone: false,
  templateUrl: './card-list-movies.component.html',
  styleUrl: './card-list-movies.component.css'
})
export class CardListMoviesComponent {

  /**
   * Array que almacena las películas obtenidas del servicio.
   */
  @Input()
  public resMovies: movie[] = [];

  /**
   * Constructor del componente que inyecta el servicio de Harry Potter.
   * 
   * @param hpServices Servicio que obtiene las películas de Harry Potter.
   */
  constructor(private hpServices: HarryPotterServices) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.imprimirPeliculasHp();
  }

  /**
   * Obtiene la lista de películas desde el servicio y la almacena en resMovies.
   */
  imprimirPeliculasHp(): void {
    this.hpServices.fetchMovies().subscribe(
      (movie) => {
        this.resMovies = movie;
        console.log('Resultados encontrados:', this.resMovies);
      }
    );
  }
}

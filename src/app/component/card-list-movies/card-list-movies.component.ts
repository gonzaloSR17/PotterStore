import { Component, Input } from '@angular/core';
import { movie } from '../../interfaces/harrypotter/movies.interface';
import { HarryPotterServices } from '../../services/harrypotterServices/harrypotter.services';
import { CartService } from '../../services/cart/cart-service.service';
import { pelicula } from '../../interfaces/usuario/pelicula.interface';

@Component({
  selector: 'app-card-list-movies',
  standalone: false,
  templateUrl: './card-list-movies.component.html',
  styleUrl: './card-list-movies.component.css'
})
export class CardListMoviesComponent {
  
  @Input()
  public resMovies: movie[] = [];

  public peliculaSeleccionada: movie | null = null;

  constructor(private hpServices: HarryPotterServices, private cartService: CartService) {}

  ngOnInit(): void {
    this.imprimirPeliculasHp();
  }

  imprimirPeliculasHp(): void {
    this.hpServices.fetchMovies().subscribe(
      (movie) => {
        this.resMovies = movie;
        console.log('Resultados encontrados:', this.resMovies);
      }
    );
  }

  detallesPelicula(pelicula: movie): void {
    this.peliculaSeleccionada = pelicula;
  }

  agregarPeliculaACesta(peliculaHP: movie): void {
    const peliAgrega: pelicula = {
      price: 20, // Precio fijo (puedes modificarlo dinámicamente si es necesario)
      serial: peliculaHP.serial,
      title: peliculaHP.title,
      poster: peliculaHP.poster
    };

    this.cartService.agregarPelicula(peliAgrega);
    alert(`${peliculaHP.title} ha sido añadida al carrito.`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../api-url/api-url';
import { Character } from '../../interfaces/harrypotter/character.interface';
import { Observable } from 'rxjs';
import { libros } from '../../interfaces/harrypotter/libros.interface';
import { movie } from '../../interfaces/harrypotter/movies.interface';
import { Datum, Spells } from '../../interfaces/harrypotter/speel.interface';
import { Potion, PotionResponse } from '../../interfaces/harrypotter/potions.interface';
import { map } from 'rxjs/operators';

/**
 * Servicio para manejar la obtención de datos de la API de Harry Potter.
 */
@Injectable({
    providedIn: 'root'
})
export class HarryPotterServices {

  /** URL base de la API de Harry Potter */
  URLHP = apiUrl.apiHarryPotter;

  /** Endpoint de personajes */
  URLCharacter = apiUrl.apiCharacter;

  /** Endpoint de detalles de hechizos */
  URLSpellsMors = apiUrl.apiHechizosDetails;

  /** Contador para manejar paginación de hechizos */
  contador: number = 1;

  /** Contador para manejar paginación de pociones */
  contadorPociones: number = 1;

  /**
   * Almacena la lista de personajes obtenidos desde la API.
   */
  public characterList: Character[] = [];

  /**
   * Constructor del servicio.
   * @param http Servicio HttpClient para realizar peticiones HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de personajes desde la API.
   * @returns Un Observable con la lista de personajes.
   */
  fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.URLHP}${this.URLCharacter}`);
  }

  /**
   * Obtiene la lista de libros de Harry Potter desde la API.
   * @returns Un Observable con la lista de libros.
   */
  fetchBooks(): Observable<libros[]> {
    return this.http.get<libros[]>(`${apiUrl.apiBooks}`);
  }

  /**
   * Obtiene la lista de películas de Harry Potter desde la API.
   * @returns Un Observable con la lista de películas.
   */
  fetchMovies(): Observable<movie[]> {
    return this.http.get<movie[]>(`${apiUrl.apiMovies}`);
  }

  /**
   * Obtiene la lista completa de hechizos desde la API.
   * @returns Un Observable con los datos de los hechizos.
   */
  fetchSpells(): Observable<Spells> {
    return this.http.get<Spells>(`${apiUrl.apiHechizos}`);
  }

  /**
   * Obtiene solo los datos de los hechizos en formato de array.
   * @returns Un Observable con la lista de hechizos.
   */
  fetchSpellData(): Observable<Datum[]> {
    return this.fetchSpells().pipe(
      map((spells: Spells) => spells.data)
    );
  }

  /**
   * Obtiene los detalles de un hechizo específico.
   * @returns Un Observable con los detalles del hechizo.
   */
  fetchSpellsDetails(): Observable<Spells> {
    return this.http.get<Spells>(`${this.URLSpellsMors}${this.contador}`);
  }

  /**
   * Obtiene solo los datos de los hechizos detallados.
   * @returns Un Observable con la lista de detalles de los hechizos.
   */
  fetchSpellDataDetails(): Observable<Datum[]> {
    return this.fetchSpellsDetails().pipe(
      map((spells: Spells) => spells.data)
    );
  }

  /**
   * Obtiene la lista de pociones desde la API.
   * @returns Un Observable con la lista de pociones.
   */
  fetchPotions(): Observable<PotionResponse> {
    return this.http.get<PotionResponse>(`${apiUrl.apiPociones}${this.contadorPociones}`);
  }

  /**
   * Obtiene solo los datos de las pociones en formato de array.
   * @param urlNext URL para obtener más datos de pociones (paginación).
   * @returns Un Observable con la lista de pociones.
   */
  fetchPotionsData(urlNext: string): Observable<Potion[]> {
    return this.fetchPotions().pipe(
      map((potion: PotionResponse) => potion.data)
    );
  }
}

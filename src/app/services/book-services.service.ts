import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { usuario } from '../interfaces/usuario/usuario.interface';
import { map, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { threadId } from 'worker_threads';

// Definir la interfaz de Libro para tipar correctamente los datos recibidos
export interface Libro {
  id: number;
  title: string;
  pages?: number;
  price: number;
  imagenUrl?: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  


    private AppUrl: string;
    private ApiUrl: string;
    private ApiUrlRegister : string;
  
  
    constructor(private Http: HttpClient) {
      
      this.AppUrl = environment.apiUrl
      this.ApiUrl = 'api/book/list'
      this.ApiUrlRegister = 'api/book/register'
      
    }

    // Devuelve los libros de los usuariods

     // Obtener libros de un usuario
     getLibroUser(id: number): Observable<Libro[]> {
      return this.Http.get<{ books: Libro[] }>(`${this.AppUrl}${this.ApiUrl}/${id}`).pipe(
        map(response => response.books || []) // Si no hay libros, retorna un array vacío
      );
    }

    // Añadir libro desde la api

    addLibroUser(books: Libro): Observable<any>{
      return this.Http.post(`${this.AppUrl}${this.ApiUrlRegister}`, books)
    }


}

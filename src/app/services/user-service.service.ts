import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { usuario } from '../interfaces/usuario/usuario.interface';
import { map, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private AppUrl: string;
  private ApiUrl: string;


  constructor(private Http: HttpClient) {
    
    this.AppUrl = environment.apiUrl
    this.ApiUrl = 'api/user'
    
  }
  

  // funcion register

  signIn(user: usuario): Observable<any>{
    console.log('Entro')
    return this.Http.post(`${this.AppUrl}${this.ApiUrl}/register/`, user)

  }

  // funcion loggin

  logIn(user: usuario): Observable<any> {
    return this.Http.post<{ token: string }>(`${this.AppUrl}${this.ApiUrl}/loggin/`, user).pipe(
      map(response => {
        localStorage.setItem('token', response.token); // Guardamos el token en localStorage
        return response;
      })
    );
  }
  

  // devuelve el id de usuario para asignar su libros correspondientes
  getIdUser(gmail: string): Observable<number> {
    return this.Http.get<{ id: number }>(`${this.AppUrl}${this.ApiUrl}/${gmail}`)
      .pipe(map(response => response.id)); // Extrae solo 'id' automáticamente
  }

}


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuario } from '../../interfaces/usuario/usuario.interface';

@Injectable({
  providedIn: 'root' // Disponible en toda la app
})
export class UserSessionService {
  private usuarioActual = new BehaviorSubject<usuario | null>(null);

  constructor() {}

  // Método para actualizar el usuario actual
  setUsuario(usuario: usuario) {
    this.usuarioActual.next(usuario);
  }

  // Método para obtener el usuario como observable
  getUsuario() {
    return this.usuarioActual.asObservable();
  }

  // Método para obtener el valor actual sin suscribirse
  getUsuarioActual() {
    return this.usuarioActual.value;
  }
}

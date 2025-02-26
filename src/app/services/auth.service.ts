import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/usuario/usuario.interface'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios: usuario[] = [];
  private usuarioActual = new BehaviorSubject<usuario | null>(null); // Estado del usuario logueado

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Si hay un usuario guardado en localStorage, establecerlo en el BehaviorSubject
      const userLogged = localStorage.getItem('userLogged');
      if (userLogged) {
        this.usuarioActual.next(JSON.parse(userLogged));
      }
    }
  }
  
  /**
   * Registra un usuario en el sistema
   * @param user usuario a registrar
   * @returns mensaje de éxito o error
   */
  register(user: usuario): string {
    const existe = this.usuarios.find(u => u.gmail === user.gmail);
    if (existe) {
      return "El usuario ya está registrado.";
    }

    if (user.contrasenia !== user.confcontrasenia) {
      return "Las contraseñas no coinciden.";
    }

    this.usuarios.push(user);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    return "Usuario registrado correctamente.";
  }

  /**
   * Inicia sesión con correo y contraseña
   * @param gmail correo del usuario
   * @param contrasenia contraseña del usuario
   * @returns true si el login es exitoso, false si falla
   */
  login(gmail: string, contrasenia: string): boolean {
    const usuario = this.usuarios.find(u => u.gmail === gmail && u.contrasenia === contrasenia);

    if (usuario) {
      localStorage.setItem('userLogged', JSON.stringify(usuario));
      this.usuarioActual.next(usuario); // Actualizar el estado del usuario autenticado
      return true;
    }

    return false;
  }

  /**
   * Cierra la sesión del usuario actual
   */
  logout() {
    localStorage.removeItem('userLogged');
    this.usuarioActual.next(null);
  }

  /**
   * Verifica si hay un usuario autenticado
   * @returns boolean indicando si hay un usuario logueado
   */
  isAuthenticated(): boolean {
    return this.usuarioActual.value !== null;
  }

  /**
   * Obtiene el usuario actualmente autenticado
   * @returns Observable del usuario actual o null si no hay usuario
   */
  getUsuarioActual(): Observable<usuario | null> {
    return this.usuarioActual.asObservable(); // Permite a los componentes suscribirse a los cambios
  }

  getUsuarioActualSync(): usuario | null {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const userLogged = localStorage.getItem('userLogged');
        return userLogged ? JSON.parse(userLogged) : null;
      }
    } catch (error) {
      console.warn('LocalStorage no está disponible:', error);
    }
    return null;
  }

  /*
  getUsuarioActualSync(): usuario | null {
    const userLogged = localStorage.getItem('userLogged');
    return userLogged ? JSON.parse(userLogged) : null;
  }
  */
  actualizarUsuario(usuario: usuario) {
    localStorage.setItem('userLogged', JSON.stringify(usuario));
  }
}

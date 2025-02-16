import { Component } from '@angular/core';
import { usuario } from '../../interfaces/usuario/usuario.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

/**
 * Componente para el formulario de registro de usuarios.
 * 
 * @author Gonzalo Sanchez-Ros Paz
 */
@Component({
  selector: 'app-form-register',
  standalone: false,
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  /**
   * Formulario reactivo que contiene los campos del registro y sus validaciones.
   */
  formUser = new FormGroup({
    'gmail': new FormControl('', [Validators.required, Validators.email]),
    'nombreUsu': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'nombreReal': new FormControl('', [Validators.required]),
    'apellidoReal': new FormControl('', [Validators.required]),
    'contrasenia': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'confcontrasenia': new FormControl('', [Validators.required]) 
  });

  /**
   * Usuario actual que será utilizado en el formulario.
   */
  usuActual: usuario = {
    nombreUsu: '',
    nombreReal: '',
    apellidoReal: '',
    contrasenia: '',
    confcontrasenia: '',
    gmail: ''
  };

  /**
   * Campos individuales del formulario con validaciones.
   */
  gmail = new FormControl('', [Validators.required, Validators.email]);
  nombreUsu = new FormControl('', [Validators.required, Validators.minLength(3)]);
  nombreReal = new FormControl('', [Validators.required]);
  apellidoReal = new FormControl('', [Validators.required]);
  contrasenia = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confcontrasenia = new FormControl('', [Validators.required]);

  /**
   * Comprueba si la contraseña y la confirmación de contraseña coinciden.
   * 
   * @returns `true` si las contraseñas coinciden, de lo contrario `false`.
   */
  comprobarContrasenia(): boolean {
    return this.contrasenia.value === this.confcontrasenia.value;
  }

  /**
   * Maneja el envío del formulario.
   * Realiza la validación de la contraseña antes de procesar el registro.
   */
  onSubmit(): void {
    if (this.comprobarContrasenia()) {
      // Lógica a ejecutar si las contraseñas coinciden
    } else {
      // Lógica a ejecutar si las contraseñas no coinciden
    }
  }
}

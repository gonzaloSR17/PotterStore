import { Component } from '@angular/core';
import { usuario } from '../../interfaces/usuario/usuario.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

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

  mensajeExito: string = '';
  mensajeError: string = '';

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
    usuario: '',
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
      this.register();
      // Lógica a ejecutar si las contraseñas coinciden
    } else {
      // Lógica a ejecutar si las contraseñas no coinciden
    }
  }

  mensaje = '';

  constructor(private authService: AuthService,
    private userService: UserServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // funcion para registrarsew
  register(){

    this.mensaje = this.authService.register(this.usuActual);

    if (this.mensaje === "Usuario registrado correctamente."){
      this.toastr.success('REGISTRO EXITOSO!', 'Bienvenido Al Mundo Mágico!');

      // Redirigir a la página de login después de 3 segundos
      setTimeout(() => {
        this.router.navigate(['/loggin']);
      }, 3000);
    }
    // crear el objeto
/*
    const newUser: usuario  = {

      usuario: this.usuActual.usuario,
      nombreReal: this.usuActual.nombreReal,
      apellidoReal: this.usuActual.apellidoReal,
      gmail: this.usuActual.gmail,
      contrasenia: this.usuActual.contrasenia,


    }
    
   
    console.log(newUser)
    this.userService.signIn(newUser).subscribe(
      (data) => {
        console.log('Usuario creado con éxito ' + this.nombreUsu);
        this.toastr.success('REGISTRO EXITOSO!', 'Bienvenido Al Mundo Mágico!');
    
        
      },
      (event: HttpErrorResponse) => {
        if (event.error?.msg) {  // Verificamos que exista 'msg' para evitar errores
          console.log(event.error.msg);
          this.toastr.warning(event.error.msg, 'Error');
        } else {
          this.toastr.error('Existe un error en el servidor', 'Error');
        }
      }
    );
    
*/
  }
}


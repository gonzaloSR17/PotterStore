import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { usuario } from '../../interfaces/usuario/usuario.interface';
import { UserSessionService } from '../../services/usuNow/usu-now.service';

@Component({
  selector: 'app-form-loggin',
  standalone: false,
  
  templateUrl: './form-loggin.component.html',
  styleUrl: './form-loggin.component.css'
})
export class FormLogginComponent {

  
  
  usuLog: usuario = {
    gmail: '',
    contrasenia: ''
  };

  usuActual: usuario = {
    gmail: '',
    contrasenia: ''
  }
  formUserLoggin = new FormGroup({
    'gmail':new FormControl('', [Validators.required, Validators.minLength(3)]),
    'contrasenia': new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private authService: AuthService,
    private userLoggin: UserServiceService,
    private router: Router,
    private toastr: ToastrService,
    private userSession: UserSessionService

  ) {}

  loggin() {

    if (this.formUserLoggin.valid) {
      const { gmail, contrasenia } = this.formUserLoggin.value;
      
      if (gmail && contrasenia && this.authService.login(gmail, contrasenia)) {
        console.log('Loggin exitoso');
        this.toastr.success('REGISTRO EXITOSO!', 'Bienvenido Al Mundo Mágico!');

        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
        
      } else {
        this.toastr.error('Error al iniciar sesión', 'Credenciales incorrectas');
      }
    }
  }

  /*
    const usuActual: usuario = {
      gmail: this.usuLog.gmail,
      contrasenia: this.usuLog.contrasenia
    };
  
    this.userLoggin.logIn(usuActual).subscribe(
      (data) => {
        console.log('Cuenta iniciada con éxito');
  
        // Aquí imprimimos el token en consola para prueba
        const token = localStorage.getItem('token');
        console.log('Token recibido:', token); 
  
  
        // Guardar usuario en sesión
        this.userSession.setUsuario(usuActual);
  
        // Redirigir al usuario
        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
      },
      (error: HttpErrorResponse) => {
        console.error('Error en login:', error);
      }
    );
    */
  }
  
  


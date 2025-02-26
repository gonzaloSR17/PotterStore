import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSessionService } from '../../../services/usuNow/usu-now.service';
import { usuario } from '../../../interfaces/usuario/usuario.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  // creamos objeto de usuario vacio
  usuarioActual: usuario | null = null;

  constructor(private userSession: UserSessionService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {

    this.authservice.getUsuarioActual().subscribe(user => {
      this.usuarioActual = user;
    });

  }


  
}

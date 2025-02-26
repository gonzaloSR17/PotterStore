import { Component } from '@angular/core';
import { pedido } from '../../../interfaces/usuario/pedido.interfaace';
import { AuthService } from '../../../services/auth.service';

/**
 * Componente que muestra la lista de pedidos de un usuario autenticado.
 * Se encarga de obtener y mostrar los pedidos asociados al usuario actual.
 * 
 * @author [Tu Nombre]
 */
@Component({
  selector: 'app-list-pedido',
  standalone: false,
  templateUrl: './list-pedido.component.html',
  styleUrl: './list-pedido.component.css'
})
export class ListPedidoComponent {

  /** Lista de pedidos del usuario actual */
  pedidos: pedido[] = [];

  /**
   * Constructor del componente.
   * @param authService Servicio de autenticación para obtener el usuario actual.
   */
  constructor(private authService: AuthService) {}

  /**
   * Método de ciclo de vida de Angular que se ejecuta al inicializar el componente.
   * Llama a la función para obtener los pedidos del usuario autenticado.
   */
  ngOnInit() {
    this.obtenerPedidos();
  }

  /**
   * Obtiene los pedidos del usuario autenticado y los almacena en la variable `pedidos`.
   * Si el usuario tiene pedidos registrados, los carga en la lista.
   */
  obtenerPedidos() {
    const usuario = this.authService.getUsuarioActualSync();
    if (usuario && usuario.pedido) {
      this.pedidos = usuario.pedido;
      console.log(this.pedidos);
    }
  }
}

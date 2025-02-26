import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart/cart-service.service'; 
import { pedido } from '../../../interfaces/usuario/pedido.interfaace'; 
import { Router } from '@angular/router';

/**
 * Componente que gestiona el formulario de pedidos.
 * Permite al usuario ingresar sus datos y confirmar la compra de los productos en la cesta.
 * 
 * @author Gonzalo
 */
@Component({
  selector: 'app-form-pedido',
  standalone: false,
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css'
})
export class FormPedidoComponent {
  
  /** Mensaje de éxito que se muestra cuando el pedido se ha realizado correctamente */
  mensajeExito: string = '';

  /**
   * Constructor del componente.
   * @param cartService Servicio para gestionar el carrito de compras.
   * @param router Servicio para la navegación entre rutas.
   */
  constructor(private cartService: CartService, private router: Router) {}

  /**
   * Formulario reactivo para la recopilación de datos del pedido.
   */
  pedidoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9,12}$")]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5)]),
    ciudad: new FormControl('', [Validators.required]),
    codigoPostal: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{5}$")]),
    metodoPago: new FormControl('Tarjeta', [Validators.required]),
    notas: new FormControl('')
  });

  /**
   * Maneja el envío del formulario, validando los datos y generando el pedido.
   * Si el formulario es válido, se crea un nuevo pedido, se vacía la cesta y se redirige al perfil del usuario.
   */
  onSubmit() {
    if (this.pedidoForm.valid) {
      // Crear el objeto de pedido con los datos del formulario y los productos en la cesta
      const nuevoPedido: pedido = {
        fecha: new Date().toISOString(),
        productos: [...this.cartService['cestaLibros'], ...this.cartService['cestaPeliculas']], 
        estado: 'Pendiente',
        detalles: this.pedidoForm.value // Incluye los datos del formulario en el pedido
      };

      // Guardar el pedido y vaciar la cesta
      this.cartService.realizarPedido(nuevoPedido);

      // Mostrar mensaje de éxito
      this.mensajeExito = '¡Pedido realizado con éxito!';
      console.log(nuevoPedido);

      // Limpiar el formulario
      this.pedidoForm.reset();

      // Vaciar la cesta de libros
      this.cartService.vaciarCestaLibros();

      // Redirigir al usuario al perfil para ver sus pedidos después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/perfil']);
      }, 2000);
    }
  }
}

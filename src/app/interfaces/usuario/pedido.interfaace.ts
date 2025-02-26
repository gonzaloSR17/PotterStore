import { IBook } from "./libro.interface";
import { pelicula } from "./pelicula.interface";

export interface pedido {
    fecha: string; // Fecha del pedido en formato ISO (YYYY-MM-DDTHH:mm:ss)
    productos: (IBook | pelicula)[]; // Lista de libros y películas del pedido
    estado: 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado'; // Estado del pedido
    detalles: any; // Aquí se guardan los datos del formulario de pedido
}

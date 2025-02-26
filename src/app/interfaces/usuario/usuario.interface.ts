import { IBook } from "./libro.interface"
import { pelicula } from "./pelicula.interface"
import { pedido } from "./pedido.interfaace"

export interface usuario{
    id? : number,
    usuario? : string,
    nombreReal?: string,
    apellidoReal?: string,
    contrasenia: string,
    confcontrasenia?: string,
    gmail: string,   
    cesta?: IBook[], 
    cesta2?: pelicula[],
    pedido?: pedido[]

}
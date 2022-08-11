import { DetalleDTO } from "./DetalleDTO";

export interface PreFacturaDTO {
    nombreCliente   : string;
    nitCliente      : string;
    subtotal        : number;
    descuento       : number;
    total           : number;
    creditoFiscal   : number;
    detalle         : DetalleDTO[];
}
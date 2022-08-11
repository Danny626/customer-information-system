import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { 
  ParamBusquedaDTO,
  PreFacturaDTO 
} from '../dtos/DTO';

@Injectable({
  providedIn: 'root'
})
export class PreFacturaService {

  HOST: string = 'http://localhost:8080/preFactura';
  url: string = `${this.HOST}/preFactura`;
  preFacturaCambio = new Subject<PreFacturaDTO[]>();
  mensaje = new Subject<string>();

  constructor(private http: HttpClient) { }

  calculoFactura(paramBusqueda: ParamBusquedaDTO) {
    /* const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token; */
    return this.http.post(`${this.url}/calculoFactura`, paramBusqueda, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

}

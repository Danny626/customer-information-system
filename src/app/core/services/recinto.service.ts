import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recinto } from '../models/recinto';

@Injectable({
  providedIn: 'root'
})
export class RecintoService {

  HOST: string = 'http://localhost:8080/preFactura';
  url: string = `${this.HOST}/recinto`;
  recintoCambio = new Subject<Recinto[]>();
  mensaje = new Subject<string>();

  constructor(private http: HttpClient) { }

  listarRecintos() {
    /* const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    return this.http.get<Recinto[]>(`${this.url}/lista`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
        .set('Content-Type', 'application/json'),
    }); */
    return this.http.get<Recinto[]>(`${this.url}/lista`);
  }

}

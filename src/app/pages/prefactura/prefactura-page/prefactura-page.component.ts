import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';
import { DetalleDTO, PreFacturaDTO } from 'src/app/core/dtos/DTO';

@Component({
  selector: 'app-prefactura-page',
  templateUrl: './prefactura-page.component.html',
  styleUrls: ['./prefactura-page.component.css']
})
export class PrefacturaPageComponent implements OnInit {

  showVistaCalculo: boolean = false;
  preFacturaCambio: BehaviorSubject<PreFacturaDTO | null>;
  detallePreFacturaCambio: BehaviorSubject<DetalleDTO[]>;

  constructor(
    private titleService: Title,
    private logger: NGXLogger,
  ) { 
    this.preFacturaCambio = new BehaviorSubject<PreFacturaDTO | null>(null)
    this.detallePreFacturaCambio = new BehaviorSubject<DetalleDTO[]>([])
  }

  ngOnInit(): void {
    this.titleService.setTitle('Información Cliente - PreFactura');
    this.logger.log('PreFactura loaded');
  }

  sendPreFactura(preFactura: PreFacturaDTO) {
    this.preFacturaCambio.next(preFactura);
    this.detallePreFacturaCambio.next(preFactura.detalle)
    this.showVistaCalculo = true;
  }

}

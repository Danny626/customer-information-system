import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { DetalleDTO } from 'src/app/core/dtos/DTO';


@Component({
  selector: 'app-detalle-cobro',
  templateUrl: './detalle-cobro.component.html',
  styleUrls: ['./detalle-cobro.component.css']
})
export class DetalleCobroComponent implements OnInit, AfterViewInit {

  /* @Input() detalleInput!: Subject<DetalleDTO[]>; */
  @Input() detalleInput!: BehaviorSubject<DetalleDTO[]>;

  detalle: DetalleDTO[] = [];

  displayedColumns: string[] = ['codProd', 'cantidad', 'unidadMedida', 'descripcion', 'precioUnitario', 'descuento', 'subtotal'];
  dataSourceDetalle = new MatTableDataSource(this.detalle);

  constructor() {
  }
  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.detalleInput.subscribe(v => { 
      /* console.log('value is changing', v); */
      this.dataSourceDetalle.data = v;
    });
  }
  

}

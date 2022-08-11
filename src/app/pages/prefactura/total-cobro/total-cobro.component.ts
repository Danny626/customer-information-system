import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { PreFacturaDTO, TotalCobroDTO } from 'src/app/core/dtos/DTO';

@Component({
  selector: 'app-total-cobro',
  templateUrl: './total-cobro.component.html',
  styleUrls: ['./total-cobro.component.css']
})
export class TotalCobroComponent implements OnInit {

  @Input() preFacturaInput: BehaviorSubject<PreFacturaDTO | null>;

  totalCobro: TotalCobroDTO[] = [];

  displayedColumns: string[] = ['titulo', 'valor'];
  dataSourceTotalCobro = new MatTableDataSource(this.totalCobro);

  constructor() {
    this.preFacturaInput = new BehaviorSubject<PreFacturaDTO | null>(null)
  }

  ngOnInit(): void {
    this.preFacturaInput.subscribe(v => {
      if(v != null) {
        const totalCobroDto: TotalCobroDTO[] = [
          { titulo : 'SubTotal', valor : v.subtotal },
          { titulo : 'Descuento', valor : v.descuento },
          { titulo : 'Total', valor : v.total }
        ]
        this.dataSourceTotalCobro.data = totalCobroDto;
      }
    });
  }

}

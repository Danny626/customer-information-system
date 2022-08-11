import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersModule } from 'src/app/features/customers/customers.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParametrosCalculoComponent } from './parametros-calculo/parametros-calculo.component';
import { PrefacturaPageComponent } from './prefactura-page/prefactura-page.component';
import { PrefacturaRoutingModule } from './prefactura-routing.module';
import { VistaCalculoComponent } from './vista-calculo/vista-calculo.component';
import { DetalleCobroComponent } from './detalle-cobro/detalle-cobro.component';
import { TotalCobroComponent } from './total-cobro/total-cobro.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrefacturaRoutingModule
  ],
  declarations: [
    PrefacturaPageComponent,
    ParametrosCalculoComponent,
    VistaCalculoComponent,
    DetalleCobroComponent,
    TotalCobroComponent
  ],
  exports: [
    PrefacturaPageComponent
  ]
})
export class PrefacturaModule { }

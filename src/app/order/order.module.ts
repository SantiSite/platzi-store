import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OrderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// -----------------------------------------------
import { OrderRoutingModule } from './order-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// -----------------------------------------------
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent],
  providers: [OrderService]
})
export class OrderModule { }

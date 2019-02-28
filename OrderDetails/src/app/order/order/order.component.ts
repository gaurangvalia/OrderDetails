import { Component, OnInit } from '@angular/core';
// ----------------------------------
import { Order } from '../order.model';
import { OrderService } from '../services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Component
 * @author Gaurang Valia
 * @description : this component is use for the all CRUD opration in service...
 * @param order : is a Order.model type is use for retrive data form services
 * @param orderDetails : is formgroup type is use for retrive data form html file and check is velidation.
 */
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public order: Order[];
  private orderDetails: FormGroup;

  /**
   * Creates an instance of order component.
   * @param http : is type of OrderService is use to orderservice method
   * @param _fb : formbuilder is use to build formgroup to formcontrol
   */
  constructor(private http: OrderService, private _fb: FormBuilder) {

  }

  /**
   * on init call the getOrderDetails() method and check all validation
   */
  public ngOnInit() {
    this.getOrderDetails();
    this.orderDetails = this._fb.group({
      productname: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  /**
   * Gets order details call the service and call getOrder() method retrun all OrderData
   */
  public getOrderDetails() {
    this.http.getOrder().subscribe((response) => {
        this.order = response;
    });
  }

  /**
   * Determines whether add order on  OrderService and call the SetOrder() method in orderService
   */
  public onAddOrder() {
    this.http.setOrder(this.orderDetails.value).subscribe((response) => {
      this.getOrderDetails();
      this.orderDetails.reset();
    });
  }

  /**
   * Edits item
   * @param order:only selected item can retive in this param
   */
  public EditItem(order: Order) {
    console.log('data->', order);
    // set the value in controls
    this.orderDetails.controls['productname'].setValue(order.productname);
    this.orderDetails.controls['price'].setValue(order.price);



  }

  /**
   * Deletes item
   * @param id : get the id from one orderItem is delete
   */
  public deleteItem(id: number) {
      this.http.deleteOrder(id).subscribe((response) => {
      this.getOrderDetails();
    });
  }
}

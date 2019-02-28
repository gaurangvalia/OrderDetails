import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../order.model';


/**
 * @author : Gaurang Valia
 * @description: this service is create for Order Table Insert, Delete, Update  And delete opration
 *             with httpClient
 * @param baseUrl : this is a JSON Database Url
 */
@Injectable()
export class OrderService {

  private order: Order[];
  private baseUrl = 'http://localhost:3000/Order';
  /**
   * Creates an instance of order service.
   * @param http : use the HttpClient for use service in http (get,post,put,delete)
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets order
   * @returns order :get all the data in Order table
   */
  public getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  /**
   * Sets order
   * @param orderData : Add new Item in Order table
   * @returns order response the order Type data
   */
  public setOrder(orderData: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, orderData);
  }

  /**
   * Deletes order
   * @param id : Only One id can pass in delete services in Order table
   * @returns order response the order Type data
   */
  public deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + '/' + id);
  }

  /**
   * Edits order
   * @param order get the component
   * @returns order
   */
  public editOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl, order);
  }
}

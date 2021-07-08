import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  public getOrders() {
    return this.http.get(environment.urlLink + '/getOrders');
  }

  public addOrder(orderData: any) {
    return this.http.post(environment.urlLink + '/addOrder', orderData);
  }

  public deleteOrder(id: any) {
    return this.http.delete(environment.urlLink + '/deleteOrder/' + id);
  }

  public updateOrder(order: Order) {
    return this.http.put(environment.urlLink + '/updateOrder', order);
  }

  public getRegular() {
    return this.http.get(environment.urlLink + '/regular');
  }

  public getDiscounted() {
    return this.http.get(environment.urlLink + '/discounted');
  }
}

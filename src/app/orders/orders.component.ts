import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() order: Order = new Order();

  orderDetails = null as any;
  updateMode = false;
  upOrder = new Order();
  totalReg = null as any;
  totalDisc = null as any;

  constructor(private orderService: OrderService) {
    // this.getOrderDetails();
  }

  getOrderDetails() {
    this.orderService.getOrders().subscribe(
      (resp) => {
        console.log(resp);
        this.orderDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
    this.getRegular();
    this.getDiscounted();
  }

  addOrder(addOrderForm: NgForm) {
    this.orderService.addOrder(addOrderForm.value).subscribe(
      (resp) => {
        console.log(resp);
        addOrderForm.reset();
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    this.getRegular();
    this.getDiscounted();
  }

  deleteOrder(id: any) {
    this.orderService.deleteOrder(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    this.getRegular();
    this.getDiscounted();
  }

  update(order: any) {
    this.upOrder = Object.assign({}, order);
    this.updateMode = true;
    console.log('Update Mode is true');
  }

  updateOrder() {
    this.orderService.updateOrder(this.upOrder).subscribe(
      (resp) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    this.updateMode = false;
    this.getRegular();
    this.getDiscounted();
  }

  getRegular() {
    this.orderService.getRegular().subscribe(
      (resp) => {
        console.log(resp);
        this.totalReg = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDiscounted() {
    this.orderService.getDiscounted().subscribe(
      (resp) => {
        console.log(resp);
        this.totalDisc = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getOrderDetails();
    this.getRegular();
    this.getDiscounted();
    this.getOrderDetails();
  }
}

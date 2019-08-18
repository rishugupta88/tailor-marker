import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable()
export class AppService {

  //customers
  postColl: AngularFirestoreCollection<Customer>;
  getDoc: AngularFirestoreDocument<any>;
  customers: Observable<Customer[]>;
  customer: Observable<any>;
  updateCustomer: any;


  //orders
  OrdersColl: AngularFirestoreCollection<any>;
  orders: Observable<any>;
  updateOrder: any;

  constructor(private afs: AngularFirestore) {
    this.postColl = this.afs.collection('customers');
    this.customers = this.postColl.valueChanges();

    this.OrdersColl = this.afs.collection('orders');
    this.orders = this.OrdersColl.valueChanges();
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(custContact: any) {
    this.getDoc = this.afs.collection('customers').doc(custContact);
    this.customer = this.getDoc.valueChanges();
    return this.customer;
  }

  addNewCustomer(customer: Customer) {
    this.afs.collection('customers').doc(customer.custContact).set(customer);
  }

  updateCustomerMethod(updateCustomerObject: any, customerContact: any) {
    this.updateCustomer = this.afs.collection('customers').doc(customerContact);
    console.log(updateCustomerObject);
    this.updateCustomer.update(updateCustomerObject);
  }


  //Order Section --START 
  createNewOrder(order: any) {
    this.afs.collection('orders').doc(order.orderNumber).set(order);
  }

  cancelOrder(orderNumber: any) {
    this.updateOrder = this.afs.collection('orders').doc(orderNumber);
    this.updateOrder.update({ status: "cancelled" });
  }

  deliverOrder(orderNumber: any) {
    this.updateOrder = this.afs.collection('orders').doc(orderNumber);
    this.updateOrder.update({ status: "delivered" });
  }

  getAllOrders() {
    return this.orders;
  }

}



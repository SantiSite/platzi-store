import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  public carrito$ = this.cart.asObservable();


  constructor() { }

  addCart(product: Product): void {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  deleteCart(id: string): void {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
    this.products = [...this.products];
    this.cart.next(this.products);
  }
}

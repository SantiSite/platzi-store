import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/core/service/cart/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, OnDestroy, DoCheck {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    console.log('1.constructor');
  }
  // ngOnChanges(changes: SimpleChanges) {
  //  console.log('2.ngOnChanges');
  //  console.log(changes);
  // }

  ngOnInit(): void {
    console.log('3.ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4.ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5.ngOnDestroy');

  }

  addCart(): void {
    console.log('Se añadio al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}

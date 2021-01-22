import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Product } from '../../../product.model';
import { CartService } from '../../../core/service/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

 products$: Observable<Product[]>;
 form: FormGroup;
 isLinear = true;


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.formOrderInf();
    this.products$ = this.cartService.carrito$;
  }

  ngOnInit(): void {
  }

  formOrderInf(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  addProduct(product: Product): void {
    this.cartService.addCart(product);
  }

  deleteProduct(id: string): void {
    this.cartService.deleteCart(id);
    console.log('Producto eliminado: ', this.products$);
  }
}

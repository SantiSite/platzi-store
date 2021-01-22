import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/service/products/products.service';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id)
      .subscribe(rta => {
        console.log('ProductModel deleted rta::::', rta);
        if (rta) {
          const index = this.products.findIndex((product) => product.id === id);
          this.products.splice(index, 1);
          this.products = [...this.products];
        }
      });
  }
}

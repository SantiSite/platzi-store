import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductsService} from 'src/app/core/service/products/products.service';
import {Product} from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);

    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  creatProduct(): void {
    const newProduct: Product = {
      id: '12342',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.webp',
      price: 3000,
      description: 'jajajajaja hola ajajajaj'
    };

    this.productsService.creatProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(): void {
    const updateProduct: Partial<Product> = {
      price: 55555,
      description: 'Actualizando descripción'
    };
    this.productsService.updateProduct('3', updateProduct)
      .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(): void {
    this.productsService.deleteProduct('3')
      .subscribe(rta => {
        console.log(rta);
        // En este caso me devolvera un true o false si se elimino correctamente
      });
  }
}

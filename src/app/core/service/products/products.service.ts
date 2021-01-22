import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Product} from '../../../product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }

  creatProduct(product: Product): Observable<object> {
    return this.http.post(environment.url_api, product);
  }

  // Partial hace que todas las propiedades de un TIPO sean opcionales.
  // lo que seria lo mismo de ponerles a cada propiedad un simnolo de ? despues del nombre de la propiedad.

  updateProduct(id: string, changes: Partial<Product>): Observable<object> {
    return this.http.put(`${environment.url_api}${id}`, changes);
  }

  deleteProduct(id: string): Observable<object> {
    return this.http.delete(`${environment.url_api}${id}`);
  }
}

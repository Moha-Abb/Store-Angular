import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


const URL_STORE = 'https://fakestoreapi.com'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {

    return this.httpClient.get<Array<Product>>(
      `${URL_STORE}/products${category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }
  getAllCategories(): Observable<Array<string>> {

    return this.httpClient.get<Array<string>>(
      `${URL_STORE}/products/categories`
    )
  }
}

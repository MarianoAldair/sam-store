import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product.model'
import { ProductDto } from '../dtos/product.dto'
import { patchProduct } from '../dtos/patch.product.dto'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products'
  
  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  create(product: ProductDto) {
    return this.http.post<Product>(this.apiUrl, product)
  }

  update(id: string, product: patchProduct) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}

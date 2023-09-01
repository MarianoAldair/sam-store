import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Product } from '../models/product.model'
import { ProductDto } from '../dtos/product.dto'
import { patchProduct } from '../dtos/patch.product.dto'
import { checkAdd } from '../interceptors/security.interceptor'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products'
  
  getAll(limit?: number, offset?: number) {
    let params = new HttpParams();
    if(limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);      
    }
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

  getProductsByPagination(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}?limit=${limit}&offset=${offset}`)

    // return this.http.get<Product[]>(`${this.apiUrl}`, {
    //   params: { limit, offset }
    // })
  }
}

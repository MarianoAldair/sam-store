import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private productsToCart: Product[] = [];
  private totalToPay = 0;
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable();

  get getProductsToCart() {
    return this.productsToCart;
  }

  get getTotalToPayCart() {
    return this.totalToPay;
  }

  addedProduct(product: Product) {
    this.productsToCart.push(product);
    this.cart.next(this.productsToCart)
  }

  getTotal() {
    return this.productsToCart.reduce((sum, item) => sum + item.price, 0)
  }

}

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private productsToCart: Product[] = [];
  private totalToPay = 0;

  get getProductsToCart() {
    return this.productsToCart;
  }

  get getTotalToPayCart() {
    return this.totalToPay;
  }

  addedProduct(product: Product) {
    this.productsToCart.push(product);
  }

  getTotal() {
    return this.productsToCart.reduce((sum, item) => sum + item.price, 0)
  }

}

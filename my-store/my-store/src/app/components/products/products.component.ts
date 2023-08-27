import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model'
import { CartService } from '../../services/cart.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {
    this.productsToCart = this.cartService.getProductsToCart;
    this.totalToPay = this.cartService.getTotalToPayCart;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    });
  }

  products: Product[] = [
    // {
    //   title: 'Bermies',
    //   price: 35,
    //   description: 'Some cool description',
    //   img: '/assets/images/bermies.webp'
    // },
    // {
    //   title: 'Bottom bikini',
    //   price: 50,
    //   description: 'Some cool description',
    //   img: '/assets/images/bottom-bikini.png'
    // },
    // {
    //   title: 'Parasol',
    //   price: 70,
    //   description: 'Some cool description',
    //   img: '/assets/images/parasol.webp'
    // },
    // {
    //   title: 'Skirt',
    //   price: 50,
    //   description: 'Some cool description',
    //   img: '/assets/images/skirt.jpg'
    // },
    // {
    //   title: 'Sunglasses',
    //   price: 45,
    //   description: 'Some cool description',
    //   img: '/assets/images/sunglasses.webp'
    // },
    // {
    //   title: 'Top bikini',
    //   price: 90,
    //   description: 'Some cool description',
    //   img: '/assets/images/top-bikini.png'
    // },
    // {
    //   title: 'Woodcutter shirt',
    //   price: 105,
    //   description: 'Some cool description',
    //   img: '/assets/images/woodcutter-shirt.webp'
    // },
  ]

  productsToCart: Product[] = [];
  totalToPay = 0;

  addedProduct(product: Product) {
    this.cartService.addedProduct(product)
    this.totalToPay = this.cartService.getTotal();
  }
}

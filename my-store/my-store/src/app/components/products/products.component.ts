import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model'
import { CartService } from '../../services/cart.service'
import { ProductsService } from '../../services/products.service'
import { ProductDto } from '../../dtos/product.dto'

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

  @Output() loadMore = new EventEmitter();
  @Input() products: Product[] = [
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
  productDetailState = false;
  statusDetail: 'loading' | 'success' | 'failed' | 'init' = 'init' ;
  
  productChosen: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    images: [],
    category: {
      id: '',
      name: '',
      typeImg: ''
    }
  }

  addedProduct(product: Product) {
    this.cartService.addedProduct(product)
    this.totalToPay = this.cartService.getTotal();
  }

  toggleProductDetail() {
    this.productDetailState = !this.productDetailState;
  }

  showProductDetail(id: string) {
    this.statusDetail = 'loading'
    this.productsService.getById(id)
   .subscribe(product => {
    console.log('product:', product)
    this.toggleProductDetail();
    this.productChosen = product
    this.statusDetail = 'success'
   }, error => {
    this.statusDetail = 'failed'
    console.error(error, this.statusDetail)
   })
  }

  createNewProduct() {
    const product: ProductDto = {
      title: 'My first new product',
      price: 25,
      description: 'This is the first product posted on the API by the createNewProduct() method.',
      images: [],
      categoryId: '4'
    }
    this.productsService.create(product)
    .subscribe(product => {
      console.log('¡Creación del producto exitosa!', product);
      this.products.unshift(product);
    });
  }

  updateProduct() {
    const changes = {
      title: 'New title'
    }
    this.productsService.update(this.productChosen.id, changes)
    .subscribe(changes => {
      console.log('¡Cambios realizados con éxito!', changes);
      const productIndex = this.products.findIndex(prod => prod.id === this.productChosen.id);
      this.products[productIndex] = changes;
    })
  }

  deleteProduct() {
    this.productsService.delete(this.productChosen.id)
    .subscribe(prod => {
      const id = this.products.findIndex(product => product.id === this.productChosen.id)
      this.products.splice(id, 1)
      this.productDetailState = false;
      console.log('¡Eliminación del producto exitosa!', prod)
    })
  }

  goLoadMore() {
    this.loadMore.emit();
  }

  // loadMore() {
  //   console.log(this.limit, this.offset)
  //   this.productsService.getProductsByPagination(this.limit, this.offset)
  //   .subscribe(products => {
  //     this.products = this.products.concat(products)
  //     this.offset += this.limit;
  //   });
  // }
}

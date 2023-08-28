import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  @Input() product: Product = {
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

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() productDetail = new EventEmitter<string>();

  addCart() {
    this.addedProduct.emit(this.product)
  }

  showDetail() {
    this.productDetail.emit(this.product.id)
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product = {
    title: '',
    price: 0,
    description: '',
    img: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  addCart() {
    this.addedProduct.emit(this.product)
  }
}

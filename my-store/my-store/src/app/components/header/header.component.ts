import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private cartService: CartService
  ) {}


  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => {
      this.counter = products.length;
    })
  }
  hidden = false;

  counter = 0;
}

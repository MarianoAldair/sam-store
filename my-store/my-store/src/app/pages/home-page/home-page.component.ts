import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  products: Product[] = [];
  limit = 5;
  offset = 0;
  
  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProductsByPagination(this.limit, this.offset)
    .subscribe(products => {
      this.products = products
    });
  }
  
  loadMore() {
    this.productsService.getProductsByPagination(this.limit, this.offset).subscribe(values => {
      this.products = this.products.concat(values);
      this.offset += this.limit;
    })
  }

}

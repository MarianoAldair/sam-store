import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-category-pages',
  templateUrl: './category-pages.component.html',
  styleUrls: ['./category-pages.component.css']
})
export class CategoryPagesComponent {

  categoryId: string | null = null;
  products: Product[] = [];
  limit = 5;
  offset = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if(this.categoryId) {
          return this.productsService.getAllByCategory(this.categoryId, this.limit, this.offset)
        }
        return []
      })
    )
    .subscribe(products => {
      this.products = products;
    });
  }
}

import { Product } from '../models/product.model'

export interface ProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: string
}
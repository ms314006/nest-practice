import { Injectable } from '@nestjs/common';
import IProductsRepository from './interfaces/productsRepository.interface';
import Product from 'src/classes/Product';

@Injectable()
export class ProductsService {
  private repository: IProductsRepository;

  constructor(repository: IProductsRepository) {
    this.repository = repository;
  }

  getFeaturedProducts(isCustomerPreferred: boolean): Product[] {
    const discount = isCustomerPreferred ? 0.95 : 1;
    return this.repository.products
      .filter((product: Product) => product.isFeatured)
      .map(
        (product: Product) =>
          new Product(
            product.id,
            product.name,
            product.description,
            product.unitPrice * discount,
            product.isFeatured,
          ),
      );
  }
}

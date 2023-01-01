import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import CommerceContext from 'src/classes/CommerceContext';
import Product from 'src/classes/Product';

@Injectable()
export class ProductsService {
  private dbContext: CommerceContext;

  constructor() {
    this.dbContext = new CommerceContext({
      readFileSync: (fileName: string) => fs.readFileSync(fileName, 'utf8'),
    });
  }

  getFeaturedProducts(isCustomerPreferred: boolean): Product[] {
    const discount = isCustomerPreferred ? 0.95 : 1;
    return this.dbContext.products
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

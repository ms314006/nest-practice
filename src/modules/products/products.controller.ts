import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UserService } from 'src/modules/user/user.service';
import Product from 'src/classes/Product';

@Controller('products')
export class ProductsController {
  constructor(
    private userService: UserService,
    private productsService: ProductsService,
  ) {}

  @Get()
  async index(): Promise<Product[]> {
    const isPreferredCustomer: boolean =
      this.userService.isInRole('PreferredCustomer');
    return this.productsService.getFeaturedProducts(isPreferredCustomer);
  }
}

import { Controller, Get } from '@nestjs/common';
import IProductsService from './interfaces/productsService.interface';
import IUserService from '../user/interfaces/userService.interface';
import Product from 'src/classes/Product';

@Controller('products')
export class ProductsController {
  constructor(
    private userService: IUserService,
    private productsService: IProductsService,
  ) {}

  @Get()
  async index(): Promise<Product[]> {
    const isPreferredCustomer: boolean =
      this.userService.isInRole('PreferredCustomer');
    return this.productsService.getFeaturedProducts(isPreferredCustomer);
  }
}

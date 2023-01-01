import { Module } from '@nestjs/common';
import IProductsService from './interfaces/productsService.interface';
import IUserService from '../user/interfaces/userService.interface';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import CommerceContext from 'src/classes/CommerceContext';
import { UserService } from 'src/modules/user/user.service';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: IProductsService,
      useValue: new ProductsService(new CommerceContext()),
    },
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
})
export class ProductsModule {}

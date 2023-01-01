import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { UserService } from 'src/modules/user/user.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, UserService],
})
export class ProductsModule {}

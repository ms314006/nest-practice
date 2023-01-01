import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.modules';
import { ProductsModule } from './modules/products/products.modules';
import { UserModule } from './modules/user/user.modules';

@Module({
  imports: [CatsModule, ProductsModule, UserModule],
})
export class AppModule {}

import IProductRepository from '../interfaces/productsRepository.interface';
import Product from '../../../classes/Product';

class ProductsRepositoryMock implements IProductRepository {
  private _products: Product[];
  constructor(products: Product[]) {
    this._products = products;
  }

  get products(): Product[] {
    return this._products;
  }
}

export default ProductsRepositoryMock;

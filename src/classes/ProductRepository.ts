import CommerceContext from './CommerceContext';
import IProductRepository from 'src/modules/products/interfaces/productsRepository.interface';

class ProductRepository implements IProductRepository {
  private dbContext: CommerceContext;

  constructor(dbContext: CommerceContext) {
    this.dbContext = dbContext;
  }

  get products() {
    return this.dbContext.products;
  }
}

export default ProductRepository;

import Product from 'src/classes/Product';

abstract class IProductsService {
  abstract getFeaturedProducts(isPreferredCustomer: boolean): Product[];
}

export default IProductsService;

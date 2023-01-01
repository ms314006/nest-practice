import { ProductsService } from './products.service';
import ProductsRepositoryMock from './mocks/ProductsRepositoryMock';

describe('ProductsService', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'product1',
      description: 'product1 description',
      unitPrice: 10,
      isFeatured: false,
    },
    {
      id: '2',
      name: 'product2',
      description: 'product2 description',
      unitPrice: 20,
      isFeatured: true,
    },
  ];
  test('getFeaturedProducts when isCustomerPreferred is true', () => {
    const productsService = new ProductsService(
      new ProductsRepositoryMock(mockProducts),
    );

    expect(productsService.getFeaturedProducts(true)).toEqual([
      {
        id: '2',
        name: 'product2',
        description: 'product2 description',
        unitPrice: 19,
        isFeatured: true,
      },
    ]);
  });

  test('getFeaturedProducts when isCustomerPreferred is true', () => {
    const productsService = new ProductsService(
      new ProductsRepositoryMock(mockProducts),
    );

    expect(productsService.getFeaturedProducts(false)).toEqual([
      {
        id: '2',
        name: 'product2',
        description: 'product2 description',
        unitPrice: 20,
        isFeatured: true,
      },
    ]);
  });
});

class Product {
  public id: string;
  public name: string;
  public description: string;
  public unitPrice: number;
  public isFeatured: boolean;

  constructor(
    id: string,
    name: string,
    description: string,
    unitPrice: number,
    isFeatured: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.isFeatured = isFeatured;
  }
}

export default Product;

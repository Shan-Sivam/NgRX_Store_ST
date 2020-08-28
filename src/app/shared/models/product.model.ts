export class Product {
  id: number;
  name: string;
  detail: string;
  price: number;
  imagePath: string;
  added?: boolean;
}

export class ProductSort {
  key: string;
  order: number;
}

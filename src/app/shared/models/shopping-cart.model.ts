import { Product } from './product.model';
export class ShoppingCartItem {
    product: Product;
    quantity: number;
}
export class ShoppingCart {
    items: ShoppingCartItem[];
}

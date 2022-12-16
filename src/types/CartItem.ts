import { ProductInterface } from './Product';

export interface CartItemInterface {
  quantity: number;
  product: ProductInterface;
}

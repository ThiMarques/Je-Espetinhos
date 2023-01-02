import { ProductInterface } from './Product';

export interface CartItemInterface {
  product: ProductInterface;
  quantity: number;
}

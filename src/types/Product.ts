import { CategoryInterface } from './Category';

export interface ProductInterface {
  id: string;
  name: string;
  category: CategoryInterface;
  description: string;
  price: number;
  ingredients: [
    {
      id: string;
      sauce: string;
    }
  ];
  soda: string;
  sauce: string;
}

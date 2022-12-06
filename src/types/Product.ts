export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: {
    name: string;
    id: string;
  }[];
}

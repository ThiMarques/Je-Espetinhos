export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: {
    id: string;
    name: string;
  }[];
}

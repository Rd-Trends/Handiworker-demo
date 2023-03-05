export interface product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface cartItem {
  productId: product;
  quantity: number;
  _id: string;
}

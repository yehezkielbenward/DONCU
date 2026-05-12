export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Sweet' | 'Savory' | 'Special';
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  details: string;
}

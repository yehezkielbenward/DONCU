import { Product, PaymentMethod } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Strawberry Dream',
    description: 'Soft donut topped with fresh strawberry glaze and rainbow sprinkles.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=400',
    category: 'Sweet'
  },
  {
    id: '2',
    name: 'Choco Bomb',
    description: 'Double chocolate coating with crunchy almond flakes.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1527324688101-08d3ef711689?auto=format&fit=crop&q=80&w=400',
    category: 'Sweet'
  },
  {
    id: '3',
    name: 'Matcha Bliss',
    description: 'Premium Uji Matcha glaze with white chocolate drizzle.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?auto=format&fit=crop&q=80&w=400',
    category: 'Special'
  },
  {
    id: '4',
    name: 'Cheese Lava',
    description: 'Savory donut filled with melted craft cheese and cheddar topping.',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&q=80&w=400',
    category: 'Savory'
  },
  {
    id: '5',
    name: 'Lotus Biscoff',
    description: 'Creamy Biscoff spread topped with crushed Lotus biscuits.',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1626082896492-7634280da44e?auto=format&fit=crop&q=80&w=400',
    category: 'Special'
  },
  {
    id: '6',
    name: 'Classic Glazed',
    description: 'Simple, sweet, and melts in your mouth.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=400',
    category: 'Sweet'
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'qris',
    name: 'QRIS',
    icon: 'QrCode',
    details: 'Scan and pay with any e-wallet (OVO, GoPay, Dana, ShopeePay)'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: 'CreditCard',
    details: 'Bank BCA: 1234567890 (A.N. Doncu Pangkalpinang)'
  },
  {
    id: 'cod',
    name: 'COD (Cash On Delivery)',
    icon: 'Banknote',
    details: 'Available for Pangkalpinang city area only.'
  }
];

export const LOCATION_DETAILS = {
  address: 'Jl. Ahmad Yani No. 12, Pangkalpinang, Bangka Belitung',
  phone: '+62 821-xxxx-xxxx',
  instagram: '@doncu.pkp',
  hours: 'Mon - Sun: 09:00 - 21:00'
};

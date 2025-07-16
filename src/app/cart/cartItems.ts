export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Dragon Slayer Skin',
    image: '/products/dragon-slayer.jpg',
    price: 9.99,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Ultra Mod Pack',
    image: '/products/ultra-mod-pack.jpg',
    price: 14.99,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Gift Card $25',
    image: '/products/giftcard-25.jpg',
    price: 25.0,
    quantity: 1,
  },
]; 
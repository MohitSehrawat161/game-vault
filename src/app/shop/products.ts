export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'Skins' | 'Codes' | 'Mods' | 'Gift Cards';
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Dragon Slayer Skin',
    price: '$9.99',
    image: '/images/products/dragon-slayer.jpg',
    category: 'Skins',
    description: 'Unleash your inner dragon with this legendary skin!'
  },
  {
    id: 2,
    name: 'Stealth Ninja Skin',
    price: '$7.99',
    image: '/images/products/stealth-ninja-skin.png',
    category: 'Skins',
    description: 'Move in the shadows with the Stealth Ninja look.'
  },
  {
    id: 3,
    name: 'Pro Gamer Code',
    price: '$4.99',
    image: '/images/products/pro-gamer-code.jpg',
    category: 'Codes',
    description: 'Unlock exclusive in-game content with this code.'
  },
  {
    id: 4,
    name: 'Ultra Mod Pack',
    price: '$14.99',
    image: '/images/products/ultra-mod-pack.jpg',
    category: 'Mods',
    description: 'Upgrade your gameplay with the ultimate mod pack.'
  },
  {
    id: 5,
    name: 'Gift Card $25',
    price: '$25.00',
    image: '/images/products/steam-gift-card-25.avif',
    category: 'Gift Cards',
    description: 'Perfect gift for any gamer!'
  },
  {
    id: 6,
    name: 'Gift Card $50',
    price: '$50.00',
    image: '/images/products/giftcard-50.jpg',
    category: 'Gift Cards',
    description: 'Double the fun with a $50 gift card.'
  },
  {
    id: 7,
    name: 'Zombie Survival Mod',
    price: '$12.99',
    image: '/images/products/zombie-survival.jpg',
    category: 'Mods',
    description: 'Survive the apocalypse with this intense mod.'
  },
  {
    id: 8,
    name: 'Legendary Loot Code',
    price: '$6.99',
    image: '/images/products/legendary-loot-code.jpeg',
    category: 'Codes',
    description: 'Redeem for legendary in-game loot.'
  },
]; 
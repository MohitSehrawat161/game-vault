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
    description: 'Unleash your inner dragon with this legendary skin! Featuring fiery scales, glowing eyes, and animated effects, the Dragon Slayer Skin will make you stand out in every battle. Perfect for players who want to dominate the arena with style and power.'
  },
  {
    id: 2,
    name: 'Stealth Ninja Skin',
    price: '$7.99',
    image: '/images/products/stealth-ninja-skin.png',
    category: 'Skins',
    description: 'Move in the shadows with the Stealth Ninja look. This skin offers a sleek, dark design with subtle neon accents, perfect for silent takedowns and quick escapes. Equip this to blend in and outwit your opponents.'
  },
  {
    id: 3,
    name: 'Pro Gamer Code',
    price: '$4.99',
    image: '/images/products/pro-gamer-code.jpg',
    category: 'Codes',
    description: 'Unlock exclusive in-game content with this code. Gain access to pro-level gear, bonus XP, and unique badges that set you apart from the competition. Ideal for gamers looking to boost their profile instantly.'
  },
  {
    id: 4,
    name: 'Ultra Mod Pack',
    price: '$14.99',
    image: '/images/products/ultra-mod-pack.jpg',
    category: 'Mods',
    description: 'Upgrade your gameplay with the ultimate mod pack. Includes enhanced graphics, new missions, and custom soundtracks. The Ultra Mod Pack is a must-have for players seeking a fresh and immersive experience.'
  },
  {
    id: 5,
    name: 'Gift Card $25',
    price: '$25.00',
    image: '/images/products/steam-gift-card-25.avif',
    category: 'Gift Cards',
    description: 'Perfect gift for any gamer! Redeemable for games, DLC, and more. The $25 Gift Card is a versatile choice for birthdays, holidays.'
  },
  {
    id: 6,
    name: 'Gift Card $50',
    price: '$50.00',
    image: '/images/products/giftcard-50.jpg',
    category: 'Gift Cards',
    description: 'Double the fun with a $50 gift card. Give the gift of choice—let your friends or family pick their favorite games, add-ons, or in-game currency.'
  },
  {
    id: 7,
    name: 'Zombie Survival Mod',
    price: '$12.99',
    image: '/images/products/zombie-survival.jpg',
    category: 'Mods',
    description: 'Survive the apocalypse with this intense mod. Face endless waves of zombies, unlock new weapons, and team up with friends for the ultimate survival challenge. Not for the faint of heart!'
  },
  {
    id: 8,
    name: 'Legendary Loot Code',
    price: '$6.99',
    image: '/images/products/legendary-loot-code.jpeg',
    category: 'Codes',
    description: 'Redeem for legendary in-game loot. This code grants you rare items, exclusive skins, and a boost to your inventory. Don’t miss out on the chance to upgrade your arsenal.'
  },
]; 
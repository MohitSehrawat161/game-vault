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
  {
    id: 9,
    name: 'Cyber Samurai Skin',
    price: '$8.49',
    image: '/images/products/cyber-samurai-skin.png',
    category: 'Skins',
    description: 'Become a futuristic warrior with the Cyber Samurai Skin. Neon accents and animated armor make you stand out in every Roblox battle.'
  },
  {
    id: 10,
    name: 'Pixel Pirate Skin',
    price: '$7.99',
    image: '/images/products/pixel-pirate-skins.jpg',
    category: 'Skins',
    description: 'Sail the digital seas with this exclusive Pixel Pirate Skin. Includes a glowing cutlass and animated parrot companion.'
  },
  {
    id: 11,
    name: 'Galactic Explorer Skin',
    price: '$9.49',
    image: '/images/products/galactic-explorer-skin.webp',
    category: 'Skins',
    description: 'Travel the Roblox universe in style! This skin features a space suit with animated stars and a cosmic helmet.'
  },
  {
    id: 12,
    name: 'Shadow Agent Skin',
    price: '$8.99',
    image: '/images/products/shadow-agent-skin.webp',
    category: 'Skins',
    description: 'Blend into the night with the Shadow Agent Skin. Perfect for stealth missions and secret operations.'
  },
  {
    id: 13,
    name: 'Rainbow Unicorn Skin',
    price: '$6.99',
    image: '/images/products/rainbow-unicorn-skin.webp',
    category: 'Skins',
    description: 'Add some magic to your Roblox adventures! This skin features a rainbow mane, sparkling tail, and glowing horn.'
  },
  {
    id: 14,
    name: 'Frostbite Warrior Skin',
    price: '$7.49',
    image: '/images/products/frostbite-warrior-skin.png',
    category: 'Skins',
    description: 'Freeze your foes with the Frostbite Warrior Skin. Includes icy armor and a chilling blue aura.'
  },
  {
    id: 15,
    name: 'Volcanic Beast Skin',
    price: '$8.99',
    image: '/images/products/volcanic-beast-skin.png',
    category: 'Skins',
    description: 'Erupt onto the scene with this fiery Volcanic Beast Skin. Features animated lava cracks and glowing eyes.'
  },
  {
    id: 16,
    name: 'Golden Pharaoh Skin',
    price: '$9.99',
    image: '/images/products/golden-pharaoh-skin.png',
    category: 'Skins',
    description: 'Rule the Roblox world with the Golden Pharaoh Skin. Adorned with ancient jewelry and a shimmering gold headdress.'
  },
  {
    id: 25,
    name: 'Emo Boy Skin',
    price: '$7.99',
    image: '/images/products/emo-boy-skin.jfif',
    category: 'Skins',
    description: 'Show off your edgy side with the Emo Boy Skin. Features dark hair, black clothes, and a mysterious vibe perfect for Roblox roleplay.'
  },
  {
    id: 26,
    name: 'Kawaii Catgirl Skin',
    price: '$8.49',
    image: '/images/products/kawaii-catgirl-skin.jpg',
    category: 'Skins',
    description: 'Transform into a cute catgirl with this skin! Includes fluffy ears, a pastel outfit, and a playful attitude.'
  },
  {
    id: 27,
    name: 'Y2K Trendsetter Skin',
    price: '$8.29',
    image: '/images/products/Y2K-Trendsetter-skin.jpg',
    category: 'Skins',
    description: 'Rock the retro-futuristic Y2K look with this skin. Features trendy denim, sunglasses, and a cool-girl vibe.'
  },
  {
    id: 28,
    name: 'Princess Ballerina Skin',
    price: '$7.49',
    image: '/images/products/Princess-Ballerina-Skin.jpg',
    category: 'Skins',
    description: 'Dance your way through Roblox with the Princess Ballerina Skin. Includes a sparkling tiara and a beautiful pink tutu.'
  },
  {
    id: 29,
    name: 'Winter Angel Skin',
    price: '$8.59',
    image: '/images/products/Winter-Angel-Skin.jpg',
    category: 'Skins',
    description: 'Embrace the chill with the Winter Angel Skin. White dress, delicate wings, and a frosty aura make you stand out.'
  },
  {
    id: 30,
    name: 'Funny Small Head Skin',
    price: '$6.99',
    image: '/images/products/Funny-Small-Head-Skin.jpg',
    category: 'Skins',
    description: 'Bring the laughs with this Funny Small Head Skin. A quirky look that’s sure to get attention in any Roblox game.'
  },
  {
    id: 31,
    name: 'Soft Girl Pastel Skin',
    price: '$7.79',
    image: '/images/products/Soft-Girl-Pastel-Skin.jpg',
    category: 'Skins',
    description: 'Go soft and sweet with the Soft Girl Pastel Skin. Features gentle colors, bows, and a dreamy aesthetic.'
  },
  {
    id: 32,
    name: 'Zombie Emo Skin',
    price: '$8.19',
    image: '/images/products/Zombie-Emo-Skin.jpg',
    category: 'Skins',
    description: 'Combine spooky and stylish with the Zombie Emo Skin. Torn clothes, dark hair, and a hauntingly cool look.'
  },
]; 

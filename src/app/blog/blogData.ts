export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string[];
  content: string;
}

const blogData: BlogPost[] = [
  {
    title: 'Top 10 Modding Tips for Cyberpunk 2077',
    slug: 'modding-tips-cyberpunk-2077',
    excerpt: 'Unlock the full potential of Cyberpunk 2077 with these essential modding tips and tricks for beginners and veterans alike.',
    image: '/images/blogs/top-10-tips-cyberpunk.jpg',
    category: ['Tips', 'Modding'],
    content: `# Top 10 Modding Tips for Cyberpunk 2077

Modding can transform your Cyberpunk 2077 experience, adding new features, visuals, and gameplay tweaks. Here are our top tips to get you started:

## 1. Backup Your Game Files
Always backup your save files and game directory before installing any mods. This ensures you can restore your game if something goes wrong.

---

## 2. Use a Mod Manager
Tools like Vortex or Cyber Engine Tweaks make managing mods much easier and safer.

---

## 3. Check Mod Compatibility
Read mod descriptions and user comments to ensure compatibility with your game version and other installed mods.

---

## 4. Start Small
Install one or two mods at a time and test your game. This helps identify any issues early.

---

## 5. Keep Mods Updated
Mod authors frequently update their work. Check for updates regularly to avoid bugs and enjoy new features.

---

## 6. Read Installation Instructions
Some mods require special steps. Always follow the instructions provided by the mod creator.

---

## 7. Join the Community
Reddit, Nexus Mods forums, and Discord servers are great places to get help and discover new mods.

---

## 8. Prioritize Stability
Performance mods and bug fixes should be your first priority before adding visual or gameplay mods.

---

## 9. Experiment!
Try different mods to find your perfect setup. Don’t be afraid to mix and match.

---

## 10. Share Your Experience
Help others by sharing your favorite mods and tips in the community.

---

Happy modding, chooms!
`,
  },
  {
    title: 'New Skins Released for Valorant!',
    slug: 'valorant-new-skins',
    excerpt: 'Check out the latest neon-inspired skins now available in Valorant. Stand out in every match with these glowing designs.',
    image: '/images/blogs/valorant-new-skins.jpg',
    category: ['Skins', 'Updates'],
    content: `# New Skins Released for Valorant!

Valorant’s latest update brings a collection of neon-themed skins that are sure to make you stand out on the battlefield.

## Featured Skins
- **Neon Phantom**: A glowing blue and purple finish with animated effects.

- **Cyber Vandal**: Futuristic lines and a pulsing cyan glow.

- **Pulse Operator**: Lime green accents and a unique kill animation.

---

## How to Get Them
These skins are available in the in-game shop for a limited time. You can purchase them individually or as part of the Neon Bundle for a discounted price.

---

## Community Reactions
Players are loving the new designs, especially the animated effects and vibrant colors. Share your favorite skin on social media with #ValorantNeon.

---

Don’t miss out—these skins are only available until the end of the month!
`,
  },
  {
    title: 'GameVault Summer Sale Announced',
    slug: 'summer-sale-announcement',
    excerpt: 'Don’t miss out on our biggest sale of the year! Exclusive deals on top games and accessories, only at GameVault.',
    image: '/images/blogs/summer-sale.jpg',
    category: ['Updates', 'Shop'],
    content: `# GameVault Summer Sale Announced

The GameVault Summer Sale is here! Enjoy massive discounts on your favorite games, gear, and accessories.

## Sale Highlights
- Up to 70% off top titles like Cyberpunk 2077, Valorant Points, and more

- Exclusive neon-themed gaming mice and keyboards

- Buy 2, get 1 free on select merchandise

---

## How to Participate
Visit our [Shop](/shop) page to browse all deals. Add items to your cart and the discounts will be applied automatically at checkout.

---

## Limited-Time Offers
Some deals are only available for 48 hours, so check back daily for new flash sales!

---

## Join the Fun
Share your haul on social media with #GameVaultSale for a chance to win a $50 gift card.

---

Happy shopping, and may your summer be filled with games and glowing gear!
`,
  },
];

export default blogData; 
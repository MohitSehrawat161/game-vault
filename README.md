
#  GameVault - Mods, Skins & Codes Marketplace

**GameVault** is a dark-themed gaming e-commerce platform built with Next.js, designed for gamers to explore and buy game mods, skins, loot codes, and gift cards. With immersive visuals, product filtering, and a blog hub for gaming news, GameVault creates a next-level shopping experience for the gaming community.

---

##  Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Language**: TypeScript
- **SEO**: Built-in `next/metadata`
- **Deployment**: Vercel


---

##  Features

-  **Shop Page**: Browse products like mods, skins, codes, gift cards
-  **Filters**: Category-based filtering (Skins, Mods, Codes)
-  **Auth**: Login and Signup pages with form validation
-  **Cart System**: Add/remove products and checkout support
-  **CMS-Style Blog**: Posts like modding tips, news, skin updates
-  **Hero Section**: Animated graphics for featured products
-  **SEO Optimized**: Dynamic metadata for each route
-  **Policy Pages**: Privacy Policy & Terms of Service

---

##  Project Structure

```
/app
  /shop         → Product listings
  /cart         → Shopping cart
  /login        → User login
  /register       → User registration
  /blog         → Blog articles
  /privacy      → Privacy Policy
  /terms        → Terms of Service

/components      → UI building blocks (cards, layout, etc.)
/public          → Static assets (images, logos, product art)
```

---

##  Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

2. **Run the development server**

```bash
npm run dev
```

3. **Visit** [http://localhost:3000](http://localhost:3000)

---

##  SEO Setup (via Next Metadata)

This project uses `next/metadata` on every page for SEO optimization:

```tsx
export const metadata = {
  title: "Shop | GameVault",
  description: "Explore game mods, skins, loot codes, and more at GameVault.",
};
```

Use this metadata structure for all your pages.

---

## Deployment

Deployed on [Vercel](https://vercel.com).  
Push your repo to GitHub, connect to Vercel, and you're live.

---

##  Assets & Design

- Product and blog visuals tailored for gamer aesthetics
- Hero section images represent **mods, codes, skins**, etc.

---

##  License

© 2025 GameVault Team


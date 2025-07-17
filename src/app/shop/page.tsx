import ShopPage from '../../components/ShopPage';
import { Suspense } from 'react';

export const metadata = {
  title: "Shop Games, Skins & Mods | RobloxAvatarGear Store",
  description: "Browse and buy gaming skins, codes, mods, and gift cards at RobloxAvatarGear. Secure checkout, fast delivery, and exclusive offers for gamers.",
  keywords: [
    "gaming shop",
    "buy skins",
    "game codes",
    "modding store",
    "gift cards",
    "RobloxAvatarGear",
    "cyberpunk e-commerce",
    "digital games",
    "gamer marketplace",
    "exclusive deals"
  ],
 
};
  
export default function Page() {
  return (
    <Suspense >
      <ShopPage />
    </Suspense>
  );
}

// src/components/CookiesPolicy.tsx
'use client';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const POLICY_TEXT = `
At GameVault, we use cookies and similar technologies to enhance your browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Cookies are small text files stored on your device that help us remember your preferences, login status, and shopping cart contents. By using our website, you consent to our use of cookies in accordance with this policy.

**Types of Cookies We Use:**
- **Essential Cookies:** These are necessary for the website to function and cannot be switched off. They include session cookies for login, cart management, and security.
- **Performance Cookies:** These cookies collect information about how visitors use our site, such as which pages are most popular. This helps us improve site performance and user experience.
- **Functional Cookies:** These remember your preferences, such as language, region, and display settings, to provide a more personalized experience.
- **Advertising Cookies:** We and our partners use these to deliver relevant ads and measure their effectiveness. They may track your browsing habits across different sites.

**How We Use Cookies:**
- To keep you signed in and remember your cart
- To analyze site usage and improve our services
- To personalize your experience and recommend products
- To deliver targeted ads and promotions

**Managing Cookies:**
You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies, but this may affect your ability to use certain features on our site. For more information, visit your browser’s help section.

**Third-Party Cookies:**
We may use third-party services (like Google Analytics, Facebook Pixel, and payment providers) that set their own cookies. These are governed by their respective privacy policies.

**Your Consent:**
By continuing to use GameVault, you agree to our use of cookies as described above. You can withdraw your consent at any time by adjusting your browser settings or contacting us at privacy@gamevault.com.

**Policy Updates:**
We may update this Cookies Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly to stay informed about how we use cookies.

If you have any questions about our Cookies Policy, please contact us at privacy@gamevault.com. Thank you for trusting GameVault with your gaming experience!`;

export default function CookiesPolicy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('gamevault_cookies_accepted');
      if (!consent) setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gamevault_cookies_accepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center pointer-events-none">
      <div className="w-full max-w-md mx-auto mb-4 md:mb-0 md:mt-0 bg-[#181840] border border-neon-blue rounded-2xl shadow-neon p-6 flex flex-col gap-4 pointer-events-auto animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="text-neon-blue" size={22} />
          <h2 className="text-lg font-bold text-neon-blue">Cookies Policy</h2>
        </div>
        <div className="text-white/90 text-sm max-h-48 overflow-y-auto whitespace-pre-line mb-2 pr-2 scrollbar-thin scrollbar-thumb-[#23234a] scrollbar-track-[#181840]">
          {POLICY_TEXT}
        </div>
        <button
          className="mt-2 px-6 py-2 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-base self-end"
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
      <style jsx global>{`
        .text-neon-blue { color: #00eaff; }
        .bg-neon-blue { background: #00eaff; }
        .text-neon-green { color: #00ffb7; }
        .bg-neon-green { background: #00ffb7; }
        .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
        .animate-fade-in { animation: fadeIn 0.7s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
} 
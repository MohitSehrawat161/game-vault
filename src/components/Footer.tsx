'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Mail, Disc } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Simple Separator component
const Separator = () => (
  <div className="w-full h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 opacity-60 my-6" role="separator" aria-orientation="horizontal" />
);

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Shop', href: '/shop' },
      { label: 'Mods', href: '/shop?category=Mods' },
      { label: 'Codes', href: '/shop?category=Codes' },
      { label: 'Gift Cards', href: '/shop?category=Gift Cards' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/login' || pathname === '/register') return null;
  return (
    <footer className="bg-[#0f0f0f] text-white font-rajdhani pt-12 pb-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="flex items-center gap-2 mb-2">
            <Image src="/images/logo.png" alt="GameVault Logo" width={48} height={48} className="drop-shadow-neon" />
            <span className="text-2xl font-bold text-neon-blue tracking-widest font-rajdhani">GameVault</span>
          </Link>
          <p className="text-sm text-white/80 max-w-xs font-rajdhani">
            GameVault – Your ultimate destination for skins, mods, and codes.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-cyan-400 mb-3 font-rajdhani">Navigation</h3>
          <ul className="space-y-2">
            {footerLinks[0].links.map(link => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline hover:text-cyan-400 transition font-rajdhani focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-magenta-400 mb-3 font-rajdhani">Legal</h3>
          <ul className="space-y-2">
            {footerLinks[1].links.map(link => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline hover:text-magenta-400 transition font-rajdhani focus:outline-none focus:ring-2 focus:ring-magenta-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-green-400 mb-3 font-rajdhani">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} aria-label="Email" className="text-cyan-400" />
              <a href="mailto:privacy@gamevault.com" className="hover:underline hover:text-cyan-400 font-rajdhani">privacy@gamevault.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span role="img" aria-label="Phone" className="text-green-400">📞</span>
              <a href="tel:+1234567890" className="hover:underline hover:text-green-400 font-rajdhani">+1 (234) 567-890</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Separator */}
      <Separator />
      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto mb-4 text-center">
        <span className="block text-xs md:text-sm text-magenta-400 font-rajdhani bg-white/5 rounded-md px-3 py-2 shadow-neon mx-auto w-fit">
          We are not an affiliate agency. All products are sold independently through our platform.
        </span>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-2 text-xs text-white/60 font-rajdhani">
        <div className="flex items-center gap-2">
          <span>© 2025 GameVault. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="https://discord.gg/" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="hover:text-magenta-400 focus:outline-none focus:ring-2 focus:ring-magenta-400"><Disc size={18} /></a>
          <a href="https://twitter.com/GameVaultGG" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"><Twitter size={18} /></a>
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"><Instagram size={18} /></a>
        </div>
      </div>
      {/* Neon font and accent colors */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', Arial, sans-serif; }
        .text-neon-blue { color: #00eaff; }
        .text-magenta-400 { color: #a259ff; }
        .text-cyan-400 { color: #00eaff; }
        .text-green-400 { color: #00ffb7; }
        .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
      `}</style>
    </footer>
  );
} 
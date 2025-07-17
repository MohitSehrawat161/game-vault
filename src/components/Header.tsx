'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

// Orbitron font import for Next.js (add to _app or layout for global use)
// import { Orbitron } from 'next/font/google';
// const orbitron = Orbitron({ subsets: ['latin'], weight: ['700'] });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full fixed top-0 z-50 bg-[#0a0a23] shadow-lg border-b border-[#1a1a40] font-orbitron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-24 w-24 drop-shadow-neon" />
          <span className="text-xl max-md:hidden font-bold text-neon-blue tracking-widest">GameVault</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/privacy" className="nav-link">Privacy Policy</Link>
          <Link href="/terms" className="nav-link">Terms of Service</Link>
        </nav>
        {/* Actions */} 
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <Link href="/register" className="hidden md:inline-block px-5 py-2 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-purple hover:shadow-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-blue">
            Register Now
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="relative group">
            <svg className="w-7 h-7 text-neon-blue group-hover:text-neon-purple drop-shadow-neon transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-neon-purple text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-neon animate-pulse">
              {cartItemCount}
            </span>
          </Link>
          {/* User Icon */}
          <Link href="/login" className="group">
            <svg className="w-7 h-7 text-neon-blue group-hover:text-neon-purple drop-shadow-neon transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20c0-2.2 3.6-4 6-4s6 1.8 6 4" />
            </svg>
          </Link>
          {/* Hamburger */}
          <button className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue" onClick={() => setMobileMenuOpen(true)}>
            <svg className="w-7 h-7 text-neon-blue drop-shadow-neon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex flex-col items-end md:hidden">
          <button className="m-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue" onClick={() => setMobileMenuOpen(false)}>
            <svg className="w-8 h-8 text-neon-blue drop-shadow-neon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="w-full flex flex-col items-center gap-8 mt-16">
            <Link href="/" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/privacy" className="nav-link">Privacy Policy</Link>

            <Link href="/blog" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/register" className="w-3/4 text-center px-5 py-3 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-purple hover:shadow-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-blue mt-4" onClick={() => setMobileMenuOpen(false)}>
              Register Now
            </Link>
          </nav>
        </div>
      )}
      {/* Custom styles for neon and font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .text-neon-blue { color: #00eaff; }
        .bg-neon-blue { background: #00eaff; }
        .bg-neon-purple { background: #a259ff; }
        .text-neon-purple { color: #a259ff; }
        .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
        .shadow-neon-purple { box-shadow: 0 0 8px #a259ff, 0 0 16px #a259ff44; }
        .drop-shadow-neon { filter: drop-shadow(0 0 6px #00eaff); }
        .nav-link {
          position: relative;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .nav-link:after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00eaff, #a259ff);
          transition: width 0.3s;
          border-radius: 2px;
        }
        .nav-link:hover, .nav-link:focus {
          color: #00eaff;
        }
        .nav-link:hover:after, .nav-link:focus:after {
          width: 100%;
        }
        .nav-link-mobile {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.08em;
          padding: 0.5rem 0;
          transition: color 0.2s;
        }
        .nav-link-mobile:hover, .nav-link-mobile:focus {
          color: #00eaff;
        }
      `}</style>
    </header>
  );
} 
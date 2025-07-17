'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1200);
  }

  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a23] via-[#1a1a40] to-[#2d0a3a] relative">
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          {/* <Image src="/bg-auth.jpg" alt="" fill className="object-cover opacity-20" /> */}
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 p-4">
          {/* Left: Logo/Avatar (desktop only) */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full">
            <Image src="/images/logo.png" alt="Gamer Avatar" width={180} height={180} className="mb-6 drop-shadow-neon" />
            <h2 className="text-2xl font-orbitron text-neon-blue font-bold text-center">Welcome to GameVault</h2>
          </div>
          {/* Top: Logo/Avatar (mobile only) */}
          <div className="flex md:hidden flex-col items-center justify-center w-full mb-6">
            <Image src="/images/logo.png" alt="Gamer Avatar" width={100} height={100} className="mb-2 drop-shadow-neon" />
          </div>
          {/* Right: Login Card */}
          <div className="w-full md:w-1/2 max-w-md mx-auto bg-[#181840cc] rounded-2xl shadow-neon p-8 flex flex-col items-center backdrop-blur-md border border-[#2d0a3a]">
            <h1 className="text-3xl md:text-4xl font-extrabold text-neon-blue mb-2">Welcome Back, Gamer!</h1>
            <p className="text-white/80 mb-8 text-center">Sign in to continue your adventure.</p>
            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-blue">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#181840bb] border-2 border-[#2d0a3a] focus:border-neon-blue text-white font-bold placeholder-gray-400 focus:outline-none transition shadow-neon"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-purple">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#181840bb] border-2 border-[#2d0a3a] focus:border-neon-purple text-white font-bold placeholder-gray-400 focus:outline-none transition shadow-neon"
                />
              </div>
              {error && <div className="text-red-500 text-sm text-center font-bold animate-pulse">{error}</div>}
              <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-neon-blue text-white font-bold transition hover:bg-neon-purple hover:shadow-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            <div className="w-full flex flex-col items-center mt-6">
              <span className="text-white/70 text-sm">New here? <Link href="/register" className="text-neon-green font-bold hover:underline cursor-pointer">Register now</Link></span>
            </div>
          </div>
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
          .font-orbitron { font-family: 'Rajdhani', sans-serif; }
          .text-neon-blue { color: #00eaff; }
          .bg-neon-blue { background: #00eaff; }
          .text-neon-green { color: #00ffb7; }
          .bg-neon-green { background: #00ffb7; }
          .text-neon-purple { color: #a259ff; }
          .bg-neon-purple { background: #a259ff; }
          .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
          .shadow-neon-green { box-shadow: 0 0 8px #00ffb7, 0 0 16px #00ffb744; }
          .shadow-neon-purple { box-shadow: 0 0 8px #a259ff, 0 0 16px #a259ff44; }
          .drop-shadow-neon { filter: drop-shadow(0 0 6px #00eaff); }
        `}</style>
      </div>
    </>
  );
} 
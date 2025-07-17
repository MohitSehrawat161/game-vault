'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
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

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 p-4">
          {/* Left: Avatar/Graphic (desktop only) */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full">
            <Image src="/images/logo.png" alt="Gamer Avatar" width={180} height={180} className="mb-6" />
            <h2 className="text-2xl font-orbitron text-neon-purple font-bold text-center">Welcome to RobloxAvatarGear</h2>
          </div>
          {/* Right: Signup Card */}
          <div className="w-full md:w-1/2 max-w-md mx-auto bg-[#181840cc] rounded-2xl shadow-neon p-8 flex flex-col items-center backdrop-blur-md border border-[#2d0a3a]">
            <h1 className="text-3xl md:text-4xl font-extrabold text-neon-purple mb-2 font-orbitron">Join the Elite!</h1>
            <p className="text-white/80 mb-8 text-center">Create your account and unlock exclusive gaming content.</p>
            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-green">
                  <User size={20} />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#181840bb] border-2 border-[#2d0a3a] focus:border-neon-green text-white font-bold placeholder-gray-400 focus:outline-none transition shadow-neon"
                />
              </div>
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
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-green">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-[#181840bb] border-2 border-[#2d0a3a] focus:border-neon-green text-white font-bold placeholder-gray-400 focus:outline-none transition shadow-neon"
                />
              </div>
              {error && <div className="text-red-500 text-sm text-center font-bold animate-pulse">{error}</div>}
              <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-neon-purple text-white font-bold shadow-neon-purple transition hover:bg-neon-blue hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-purple text-lg mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Registering...' : 'Register'}
              </button>
            </form>
            <div className="w-full flex flex-col items-center mt-6">
              <span className="text-white/70 text-sm">Already have an account? <Link href="/login" className="text-neon-blue font-bold hover:underline cursor-pointer">Login here</Link></span>
              <span className="text-xs text-white/40 mt-2 text-center">By signing up, you agree to our <Link href="/terms" className="underline text-neon-green">Terms</Link> and <Link href="/privacy" className="underline text-neon-green">Privacy Policy</Link>.</span>
            </div>
          </div>
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
          .font-orbitron { font-family: 'Orbitron', sans-serif; }
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
// src/app/checkout/confirmation/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

export default function CheckoutConfirmation() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a23] font-rajdhani px-2">
      <div className="bg-[#181840] rounded-2xl shadow-neon p-8 max-w-md w-full flex flex-col items-center border border-[#23234a] animate-fade-in">
        <CheckCircle2 className="text-neon-green mb-4" size={48} />
        <h1 className="text-xl font-bold text-neon-green mb-2 text-center">A confirmation code has been sent to your email.</h1>
        <p className="text-white/60 mb-6 text-center">Thank you for your order! Please check your inbox for the next steps.</p>
        <button
          className="px-8 py-3 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
          onClick={() => router.push('/')}
        >
          Continue Shopping
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
    </main>
  );
} 
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';


export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * 0.08).toFixed(2); // 8% mocked tax
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#181840] to-black text-white font-orbitron py-8 px-2 md:px-0">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-neon-blue text-center mb-10">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="bg-[#181840cc] rounded-2xl p-8 text-center shadow-neon">
            <p className="text-lg text-white/80 mb-6">Your cart is empty.</p>
            <Link href="/shop" className="px-8 py-3 rounded-lg bg-neon-green text-white font-bold shadow-neon-green transition hover:bg-neon-blue hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-green text-lg cursor-pointer">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center bg-[#181840cc] rounded-xl shadow-neon p-4 gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <div className="flex-1">
                        <div className="text-lg font-bold text-neon-green mb-1">{item.name}</div>
                        <div className="text-white/80 text-sm">${item.price.toFixed(2)}</div>
                      </div>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded bg-[#22224a] text-neon-blue font-bold text-xl flex items-center justify-center shadow-neon transition hover:bg-neon-blue hover:text-white cursor-pointer">-</button>
                        <span className="px-3 text-lg font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded bg-[#22224a] text-neon-blue font-bold text-xl flex items-center justify-center shadow-neon transition hover:bg-neon-blue hover:text-white cursor-pointer">+</button>
                      </div>
                      {/* Remove Button */}
                      <button onClick={() => removeFromCart(item.id)} className="ml-0 sm:ml-4 mt-2 sm:mt-0 px-4 py-2 rounded-lg bg-neon-purple text-white font-bold shadow-neon-purple transition hover:bg-red-600 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-purple text-sm cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/shop" className="flex-1 px-8 py-3 rounded-lg bg-[#22224a] text-neon-green font-bold shadow-neon-green transition hover:bg-neon-blue hover:text-white hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-green text-lg text-center cursor-pointer">
                  Continue Shopping
                </Link>
              </div>
            </div>
            {/* Cart Summary */}
            <div className="w-full md:w-80 bg-[#181840cc] rounded-2xl shadow-neon p-6 h-fit mt-8 md:mt-0">
              <h2 className="text-xl font-bold text-neon-purple mb-6 text-center">Summary</h2>
              <div className="flex justify-between mb-2 text-white/80">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-white/80">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-lg font-bold">
                <span className="text-neon-green">Total</span>
                <span className="text-neon-green">${total.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
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
  );
} 
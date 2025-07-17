// src/app/checkout/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { CreditCard, User, Mail, Phone, MapPin, Home, Landmark } from 'lucide-react';

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();
  const [billing, setBilling] = useState({ name: '', email: '', phone: '' });
  const [shipping, setShipping] = useState({ address1: '', address2: '', city: '', state: '', postal: '', country: '' });
  const [payment, setPayment] = useState({ card: '', expiry: '', cvv: '' });
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handleInput = (section: string, field: string, value: string) => {
    if (section === 'billing') setBilling((b) => ({ ...b, [field]: value }));
    if (section === 'shipping') setShipping((s) => ({ ...s, [field]: value }));
    if (section === 'payment') setPayment((p) => ({ ...p, [field]: value }));
  };

  const validate = () => {
    return (
      billing.name && billing.email && billing.phone &&
      shipping.address1 && shipping.city && shipping.state && shipping.postal && shipping.country &&
      payment.card.length === 19 && payment.expiry && payment.cvv.length >= 3
    );
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, address1: true, city: true, state: true, postal: true, country: true, card: true, expiry: true, cvv: true });
    if (!validate()) return;
    router.push('/checkout/confirmation');
  };

  return (
    <main className="min-h-screen bg-[#0a0a23] py-10 px-2 text-white font-rajdhani">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Forms */}
        <form className="flex flex-col gap-6" onSubmit={handlePlaceOrder} autoComplete="off">
          {/* Billing Info */}
          <section className="bg-[#181840] rounded-2xl shadow-neon p-6 border border-[#23234a] mb-2 animate-fade-in">
            <h2 className="text-lg font-bold text-neon-blue mb-4 flex items-center gap-2"><User size={18} className="text-neon-blue"/>Billing Information</h2>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input type="text" placeholder="Full Name" value={billing.name} onChange={e => handleInput('billing', 'name', e.target.value)} onBlur={() => setTouched(t => ({ ...t, name: true }))} className={`w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 ${touched.name && !billing.name ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-blue transition-all`} />
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-blue" />
              </div>
              <div className="relative">
                <input type="email" placeholder="Email" value={billing.email} onChange={e => handleInput('billing', 'email', e.target.value)} onBlur={() => setTouched(t => ({ ...t, email: true }))} className={`w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 ${touched.email && !billing.email ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-blue transition-all`} />
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-blue" />
              </div>
              <div className="relative">
                <input type="tel" placeholder="Phone" value={billing.phone} onChange={e => handleInput('billing', 'phone', e.target.value)} onBlur={() => setTouched(t => ({ ...t, phone: true }))} className={`w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 ${touched.phone && !billing.phone ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-blue transition-all`} />
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-blue" />
              </div>
            </div>
          </section>
          {/* Shipping Address */}
          <section className="bg-[#181840] rounded-2xl shadow-neon p-6 border border-[#23234a] mb-2 animate-fade-in">
            <h2 className="text-lg font-bold text-neon-purple mb-4 flex items-center gap-2"><MapPin size={18} className="text-neon-purple"/>Shipping Address</h2>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input type="text" placeholder="Address Line 1" value={shipping.address1} onChange={e => handleInput('shipping', 'address1', e.target.value)} onBlur={() => setTouched(t => ({ ...t, address1: true }))} className={`w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 ${touched.address1 && !shipping.address1 ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-purple transition-all`} />
                <Home size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-purple" />
              </div>
              <div className="relative">
                <input type="text" placeholder="Address Line 2 (optional)" value={shipping.address2} onChange={e => handleInput('shipping', 'address2', e.target.value)} className="w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 border-[#23234a] focus:ring-2 focus:ring-neon-purple transition-all" />
                <Landmark size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-purple" />
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="City" value={shipping.city} onChange={e => handleInput('shipping', 'city', e.target.value)} onBlur={() => setTouched(t => ({ ...t, city: true }))} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.city && !shipping.city ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-purple transition-all`} />
                <input type="text" placeholder="State" value={shipping.state} onChange={e => handleInput('shipping', 'state', e.target.value)} onBlur={() => setTouched(t => ({ ...t, state: true }))} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.state && !shipping.state ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-purple transition-all`} />
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Postal Code" value={shipping.postal} onChange={e => handleInput('shipping', 'postal', e.target.value)} onBlur={() => setTouched(t => ({ ...t, postal: true }))} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.postal && !shipping.postal ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-purple transition-all`} />
                <input type="text" placeholder="Country" value={shipping.country} onChange={e => handleInput('shipping', 'country', e.target.value)} onBlur={() => setTouched(t => ({ ...t, country: true }))} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.country && !shipping.country ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-purple transition-all`} />
              </div>
            </div>
          </section>
          {/* Payment Method */}
          <section className="bg-[#181840] rounded-2xl shadow-neon p-6 border border-[#23234a] mb-2 animate-fade-in">
            <h2 className="text-lg font-bold text-neon-green mb-4 flex items-center gap-2"><CreditCard size={18} className="text-neon-green"/>Payment Method</h2>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input type="text" placeholder="Card Number (XXXX XXXX XXXX XXXX)" value={payment.card} onChange={e => handleInput('payment', 'card', e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19))} onBlur={() => setTouched(t => ({ ...t, card: true }))} maxLength={19} className={`w-full pl-10 py-2 rounded-lg bg-[#23234a] border-2 ${touched.card && payment.card.length !== 19 ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-green transition-all`} inputMode="numeric" />
                <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-green" />
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Expiry (MM/YY)" value={payment.expiry} onChange={e => handleInput('payment', 'expiry', e.target.value)} onBlur={() => setTouched(t => ({ ...t, expiry: true }))} maxLength={5} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.expiry && !payment.expiry ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-green transition-all`} />
                <input type="text" placeholder="CVV" value={payment.cvv} onChange={e => handleInput('payment', 'cvv', e.target.value)} onBlur={() => setTouched(t => ({ ...t, cvv: true }))} maxLength={4} className={`w-1/2 px-4 py-2 rounded-lg bg-[#23234a] border-2 ${touched.cvv && payment.cvv.length < 3 ? 'border-red-500' : 'border-[#23234a]'} focus:ring-2 focus:ring-neon-green transition-all`} inputMode="numeric" />
              </div>
            </div>
          </section>
          <button type="submit" className="w-full py-3 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg mt-2 animate-fade-in">Place Order</button>
        </form>
        {/* Right: Order Summary */}
        <section className="bg-[#181840] rounded-2xl shadow-neon p-6 border border-[#23234a] flex flex-col gap-4 animate-fade-in">
          <h2 className="text-lg font-bold text-neon-purple mb-4">Order Summary</h2>
          <div className="divide-y divide-[#23234a]">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-bold text-neon-green">{item.name}</div>
                  <div className="text-white/70 text-xs">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-white/80">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-white/80">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-2">
            <span className="text-neon-green">Total</span>
            <span className="text-neon-green">${total.toFixed(2)}</span>
          </div>
        </section>
      </div>
      <style jsx global>{`
        .text-neon-blue { color: #00eaff; }
        .bg-neon-blue { background: #00eaff; }
        .text-neon-green { color: #00ffb7; }
        .bg-neon-green { background: #00ffb7; }
        .text-neon-purple { color: #a259ff; }
        .bg-neon-purple { background: #a259ff; }
        .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
        .animate-fade-in { animation: fadeIn 0.7s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
      `}</style>
    </main>
  );
} 
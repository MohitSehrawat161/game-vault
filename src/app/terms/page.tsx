export const metadata = {
  title: "Terms of Service | GameVault Gaming Store",
  description: "Read the GameVault Terms of Service to understand the rules, user rights, and responsibilities for using our gaming e-commerce platform.",
  keywords: [
    "terms of service",
    "GameVault terms",
    "user agreement",
    "gaming rules",
    "e-commerce terms",
    "cyberpunk store",
    "user rights",
    "digital goods",
    "gaming platform",
    "legal policy"
  ],
 
};

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4 md:px-0 font-orbitron">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10 text-center">Terms of Service</h1>
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Introduction</h2>
          <p className="text-gray-300">Welcome to GameVault! By accessing or using our website, services, or purchasing products, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you do not agree with any part of these Terms, you may not use our platform. GameVault is a gaming-themed e-commerce store dedicated to providing the best digital and physical gaming products, community features, and support for gamers worldwide.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-lime-400 mb-2">Eligibility</h2>
          <p className="text-gray-300">To use GameVault, you must be at least 13 years old. If you are under 18, you must have permission from a parent or legal guardian. By creating an account or making a purchase, you represent that you meet these requirements. GameVault reserves the right to refuse service, terminate accounts, or cancel orders if eligibility requirements are not met.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Purchases */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-neon-blue mb-2">Purchases</h2>
          <p className="text-gray-300">When you buy digital or physical products from GameVault, you agree to provide accurate payment and shipping information. All sales of digital products (such as game keys, downloadable content, or in-game currency) are final and non-refundable, except where required by law. For physical products, please review our <Link href="/refunds" className="text-cyan-400 underline hover:text-lime-400">Refund Policy</Link> for details on returns and exchanges. GameVault is not responsible for lost or stolen digital goods once delivered to your account or email.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* User Accounts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">User Accounts</h2>
          <p className="text-gray-300">To access certain features, you may need to register for a GameVault account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or security breach. GameVault is not liable for any loss or damage resulting from your failure to safeguard your account information.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Prohibited Activities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-lime-400 mb-2">Prohibited Activities</h2>
          <p className="text-gray-300">You agree not to use GameVault for any unlawful or abusive purpose. Prohibited activities include, but are not limited to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Hacking, exploiting, or attempting to gain unauthorized access to GameVault systems or user accounts</li>
            <li>Reselling, redistributing, or commercializing GameVault products without permission</li>
            <li>Harassing, threatening, or abusing other users or staff</li>
            <li>Uploading viruses, malware, or malicious code</li>
            <li>Using bots, scripts, or automation to manipulate the platform</li>
            <li>Violating any applicable laws or regulations</li>
          </ul>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-magenta-400 mb-2">Intellectual Property</h2>
          <p className="text-gray-300">All content on GameVault—including logos, graphics, product images, text, and software—is owned by GameVault or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute any content without our express written permission. User-uploaded content (such as reviews or forum posts) remains your property, but by posting, you grant GameVault a non-exclusive, royalty-free license to use, display, and distribute your content on our platform.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Disclaimer of Warranties */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Disclaimer of Warranties</h2>
          <p className="text-gray-300">GameVault provides its services and products "as is" and "as available." We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our platform or products. To the fullest extent permitted by law, GameVault disclaims all warranties, including merchantability, fitness for a particular purpose, and non-infringement. Your use of GameVault is at your own risk.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-lime-400 mb-2">Termination</h2>
          <p className="text-gray-300">GameVault reserves the right to suspend or terminate your account at any time, with or without notice, for conduct that we believe violates these Terms, is harmful to other users, or is otherwise inappropriate. Upon termination, your right to use GameVault will immediately cease, and you may lose access to any content or data associated with your account. We are not liable for any loss resulting from account termination.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Modifications to Service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-neon-blue mb-2">Modifications to Service</h2>
          <p className="text-gray-300">GameVault may update, modify, or discontinue any part of the platform at any time, with or without notice. This includes changes to features, pricing, or availability of products. We are not responsible for any inconvenience or loss caused by service interruptions, maintenance, or downtime. We recommend checking these Terms regularly for updates.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Governing Law</h2>
          <p className="text-gray-300">These Terms are governed by and construed in accordance with the laws of your jurisdiction, without regard to conflict of law principles. Any disputes arising from or relating to your use of GameVault will be subject to the exclusive jurisdiction of the courts located in your region, unless otherwise required by law.</p>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Contact Info */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-lime-400 mb-2">Contact Info</h2>
          <p className="text-gray-300">If you have any questions, concerns, or need support regarding these Terms or your use of GameVault, please contact us:</p>
          <ul className="text-gray-300 mb-2">
            <li>Email: <a href="mailto:legal@gamevault.com" className="text-cyan-400 underline hover:text-lime-400">legal@gamevault.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-cyan-400 underline hover:text-lime-400">+1 (234) 567-890</a></li>
          </ul>
        </section>
        <div className="border-t border-gray-700 my-6" />
        {/* Internal Navigation Links */}
        <nav className="flex flex-wrap gap-6 justify-center mt-8">
          <Link href="/privacy" className="text-cyan-400 underline hover:text-lime-400 font-semibold">Privacy Policy</Link>
        </nav>
      </div>
    </main>
  );
} 
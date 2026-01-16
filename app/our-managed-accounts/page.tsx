import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Briefcase, PieChart, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ManagedAccounts() {
  const benefits = [
    "The depth of resources of a leading provider of SMAs",
    "A full spectrum of capabilities including equity, fixed-income, balanced, and customized portfolios",
    "The sustainable investing expertise of affiliate managers",
    "Investment affiliates known for tenured management teams and decades of experience"
  ];

  const smaOffers = [
    { title: "Customization", desc: "Tailored portfolios that match your unique goals" },
    { title: "Greater Tax Efficiency", desc: "Optimize your tax situation with direct ownership" },
    { title: "Transparency", desc: "Full visibility into every holding in your portfolio" },
    { title: "Professional Management", desc: "Expert oversight of your investments" },
    { title: "Personalized Approach", desc: "Strategies designed around your life" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Investment Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Managed Accounts</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Active Managed Accounts for Individuals and Retirement Planning
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
                  <Briefcase className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-gold uppercase tracking-wider">SMA Guide</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
                  Understanding Separately Managed Accounts
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Separately managed accounts (SMAs) play an important role in providing investors choice in how they access professional investment management. They also offer the flexibility to tailor a portfolio that is responsive to the needs of high net worth individuals.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With an SMA, investors benefit from direct ownership of securities, versus investing in a mutual fund or exchange-traded funds (ETFs), where your money is pooled with that of other investors. This difference is key to understanding the many advantages of an SMA.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-all hover:shadow-lg"
                >
                  Schedule a Free Consultation 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="space-y-4">
                {smaOffers.map((offer, i) => (
                  <div key={i} className="group flex items-start p-5 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-gold transition-colors">
                      <Check className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{offer.title}</h4>
                      <p className="text-gray-600 text-sm">{offer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">How We Manage Your Wealth</h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <PieChart className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Portfolio Construction</h3>
                <p className="text-gray-600">
                  We build diversified portfolios tailored to your risk tolerance, time horizon, and financial objectives.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <TrendingUp className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Active Management</h3>
                <p className="text-gray-600">
                  Our team actively monitors and adjusts your portfolio in response to market conditions and opportunities.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Shield className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Risk Management</h3>
                <p className="text-gray-600">
                  We implement strategies to protect your wealth while pursuing growth aligned with your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Why TGA Capital</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">What You Get With Us</h2>
              <p className="text-gray-600 text-lg">Investors benefit from our comprehensive approach</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all">
                  <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                TGA Capital Management and its Investment Advisor Representative can help you better understand the benefits of SMAs and the importance of working with an SMA leader.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

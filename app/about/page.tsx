import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">About TGA Capital</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A commitment to ethics, integrity, and your financial future since 1980.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-gold uppercase tracking-wider">Established 1980</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Planning Futures for Over Four Decades</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  TGA Capital Management has well over 30 years of combined financial planning experience. We began helping create programs and portfolios to meet long-term financial goals, and we continue that mission today.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are at the forefront of this quickly changing economy and we work closely with our clients because we are fully committed to meeting and exceeding expectations. We also believe in keeping our services affordable for our clients - we make sure to work around your budget.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We are proud that so many of our clients have repeatedly turned to us for guidance and assistance with their financial futures, and we work hard to earn their loyalty every day.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-navy font-bold hover:text-gold transition-colors group"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-gold">Our Commitment</h3>
                  <div className="space-y-4">
                    {[
                      'Personalized attention to every client',
                      'Transparent fee structures',
                      'Unbiased investment recommendations',
                      'Regular portfolio reviews',
                      'Accessible expertise when you need it',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '40+', label: 'Years of Experience' },
                { value: '$100M+', label: 'Assets Managed' },
                { value: '100%', label: 'Client Focused' },
                { value: 'SEC', label: 'Registered RIA' },
              ].map((stat, i) => (
                <div key={i} className="p-6">
                  <p className="text-4xl md:text-5xl font-bold text-navy mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Why Choose TGA Capital?</h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Target className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">A Proven Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start by clarifying our fee structure and explaining the different ways we can help. Then we analyze your goals and compare them to your current portfolio to recommend a strategy designed to meet your risk tolerance.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Shield className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Unbiased Guidance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team is comprised of people with different kinds of finance experience, but we all have this in common—a commitment to ethics and integrity. You can count on unbiased recommendations.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30">
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Users className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">NEA Member</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are part of a community of business owners and professionals who support enhanced transparency and ethical business practices in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Schedule a free consultation to discuss your financial goals and learn how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg"
              >
                Contact Us Today
              </Link>
              <a 
                href="https://calendly.com/mgreen-5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-all shadow-lg"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

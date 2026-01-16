import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { CheckCircle, TrendingUp, Users, FileText, Play, Mic, Shield, Target, BarChart3, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-navy rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
                Your Trusted Financial Partner
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                With decades of experience and a commitment to your success, we provide personalized strategies tailored to your unique financial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Users className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">Planning Futures Since 1980</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For over four decades, we&apos;ve helped create programs and portfolios to meet long-term financial goals. Our credentialed professionals guide you every step of the way.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Target className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">A Proven Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze your goals, compare them to your current portfolio, and recommend a strategy designed to meet your risk tolerance and retirement planning needs.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Shield className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">Ethics & Integrity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team is committed to the highest ethical standards. We are fully licensed and credentialed, offering unbiased recommendations and impartial guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
                  Comprehensive Wealth Management
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  TGA Capital Management offers a full suite of investment advisory services designed to help you achieve your financial objectives with confidence.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Personalized Investment Strategies',
                    'Retirement Planning & Analysis',
                    'Portfolio Risk Assessment',
                    'Active Account Management',
                    'Tax-Efficient Investment Solutions',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/our-managed-accounts" 
                  className="inline-flex items-center text-navy font-bold hover:text-gold transition-colors group"
                >
                  Learn More About Our Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Investment Philosophy</h3>
                      <p className="text-gray-400 text-sm">Active Management Approach</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We believe in active investment management that responds to market conditions while staying aligned with your long-term goals. Our proprietary research drives informed decision-making.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-gold">40+</p>
                      <p className="text-sm text-gray-400">Years of Excellence</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-gold">100%</p>
                      <p className="text-sm text-gray-400">Client Focused</p>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Resources Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Insights & Education</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Video Resources</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Gain valuable insights on retirement, market volatility, and financial planning through our curated video library.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Understanding Market Volatility',
                  description: 'Learn how to navigate uncertain markets with confidence.',
                  duration: '12:45',
                },
                {
                  title: 'Retirement Planning Essentials',
                  description: 'Key strategies for building a secure retirement.',
                  duration: '18:30',
                },
                {
                  title: 'Investment Risk Assessment',
                  description: 'Understanding your risk tolerance and portfolio allocation.',
                  duration: '15:20',
                },
              ].map((video, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources" 
                className="inline-flex items-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-navy font-bold rounded transition-colors"
              >
                View All Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-2 mb-6">
                  <Mic className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-gold uppercase tracking-wider">Now Streaming</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Why Active Investment Management is &quot;Key&quot;
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  TGA Capital Management shares proprietary investment research and strategies through our podcast. Get unbiased guidance and expert insights on building wealth.
                </p>
                <a 
                  href="https://creators.spotify.com/pod/show/michael-green28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-navy font-bold rounded hover:bg-gold hover:text-navy transition-all hover:shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Listen on Spotify
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-2 text-gold">Stay Informed</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Subscribe to receive the latest market insights, podcast episodes, and investment updates.
                </p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 px-6 rounded-lg transition-all hover:shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-gray-500 text-xs mt-4 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-3">Resources</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Important Documents</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access our essential planning resources and educational materials.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Reaching Retirement - Now What?', desc: 'A comprehensive guide to navigating your retirement transition.' },
                { title: 'Retirement Expense Forms', desc: 'Essential worksheets for planning your retirement budget.' },
                { title: 'Investor Behavior in Turbulent Markets', desc: 'Understanding psychology and making informed decisions.' },
              ].map((doc, i) => (
                <div key={i} className="group flex items-start p-6 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-gold transition-colors">
                    <FileText className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-1 group-hover:text-gold transition-colors">{doc.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">{doc.desc}</p>
                    <Link href="/resources" className="text-sm font-semibold text-gold hover:text-navy transition-colors inline-flex items-center">
                      Download PDF
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-[0.03]"></div>
          <div className="max-w-4xl mx-auto text-center px-4 relative">
            <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-wider">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              It&apos;s never too early to start planning. Tell us about your goals, and we&apos;ll help you create a personalized strategy to achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="https://calendly.com/mgreen-5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

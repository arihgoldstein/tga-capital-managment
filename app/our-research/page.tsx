import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, ArrowRight, BookOpen, TrendingUp, PieChart, Shield, BarChart } from 'lucide-react';

export default function OurResearch() {
  const articles = [
    { 
      title: 'Separate Account Management', 
      desc: 'Separately managed accounts (SMAs) play an important role in providing investors choice in how they access professional investment management.',
      icon: PieChart,
      category: 'Investment Strategy'
    },
    { 
      title: 'How to Analyze Your Investment Costs', 
      desc: 'Do you know your total investment costs? Working with a fiduciary makes all the difference in understanding and minimizing fees.',
      icon: BarChart,
      category: 'Cost Analysis'
    },
    { 
      title: 'Understanding Market Downturns', 
      desc: 'For prepared investors, market downturns can represent great opportunity. Your best defense: Make a plan and stick to it.',
      icon: TrendingUp,
      category: 'Market Insights'
    },
    { 
      title: 'Active vs. Passive Portfolio Management', 
      desc: 'Active investing attempts to add value, while passive investing focuses on costs. Learn how to blend the approaches effectively.',
      icon: Shield,
      category: 'Portfolio Management'
    },
    {
      title: 'Risk Tolerance Assessment',
      desc: 'Risk tolerance is an investment term that refers to your ability to endure market volatility. Understanding yours is crucial.',
      icon: BookOpen,
      category: 'Risk Management'
    },
    {
      title: 'Retirement Income Strategies',
      desc: 'Planning for sustainable retirement income requires balancing growth, preservation, and distribution strategies.',
      icon: FileText,
      category: 'Retirement Planning'
    }
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
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Insights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Research</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our proprietary research and insights on investment strategies, market trends, and financial planning.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-gold" />
                <span className="text-sm font-bold text-gold uppercase tracking-wider">Knowledge Base</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">A Wealth of Information</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Take your time to explore our research library. We&apos;ve covered a range of topics to help you make informed decisions about your financial future. Have questions about anything you read? We&apos;d love to discuss it with you.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-gold font-bold hover:text-navy transition-colors group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => {
                const Icon = article.icon;
                return (
                  <div key={i} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold/30">
                    <span className="inline-block text-xs font-bold text-gold uppercase tracking-wider mb-4">{article.category}</span>
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                      <Icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{article.desc}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-bold text-navy hover:text-gold transition-colors group/link"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Download PDF
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Want to Discuss These Topics?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Schedule a consultation to learn how these research insights can be applied to your personal financial situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all"
              >
                Contact Us
              </Link>
              <a 
                href="https://calendly.com/mgreen-5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-all"
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

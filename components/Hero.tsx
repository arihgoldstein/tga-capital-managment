import Link from 'next/link';
import { ArrowRight, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-navy text-white overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gray-200">Registered Investment Advisory Since 1980</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Your Partner in
            <span className="block text-gold">Financial Success</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            TGA Capital Management has well over 30 years of combined financial planning experience. We work closely with our clients because we are fully committed to meeting and exceeding expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-navy bg-gold hover:bg-gold-light rounded transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded transition-all backdrop-blur-sm"
            >
              Learn About Us
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">40+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">SEC</p>
                <p className="text-sm text-gray-400">Registered RIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

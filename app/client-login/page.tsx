import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Lock, ArrowRight, Shield, Phone, Mail, ExternalLink } from 'lucide-react';

export default function ClientLogin() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-lg w-full mx-4 relative">
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl text-center border border-gray-100">
            <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-gold" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Client Portal</h1>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Securely access your investment portfolio, account statements, and important documents.
            </p>
            
            <a 
              href="#" 
              className="flex items-center justify-center w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-6"
            >
              Access Client Portal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
              <Shield className="w-4 h-4 text-gold" />
              <span>256-bit SSL Encrypted</span>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-600 mb-4">First time logging in or need help?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:5082249646" 
                  className="inline-flex items-center justify-center text-sm text-navy hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (508) 224-9646
                </a>
                <a 
                  href="mailto:mgreen@tgacapitalmanagement.com" 
                  className="inline-flex items-center justify-center text-sm text-navy hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
          
          {/* External Site Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <ExternalLink className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">You are now leaving this site</h3>
                <p className="text-sm text-amber-700 leading-relaxed mb-3">
                  Please be advised that you will now be directed to the Charles Schwab & Co., Inc. login website to access your online account. If you require any assistance, please contact us.
                </p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Please note that you will no longer be subject to, or under the protection of, the privacy and security policies of TGA Capital Management website. We encourage you to read and evaluate the privacy and security policies of the site you are entering, which may be different than those of TGA Capital Management.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Not a client yet?{' '}
            <Link href="/contact" className="text-navy font-semibold hover:text-gold transition-colors">
              Contact us to get started
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

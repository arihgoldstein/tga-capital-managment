import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-white">TGA Capital</h3>
              <p className="text-xs text-gold tracking-widest uppercase">Management</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Providing proprietary investment research and personalized strategies for successful individuals seeking unbiased financial guidance.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/tgacapitalmanagement/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@Michael2175454" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/our-managed-accounts', label: 'Managed Accounts' },
                { href: '/our-research', label: 'Our Research' },
                { href: '/resources', label: 'Resources' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mr-3 shrink-0 group-hover:bg-gold transition-colors">
                  <MapPin className="w-4 h-4 text-gold group-hover:text-navy transition-colors" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  25 Braintree Hill Office Park<br />
                  Braintree, MA 02184
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mr-3 shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors" />
                </div>
                <a href="tel:5082249646" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (508) 224-9646
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mr-3 shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold group-hover:text-navy transition-colors" />
                </div>
                <a href="mailto:mgreen@tgacapitalmanagement.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  mgreen@tgacapitalmanagement.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Client Access */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gold uppercase tracking-wider">Client Access</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Access your portfolio, statements, and account information through our secure client portal.
            </p>
            <Link 
              href="/client-login" 
              className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-navy font-bold rounded transition-all hover:shadow-lg text-sm"
            >
              Client Login
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-white/10 bg-navy-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-4">
            <p className="text-gray-500 text-xs leading-relaxed">
              Investment Advisory Services are offered through TGA Capital Management, a Massachusetts-registered Investment Advisor (RIA). We operate strictly in a fiduciary capacity, always prioritizing our advisory members' best interests. No statements made should be considered tax, legal, or accounting advice. You should consult your own legal or tax professional regarding such matters.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Some guides and content intended for publication were either co-authored or provided entirely by third-party publications. TGA Capital Management works with third-party marketing and public relations firms to secure media appearances, arrange interviews, and suggest content for radio, podcasts, blogs, and other educational communications to promote public awareness. TGA Capital Management does not sell or accept any commission-based products nor receive any third-party benefits. Our privacy policy statement is provided upon request. You can contact the Division for any disciplinary history.
            </p>
            <p className="text-gray-400 text-xs font-medium">
              Charles Schwab and Company., Inc Institutional Custodian.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} TGA Capital Management. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

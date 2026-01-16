import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Calendar, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your journey to financial success? We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Let&apos;s Connect</h2>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  Schedule your free client teleconferencing consultation, subscribe to our exclusive webinars, or sign up to receive our advisory updates.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 mr-5 group-hover:bg-gold transition-colors">
                      <MapPin className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Visit Our Office</h3>
                      <p className="text-gray-600">
                        25 Braintree Hill Office Park<br />
                        Braintree, MA 02184
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 mr-5 group-hover:bg-gold transition-colors">
                      <Phone className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Give Us a Call</h3>
                      <p className="text-gray-600">
                        <a href="tel:5082249646" className="hover:text-gold transition-colors">(508) 224-9646</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 mr-5 group-hover:bg-gold transition-colors">
                      <Mail className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Send an Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:mgreen@tgacapitalmanagement.com" className="hover:text-gold transition-colors">mgreen@tgacapitalmanagement.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 mr-5 group-hover:bg-gold transition-colors">
                      <Clock className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        <span className="text-sm text-gray-500">Eastern Time</span>
                      </p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://calendly.com/mgreen-5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Free Consultation
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-navy mb-2">Send a Message</h3>
                <p className="text-gray-600 mb-8">We&apos;ll get back to you within 24 hours.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" 
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" 
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">How Can We Help?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your financial goals..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-navy hover:bg-navy-light text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <div className="h-96 w-full bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.551608681729!2d-71.02674902346985!3d42.22384797121087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37c6e1b0d0001%3A0x7a0f0f0f0f0f0f0f!2s25%20Braintree%20Hill%20Office%20Park%2C%20Braintree%2C%20MA%2002184!5e0!3m2!1sen!2sus!4v1703290000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="TGA Capital Management Office Location"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}

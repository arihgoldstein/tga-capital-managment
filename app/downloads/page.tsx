import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Download, FileText, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { downloads } from '@/lib/data';

export default function Downloads() {
  const categories = [...new Set(downloads.map(d => d.category))];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-gray-300 hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="text-center">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Free Resources</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Downloads</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive guides, worksheets, and educational materials to support your financial journey.
              </p>
            </div>
          </div>
        </div>

        {/* Downloads Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-full cursor-pointer">
                All Downloads
              </span>
              {categories.map((category) => (
                <span 
                  key={category}
                  className="px-4 py-2 bg-gray-100 text-navy text-sm font-semibold rounded-full cursor-pointer hover:bg-navy hover:text-white transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {downloads.map((download) => (
                <div 
                  key={download.slug}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all"
                >
                  {/* Document Preview */}
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
                    <div className="w-20 h-24 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-200">
                      <FileText className="w-8 h-8 text-red-500 mb-1" />
                      <span className="text-xs font-bold text-gray-500">PDF</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-bold rounded-full">
                        {download.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {download.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {download.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{download.fileType} • {download.fileSize}</span>
                      <a 
                        href={download.fileUrl}
                        className="inline-flex items-center px-4 py-2 bg-navy text-white text-sm font-bold rounded-lg hover:bg-navy-light transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Resources CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Looking for More Insights?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Check out our blog for in-depth articles on retirement planning, investing, tax strategies, and more.
            </p>
            <Link 
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Have Questions About These Resources?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Our team is here to help you understand these materials and how they apply to your situation.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-all shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


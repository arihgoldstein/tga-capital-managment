import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, User, Linkedin, Mail, BookOpen } from 'lucide-react';
import { authors, getBlogPostsByAuthor } from '@/lib/data';

export default function Authors() {
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
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Our Team</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Authors & Contributors</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experienced professionals behind our educational content and insights.
              </p>
            </div>
          </div>
        </div>

        {/* Authors Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authors.map((author) => {
                const authorPosts = getBlogPostsByAuthor(author.slug);
                return (
                  <Link 
                    key={author.slug}
                    href={`/authors/${author.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all"
                  >
                    {/* Author Photo Area */}
                    <div className="h-48 bg-gradient-to-br from-navy to-navy-light relative flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold/30">
                        <User className="w-12 h-12 text-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                        {author.name}
                      </h3>
                      <p className="text-gold text-sm font-semibold mb-4">{author.title}</p>
                      
                      {/* Credentials */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {author.credentials.map((cred) => (
                          <span key={cred} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                            {cred}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {author.bio}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-gray-500 text-sm">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {authorPosts.length} article{authorPosts.length !== 1 ? 's' : ''}
                        </div>
                        <div className="flex gap-3">
                          {author.linkedin && (
                            <span className="text-gray-400 hover:text-navy transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </span>
                          )}
                          {author.email && (
                            <span className="text-gray-400 hover:text-navy transition-colors">
                              <Mail className="w-5 h-5" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Want to Work With Our Team?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Schedule a consultation to discuss how we can help you achieve your financial goals.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


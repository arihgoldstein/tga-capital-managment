import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Clock, ArrowRight, User, BookOpen, Download, Users } from 'lucide-react';
import { blogPosts, getAuthorBySlug } from '@/lib/data';

export default function Resources() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Knowledge Center</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert perspectives, educational guides, and tools to help you make informed financial decisions.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/resources#blog" 
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-gold"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mr-5 group-hover:bg-navy transition-colors">
                  <BookOpen className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Blog & Articles</h3>
                  <p className="text-gray-600 text-sm">{blogPosts.length} articles available</p>
                </div>
              </Link>

              <Link 
                href="/downloads" 
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-gold"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mr-5 group-hover:bg-navy transition-colors">
                  <Download className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Downloads</h3>
                  <p className="text-gray-600 text-sm">Guides & worksheets</p>
                </div>
              </Link>

              <Link 
                href="/authors" 
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-gold"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mr-5 group-hover:bg-navy transition-colors">
                  <Users className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Our Authors</h3>
                  <p className="text-gray-600 text-sm">Meet our team</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">Featured</p>
                <h2 className="text-3xl font-serif font-bold text-navy">Top Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => {
                  const author = getAuthorBySlug(post.author);
                  return (
                    <Link 
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-gold"
                    >
                      <div className="h-56 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full mb-2">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            <span>{author?.name}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section id="blog" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">All Articles</p>
              <h2 className="text-3xl font-serif font-bold text-navy">Latest Insights</h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-full cursor-pointer">
                All
              </span>
              {categories.map((category) => (
                <span 
                  key={category}
                  className="px-4 py-2 bg-white text-navy text-sm font-semibold rounded-full cursor-pointer hover:bg-navy hover:text-white transition-colors border border-gray-200"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => {
                const author = getAuthorBySlug(post.author);
                return (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold"
                  >
                    <div className="h-48 bg-gradient-to-br from-navy/80 to-navy-light relative">
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                        <span>{author?.name}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Have Questions About Any of These Topics?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Our team is here to help you understand these concepts and how they apply to your unique situation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg"
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

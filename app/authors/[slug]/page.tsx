import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, User, Linkedin, Mail, Clock, Calendar } from 'lucide-react';
import { authors, getBlogPostsByAuthor } from '@/lib/data';
import { notFound } from 'next/navigation';

// Generate static params for all authors
export function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = authors.find(a => a.slug === slug);
  
  if (!author) {
    notFound();
  }

  const authorPosts = getBlogPostsByAuthor(author.slug);

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
              href="/authors" 
              className="inline-flex items-center text-gray-300 hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Authors
            </Link>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Author Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-gold/30 shrink-0">
                <User className="w-16 h-16 md:w-20 md:h-20 text-gold" />
              </div>
              
              {/* Author Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2">{author.name}</h1>
                <p className="text-gold text-xl mb-4">{author.title}</p>
                
                {/* Credentials */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {author.credentials.map((cred) => (
                    <span key={cred} className="px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full">
                      {cred}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  {author.linkedin && (
                    <a 
                      href={author.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                  {author.email && (
                    <a 
                      href={`mailto:${author.email}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">About</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{author.bio}</p>
          </div>
        </section>

        {/* Author's Articles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">Articles</p>
                <h2 className="text-3xl font-serif font-bold text-navy">
                  Posts by {author.name.split(' ')[0]}
                </h2>
              </div>
              <span className="text-gray-500">{authorPosts.length} article{authorPosts.length !== 1 ? 's' : ''}</span>
            </div>
            
            {authorPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorPosts.map((post) => {
                  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  });
                  
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
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{publishedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <p className="text-gray-500">No articles yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Want to Connect?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Schedule a consultation to discuss your financial goals with our team.
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


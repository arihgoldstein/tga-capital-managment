import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Clock, ArrowLeft, User, Calendar, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { blogPosts, getAuthorBySlug, getBlogPostsByAuthor, getRecentPosts } from '@/lib/data';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const author = getAuthorBySlug(post.author);
  const authorPosts = getBlogPostsByAuthor(post.author).filter(p => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== post.slug).slice(0, 2);

  // Format date
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map(line => {
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-navy mt-10 mb-4">${line.replace('## ', '')}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl font-bold text-navy mt-8 mb-3">${line.replace('### ', '')}</h3>`;
        }
        if (line.startsWith('- ')) {
          return `<li class="ml-6 mb-2 text-gray-700">${line.replace('- ', '')}</li>`;
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return `<p class="font-bold text-navy mt-4 mb-2">${line.replace(/\*\*/g, '')}</p>`;
        }
        if (line.trim() === '') {
          return '<br />';
        }
        return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-navy text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-gray-300 hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            
            <span className="inline-block px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full mb-6">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              {author && (
                <Link href={`/authors/${author.slug}`} className="flex items-center hover:text-gold transition-colors">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gold" />
                  </div>
                  <span>{author.name}</span>
                </Link>
              )}
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />
                
                {/* Tags/Categories */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-semibold text-gray-600 mr-2">Topics:</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Author Card */}
                {author && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-8 sticky top-24">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the Author</h4>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mr-4">
                        <User className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <Link href={`/authors/${author.slug}`} className="font-bold text-navy hover:text-gold transition-colors">
                          {author.name}
                        </Link>
                        <p className="text-sm text-gray-600">{author.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{author.bio}</p>
                    <div className="flex gap-3">
                      {author.linkedin && (
                        <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {author.email && (
                        <a href={`mailto:${author.email}`} className="text-gray-400 hover:text-navy transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-8">More Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...authorPosts, ...relatedPosts].slice(0, 3).map((relatedPost) => {
                const relatedAuthor = getAuthorBySlug(relatedPost.author);
                return (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold"
                  >
                    <div className="h-40 bg-gradient-to-br from-navy/80 to-navy-light relative">
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <span>{relatedAuthor?.name}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Ready to Put These Insights Into Action?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Our team can help you apply these strategies to your unique financial situation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded hover:bg-navy-light transition-all shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


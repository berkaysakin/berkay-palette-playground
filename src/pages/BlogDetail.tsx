import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blogData";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6 -ml-4">
              <Link to="/blog" className="flex items-center bg-white gap-2">
                <ArrowLeft className="h-4 w-4" />
                Tüm Yazılara Dön
              </Link>
            </Button>

            {/* Post Meta */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm bg-white">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Paylaş
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
                  />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Kategori:</span>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Card */}
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-heading font-bold text-xl">B</span>
                      </div>
                      <h3 className="font-heading font-bold text-black mb-2">Berkay</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Eğitim danışmanı, girişimci ve kişisel gelişim uzmanı. 
                        İnsanlara ilham veren çözümler üretiyor.
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={scrollToBottom}
                      >
                        İletişime Geç
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-heading font-bold">
                        İlgili Yazılar
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link 
                          key={relatedPost.id} 
                          to={`/blog/${relatedPost.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-black line-clamp-2 group-hover:text-primary transition-colors">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                                <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
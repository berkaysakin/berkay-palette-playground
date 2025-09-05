import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, categories } from "@/lib/blogData";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="text-sm bg-white font-medium mb-4">
              📝 Blog
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Fikirler ve Deneyimler
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Eğitim, girişimcilik ve kişisel gelişim alanlarında paylaştığım yazılar ve deneyimler.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex justify-center">
                <div className="inline-flex p-1 bg-gray-100 rounded-full">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                        selectedCategory === cat
                          ? 'text-white'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {selectedCategory === cat && (
                        <div className="absolute inset-0 bg-gradient-primary rounded-full transition-all duration-300 ease-out" />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card
                    className="group hover:shadow-hover transition-all duration-500 border border-gray-200 overflow-hidden cursor-pointer transform hover:-translate-y-1 animate-fade-in h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black text-xs transition-transform duration-300 group-hover:scale-105"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold text-black line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex flex-col justify-between flex-1">
                      <div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Devamını Oku
                          <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Bu kategoride henüz yazı bulunmuyor.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
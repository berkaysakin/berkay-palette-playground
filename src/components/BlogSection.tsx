"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, categories } from "@/lib/blogData";



const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-20 pt-2 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-sm font-medium mb-4">
            📝 Blog
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Blog Yazılarım
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Eğitim, girişimcilik ve kişisel gelişim alanlarında paylaştığım yazılar.
          </p>
        </div>

        {/* Tabs for categories */}
        <div className="mb-10">
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
                className="group hover:shadow-hover transition-all duration-500 border border-gray-200 overflow-hidden cursor-pointer transform hover:-translate-y-1 animate-fade-in"
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
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

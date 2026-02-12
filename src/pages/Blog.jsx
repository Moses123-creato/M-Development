import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Skills That Employers Are Looking For in 2025',
      excerpt: 'Discover the most in-demand skills that can boost your career prospects...',
      category: 'Career Tips',
      author: 'John Smith',
      date: 'Jan 10, 2025',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Balance Online Learning with Work',
      excerpt: 'Practical strategies for managing your time while pursuing vocational training...',
      category: 'Learning Tips',
      author: 'Sarah Johnson',
      date: 'Jan 5, 2025',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Success Story: From Zero to Pro Tailor',
      excerpt: 'How Amara transformed her life through our professional tailoring program...',
      category: 'Success Stories',
      author: 'Admin',
      date: 'Dec 28, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      readTime: '6 min read',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Skill Acquisition Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Learn from industry experts and success stories
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden group hover:shadow-soft-lg transition-all">
                <div className="h-48 rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mb-3">
                  <span className="badge badge-primary">{post.category}</span>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <User size={14} />
                      <span className="text-gray-600">{post.author}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1">
                      Read <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
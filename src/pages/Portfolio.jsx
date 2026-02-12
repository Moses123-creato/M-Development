import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Filter } from 'lucide-react';
import PortfolioCard from '../components/cards/PortfolioCard';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Wedding Gown',
      category: 'Fashion & Tailoring',
      description: 'Elegant custom tailored wedding dress with intricate beadwork',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      studentName: 'Amara Okafor',
      studentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      program: 'Professional Tailoring',
      rating: 5,
    },
    {
      id: 2,
      title: 'Color & Cut Transformation',
      category: 'Beauty & Grooming',
      description: 'Complete hair makeover with modern color technique',
      image: 'https://images.unsplash.com/photo-1562896369-2be32758fe5f?w=500',
      studentName: 'Priya Sharma',
      studentImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      program: 'Advanced Hair Styling',
      rating: 5,
    },
    {
      id: 3,
      title: 'Wooden Coffee Table',
      category: 'Carpentry & Trade Skills',
      description: 'Handcrafted solid wood furniture with professional finishing',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500',
      studentName: 'Charles Brown',
      studentImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      program: 'Woodworking Mastery',
      rating: 5,
    },
    {
      id: 4,
      title: 'Website Redesign',
      category: 'Digital & Tech Skills',
      description: 'Modern responsive website with smooth animations',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500',
      studentName: 'Maya Patel',
      studentImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      program: 'Web Development',
      rating: 5,
    },
  ];

  const categories = ['Fashion & Tailoring', 'Beauty & Grooming', 'Carpentry & Trade Skills', 'Digital & Tech Skills'];

  const filteredPortfolio = selectedCategory
    ? portfolioItems.filter((item) => item.category === selectedCategory)
    : portfolioItems;

  return (
    <>
      <Helmet>
        <title>Portfolio & Success Stories - Skill Acquisition Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Portfolio</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Showcase of work from our talented students across all programs
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className="text-primary-600" />
              <h3 className="font-bold text-lg">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  !selectedCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
                }`}
              >
                All Work
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <PortfolioCard key={item.id} portfolio={item} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="card text-center">
              <p className="text-4xl font-bold text-primary-600 mb-2">1000+</p>
              <p className="text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-bold text-secondary-600 mb-2">95%</p>
              <p className="text-gray-600 font-semibold">Success Rate</p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-bold text-accent-600 mb-2">4.9/5</p>
              <p className="text-gray-600 font-semibold">Student Rating</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
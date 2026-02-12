import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from '../cards/PortfolioCard';

export default function PortfolioCarousel() {
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

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the amazing work created by our talented students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} portfolio={item} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio" className="btn btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
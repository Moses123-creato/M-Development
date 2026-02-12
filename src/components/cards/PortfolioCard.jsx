import React from 'react';
import { Star, User } from 'lucide-react';

export default function PortfolioCard({ portfolio }) {
  return (
    <div className="card group hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
      <div className="h-56 rounded-lg overflow-hidden bg-gray-200 mb-4">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="mb-3">
        <span className="badge badge-accent">{portfolio.category}</span>
      </div>

      <h3 className="font-bold text-lg text-gray-900 mb-2">
        {portfolio.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {portfolio.description}
      </p>

      {/* Student Info */}
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <img
          src={portfolio.studentImage}
          alt={portfolio.studentName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm text-gray-900">
            {portfolio.studentName}
          </p>
          <p className="text-xs text-gray-600">{portfolio.program}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < portfolio.rating ? 'fill-accent-500 text-accent-500' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">({portfolio.rating}/5)</span>
      </div>
    </div>
  );
}
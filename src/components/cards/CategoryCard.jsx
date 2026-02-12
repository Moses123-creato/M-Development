import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  const IconComponent = Icons[category.icon] || Icons.BookOpen;

  return (
    <Link to={`/categories/${category.id}`}>
      <div className="card h-full group hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
            <IconComponent size={28} className={`text-${category.color.split('-')[1]}-600`} />
          </div>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {category.programs} Programs
          </span>
        </div>

        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {category.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {category.description}
        </p>

        <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Explore <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
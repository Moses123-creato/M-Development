import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

export default function ProgramCard({ program }) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'badge-secondary';
      case 'Intermediate':
        return 'badge-accent';
      case 'Advanced':
        return 'badge-primary';
      default:
        return 'badge-primary';
    }
  };

  const getModeColor = (mode) => {
    switch (mode) {
      case 'Online':
        return 'bg-blue-100 text-blue-700';
      case 'Onsite':
        return 'bg-green-100 text-green-700';
      case 'Hybrid':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Link to={`/program/${program.id}`}>
      <div className="card h-full flex flex-col hover:shadow-soft-lg group cursor-pointer">
        {/* Image */}
        <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-200">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className={`badge ${getLevelColor(program.level)}`}>
              {program.level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-primary-600 font-semibold mb-2">
            {program.category}
          </p>
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {program.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-1">
            {program.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Clock size={16} />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <User size={16} />
              <span>{program.instructor.name}</span>
            </div>
          </div>

          {/* Modes */}
          <div className="flex flex-wrap gap-2 mb-4">
            {program.mode.map((m) => (
              <span key={m} className={`text-xs px-3 py-1 rounded-full font-medium ${getModeColor(m)}`}>
                {m}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:text-primary-600 transition-colors">
            <span className="font-bold text-lg text-primary-600">{program.price}</span>
            <span className="flex items-center gap-2 text-primary-600 font-semibold">
              Learn More <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
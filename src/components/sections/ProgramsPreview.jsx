import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../cards/ProgramCard';
import { programs } from '../../data/programs';

export default function ProgramsPreview() {
  const featuredPrograms = programs.slice(0, 6);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our most popular vocational training programs across all skill categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/programs" className="btn btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
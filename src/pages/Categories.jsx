import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ProgramCard from '../components/cards/ProgramCard';
import { programs, categories } from '../data/programs';

export default function Categories() {
  const { id } = useParams();

  const categoryList = id ? categories.filter((c) => c.id === parseInt(id)) : categories;
  const selectedCategory = categoryList[0];

  const categoryPrograms = selectedCategory
    ? programs.filter((p) => p.category === selectedCategory.name)
    : programs;

  return (
    <>
      <Helmet>
        <title>Categories - Skill Acquisition Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {selectedCategory ? (
          <>
            {/* Hero */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedCategory.image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200'}
                alt={selectedCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end">
                <div className="container-custom pb-8 text-white w-full">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {selectedCategory.name}
                  </h1>
                  <p className="text-xl text-gray-100 max-w-2xl">
                    {selectedCategory.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="container-custom py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Programs in {selectedCategory.name} ({categoryPrograms.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* All Categories */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
              <div className="container-custom">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Skill Categories</h1>
                <p className="text-xl text-gray-100 max-w-2xl">
                  Explore all our vocational training categories
                </p>
              </div>
            </div>

            <div className="container-custom py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category) => (
                  <div key={category.id} className="card">
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <a
                      href={`/categories/${category.id}`}
                      className="btn btn-primary inline-block"
                    >
                      View Programs
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
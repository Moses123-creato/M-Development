import React from 'react';
import { Helmet } from 'react-helmet';
import ProgramCard from '../components/cards/ProgramCard';
import { programs } from '../data/programs';

export default function OnlineCourses() {
  const onlinePrograms = programs.filter((p) => p.mode.includes('Online'));

  return (
    <>
      <Helmet>
        <title>Online Courses - Skill Acquisition Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Courses</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Learn at your own pace with flexible, professional online training programs
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600 mb-2">24/7</p>
                <p className="text-gray-600">Learn Anytime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary-600 mb-2">∞</p>
                <p className="text-gray-600">Lifetime Access</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-600 mb-2">↔</p>
                <p className="text-gray-600">Self-Paced</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600 mb-2">📱</p>
                <p className="text-gray-600">Mobile Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="container-custom py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {onlinePrograms.length} Online Courses Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlinePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200")',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="badge bg-primary-500 text-white">
              Welcome to Excellence
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Skills That{' '}
            <span className="text-gradient">Transform Lives</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Learn practical vocational skills through hands-on training, combining online flexibility with onsite expertise. Get certified and launch your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/programs" className="btn btn-primary group">
              Explore Programs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/apply" className="btn btn-accent group">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
            <div>
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-gray-200 text-sm">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-gray-200 text-sm">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-200 text-sm">Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
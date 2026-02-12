import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Clock,
  User,
  Award,
  BookOpen,
  ChevronDown,
  Star,
  ArrowLeft,
} from 'lucide-react';
import { programs } from '../data/programs';

export default function ProgramDetail() {
  const { id } = useParams();
  const [expandedFaq, setExpandedFaq] = React.useState(null);

  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <Link to="/programs" className="btn btn-primary">
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-secondary-100 text-secondary-700';
      case 'Intermediate':
        return 'bg-accent-100 text-accent-700';
      case 'Advanced':
        return 'bg-primary-100 text-primary-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      <Helmet>
        <title>{program.title} - Skill Acquisition Foundation</title>
        <meta name="description" content={program.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <Link
              to="/programs"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Programs
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-8 text-white w-full">
              <p className="text-sm font-semibold text-gray-200 mb-2">
                {program.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {program.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className={`badge ${getLevelColor(program.level)}`}>
                  {program.level}
                </span>
                {program.mode.map((m) => (
                  <span key={m} className="badge bg-white/20 text-white">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Program Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-bold text-lg text-gray-900">
                      {program.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Level</p>
                    <p className="font-bold text-lg text-gray-900">
                      {program.level}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price</p>
                    <p className="font-bold text-lg text-primary-600">
                      {program.price}
                    </p>
                  </div>
                </div>
              </section>

              {/* Curriculum */}
              <section className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Curriculum
                </h2>
                <div className="space-y-4">
                  {program.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen size={20} className="text-primary-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {module.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {module.lessons} lessons
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-500">
                          Module {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Instructor
                </h2>
                <div className="flex gap-6">
                  <img
                    src={program.instructor.image}
                    alt={program.instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {program.instructor.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {program.instructor.title}
                    </p>
                    <p className="text-gray-600">
                      Expert instructor with years of industry experience, dedicated to helping you succeed.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {program.faq.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-primary-600 transition-transform ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Student Reviews
                </h2>
                <div className="space-y-6">
                  {program.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {review.author}
                        </h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? 'fill-accent-500 text-accent-500'
                                  : 'text-gray-300'
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Price Card */}
                <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">Program Price</p>
                    <p className="text-4xl font-bold text-primary-600">
                      {program.price}
                    </p>
                  </div>

                  <Link to="/apply" className="btn btn-primary w-full block text-center mb-3">
                    Enroll Now
                  </Link>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock size={18} className="text-primary-600" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Award size={18} className="text-primary-600" />
                      <span>Certification Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <User size={18} className="text-primary-600" />
                      <span>Expert Instruction</span>
                    </div>
                  </div>
                </div>

                {/* Learning Modes */}
                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-4">Learning Modes</h3>
                  <div className="space-y-2">
                    {program.mode.map((mode) => (
                      <div
                        key={mode}
                        className="p-3 bg-gray-50 rounded-lg border-2 border-primary-200"
                      >
                        <p className="font-semibold text-gray-900">{mode}</p>
                        <p className="text-xs text-gray-600">
                          {mode === 'Online'
                            ? 'Learn at your own pace'
                            : mode === 'Onsite'
                            ? 'Hands-on training'
                            : 'Blend of both'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-4">Share This Program</h3>
                  <div className="flex gap-2">
                    <button className="flex-1 p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors font-semibold text-sm">
                      Facebook
                    </button>
                    <button className="flex-1 p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors font-semibold text-sm">
                      Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
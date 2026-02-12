import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Amara Okafor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      program: 'Professional Tailoring',
      text: 'The instructors are incredibly knowledgeable and supportive. I went from complete beginner to confident tailor in just 8 weeks!',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      program: 'Web Development',
      text: 'Best investment I made for my career. The hands-on approach and real-world projects prepared me perfectly for job market.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      program: 'UI/UX Design',
      text: 'Flexible learning options allowed me to study while working. The certification opened doors I never thought possible.',
      rating: 5,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our successful graduates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 font-semibold">
                    {testimonial.program}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
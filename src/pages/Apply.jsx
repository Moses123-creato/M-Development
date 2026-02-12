import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin } from 'lucide-react';
import { programs } from '../data/programs';

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    mode: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (connect to backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        mode: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Apply Now - Skill Acquisition Foundation</title>
        <meta name="description" content="Enroll in our training programs" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Start your journey to mastering a valuable skill today
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card text-center bg-green-50 border-2 border-green-200">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">
                    Application Submitted!
                  </h2>
                  <p className="text-green-600 mb-4">
                    Thank you for your application. We'll contact you soon with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Program */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program) => (
                        <option key={program.id} value={program.id}>
                          {program.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mode */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Learning Mode *
                    </label>
                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a mode</option>
                      <option value="Online">Online</option>
                      <option value="Onsite">Onsite</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tell us about your goals and experience..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Submit Application
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll review your application and contact you within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <h3 className="font-bold text-xl text-gray-900 mb-6">
                  Questions?
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Call Us</p>
                      <p className="font-semibold text-gray-900">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email Us</p>
                      <p className="font-semibold text-gray-900">
                        info@skillacquisition.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Visit Us</p>
                      <p className="font-semibold text-gray-900">
                        123 Training Street, City, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
                <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-primary-600 font-bold">✓</span>
                    Expert instructors
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 font-bold">✓</span>
                    Industry certifications
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 font-bold">✓</span>
                    Flexible learning
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 font-bold">✓</span>
                    Job placement support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
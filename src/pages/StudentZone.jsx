import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  BookOpen,
  Award,
  User,
  LogOut,
  BarChart3,
  Settings,
} from 'lucide-react';

export default function StudentZone() {
  const [activeTab, setActiveTab] = useState('courses');

  // Mock student data
  const studentData = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    enrolledCourses: [
      {
        id: 1,
        title: 'Professional Tailoring',
        progress: 65,
        status: 'In Progress',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150',
      },
      {
        id: 2,
        title: 'Advanced Hair Styling',
        progress: 100,
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1562896369-2be32758fe5f?w=150',
      },
    ],
    certificates: [
      {
        id: 1,
        title: 'Hair Styling Professional',
        date: 'Jan 15, 2025',
        issuer: 'Skill Acquisition Foundation',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Student Dashboard - Skill Acquisition Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={studentData.avatar}
                  alt={studentData.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white"
                />
                <div>
                  <h1 className="text-3xl font-bold">{studentData.name}</h1>
                  <p className="text-gray-100">{studentData.email}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="container-custom">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-4 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'courses'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={20} />
                  My Courses
                </div>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-4 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'certificates'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  Certificates
                </div>
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`px-4 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'progress'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 size={20} />
                  Progress
                </div>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'settings'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Settings size={20} />
                  Settings
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          {/* My Courses */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentData.enrolledCourses.map((course) => (
                  <div key={course.id} className="card">
                    <div className="h-40 rounded-lg overflow-hidden bg-gray-200 mb-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-gray-600">Progress</p>
                        <span className="font-bold text-primary-600">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className={`badge ${
                        course.status === 'Completed'
                          ? 'badge-secondary'
                          : 'badge-primary'
                      }`}>
                        {course.status}
                      </span>
                      <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                        {course.status === 'Completed' ? 'Review' : 'Continue'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates */}
          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
              {studentData.certificates.length > 0 ? (
                <div className="space-y-4">
                  {studentData.certificates.map((cert) => (
                    <div key={cert.id} className="card flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center">
                          <Award size={32} className="text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                      <button className="btn btn-accent text-sm">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card text-center py-12">
                  <p className="text-gray-600">
                    Complete courses to earn certificates
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Progress */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card text-center">
                  <p className="text-4xl font-bold text-primary-600 mb-2">2</p>
                  <p className="text-gray-600">Courses Enrolled</p>
                </div>
                <div className="card text-center">
                  <p className="text-4xl font-bold text-secondary-600 mb-2">1</p>
                  <p className="text-gray-600">Completed</p>
                </div>
                <div className="card text-center">
                  <p className="text-4xl font-bold text-accent-600 mb-2">65%</p>
                  <p className="text-gray-600">Average Progress</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-lg text-gray-900 mb-6">
                  Course Progress Overview
                </h3>
                <div className="space-y-6">
                  {studentData.enrolledCourses.map((course) => (
                    <div key={course.id}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {course.title}
                        </h4>
                        <span className="text-primary-600 font-bold">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
              <div className="card max-w-2xl">
                <h3 className="font-bold text-lg text-gray-900 mb-6">
                  Profile Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={studentData.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={studentData.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>

              <div className="card max-w-2xl">
                <h3 className="font-bold text-lg text-gray-900 mb-6">
                  Password & Security
                </h3>
                <button className="btn btn-outline">Change Password</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
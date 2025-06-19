import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="block text-blue-600">Master Languages</span>
            <span className="block">Through AI Conversations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Practice speaking any language with our advanced AI chatbot. Get real-time feedback,
            build vocabulary, and gain confidence in your conversation skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started for Free
            </Link>
            <Link
              to="/chat"
              className="px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white border border-blue-600 hover:bg-blue-50"
            >
              Try a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features that set us apart
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers everything you need to practice and master a new language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm4 0h-2v-6h2v6zm-6-8V8h8v2h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Conversations</h3>
              <p className="text-gray-600">
                Engage in realistic, contextual conversations with our advanced AI chatbot in your target language.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm4 0h-2v-6h2v6zm-6-8V8h8v2h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get immediate corrections on grammar, vocabulary, and pronunciation to improve quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm4 0h-2v-6h2v6zm-6-8V8h8v2h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                Adaptive learning paths that adjust to your proficiency level and learning goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Languages You Can Learn
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform supports a wide range of languages at all proficiency levels.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Japanese', 'Mandarin', 'Korean', 'Arabic', 'Dutch', 'Hindi'].map((language) => (
              <div key={language} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-900">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to start your language journey?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of learners who are improving their language skills every day.
          </p>
          <Link
            to="/register"
            className="px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Sign Up for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

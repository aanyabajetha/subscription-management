import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center py-10 px-4">
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center bg-gray-800 text-white py-16 px-4 md:px-8">
        <img
          src="" // Add your background image URL here
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Subscription Manager</h1>
          <p className="text-lg mb-6">
            Manage all your subscriptions in one place and never miss a payment.
          </p>
          <Link to="/signup">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2362/2362052.png"
              alt="Feature 1"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
            <p className="text-gray-600 text-sm mb-4">
              Easily manage all your subscriptions from a single dashboard. 
              Track your usage, adjust plans, and get a clear overview of your financial commitments.
            </p>
        
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col justify-between">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/633/173/non_2x/clock-icon-symbol-sign-vector.jpg"
              alt="Feature 2"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
            <p className="text-gray-600 text-sm mb-4">
              Receive timely reminders to avoid missing any payments. 
              Customize notifications for different services to stay on top of your expenses.
            </p>
            
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1822/1822140.png"
              alt="Feature 3"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get detailed insights into your subscription spending and usage. 
              Visualize your expenses and make informed decisions about your subscriptions.
            </p>
            
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gray-800 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-lg mb-6 text-white">
            Join thousands of users who have simplified their subscription management. Sign up today!
          </p>
          <Link to="/signup">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
              Sign Up Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

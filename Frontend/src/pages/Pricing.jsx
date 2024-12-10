import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing bg-gray-50 min-h-screen py-10 px-4">
      <section className="w-full max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
        <p className="text-center text-lg mb-12">
          Choose a plan that fits your needs. Start with a free 3-month trial, and select a subscription plan that suits you best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Free Trial Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Free Trial</h2>
            <p className="text-4xl font-bold mb-4">Free</p>
            <p className="text-gray-600 mb-6">Try out all features for free for the first 3 months. No credit card required.</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
              Start Free Trial
            </button>
          </div>
          {/* Monthly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
            <p className="text-4xl font-bold mb-4">₹49</p>
            <p className="text-gray-600 mb-6">Billed monthly. Enjoy flexibility with no long-term commitment.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Subscribe Monthly
            </button>
          </div>
          {/* 6-Month Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">6 Months</h2>
            <p className="text-4xl font-bold mb-4">₹299</p>
            <p className="text-gray-600 mb-6">Save with our 6-month plan. Ideal for medium-term use with significant savings.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Subscribe for 6 Months
            </button>
          </div>
          {/* Yearly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Yearly</h2>
            <p className="text-4xl font-bold mb-4">₹499</p>
            <p className="text-gray-600 mb-6">Get the best value with our annual plan. Access to all features for a full year.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Subscribe Yearly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

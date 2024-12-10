import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setEmail('');
        setPassword('');
        setError('');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Hardcoded user validation for demonstration
            const validUsers = [
                { email: "john.doe@example.com", password: "JD@pass123" },
                { email: "sarah.smith@example.com", password: "SS@pass456" },
                { email: "mike.wilson@example.com", password: "MW@pass789" },
                { email: "emma.brown@example.com", password: "EB@pass321" }
            ];

            const user = validUsers.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('user', JSON.stringify({ email: user.email }));
                navigate('/profile');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Colored Background */}
                <div className="hidden md:block w-1/2 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="flex items-center justify-center h-full px-8">
                        <div className="text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                            <p className="text-xl">Track all your subscriptions in one place</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-white p-8 lg:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">Sign In</h1>
                        <p className="text-gray-600">Please enter your credentials</p>
                    </div>

                    {error && (
                        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                        >
                            Sign In
                        </button>

                        <div className="text-center mt-4">
                            <span className="text-gray-600">Don't have an account?</span>
                            <Link to="/signup" className="text-blue-600 hover:text-blue-500 ml-2">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
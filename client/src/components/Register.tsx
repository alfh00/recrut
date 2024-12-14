import { useEffect, useState } from "react";
import useAuthStore from "../stores/useAuthStore";  
import { useNavigate } from "react-router";

const Register = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const register = useAuthStore(state => state.register);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        is_recruter: false,
    });
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id.replace('signup-', '')]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await register(formData);

        } catch (err: any) {
            const errorMessage = 
                err.response?.data?.msg || 
                "Registration failed";
            setError(errorMessage);
            console.error('Registration failed:', err);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate])


    return (
        <div className="flex flex-col bg-primary dark:bg-dark-primary">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-center text-primary-content dark:text-dark-primary-content">
                    Sign Up
                </h2>

                {error && (
                    <div className="text-red-500 text-center text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="signup-first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        First Name
                    </label>
                    <input
                        id="signup-first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="signup-last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last Name
                    </label>
                    <input
                        id="signup-last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        id="signup-email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <input
                        id="signup-password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        id="signup-is_recruter"
                        type="checkbox"
                        checked={formData.is_recruter}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="signup-is_recruter" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        I am a recruiter
                    </label>
                </div>

                <button 
                    type="submit" 
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;

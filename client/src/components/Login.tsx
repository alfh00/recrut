import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/useAuthStore"; 

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    // Get the login function from the store
    const login = useAuthStore((state) => state.login);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await login({ email, password });  
            
            if (isAuthenticated) {
                navigate("/dashboard");
            }
        } catch (err: any) {
            setError(err.response?.data?.msg || "Invalid credentials");
            console.error("Login failed:", err);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="flex flex-col bg-primary dark:bg-dark-primary">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-center text-primary-content dark:text-dark-primary-content">
                    Sign In
                </h2>

                {error && (
                    <div className="text-red-500 text-center text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="m@example.com"
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;

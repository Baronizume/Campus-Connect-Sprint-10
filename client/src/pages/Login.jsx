import { useState } from "react";

function Login({ onRegister, onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setSuccess("Login successful! Welcome to Campus Connect.");

        if (onLoginSuccess) {
            setTimeout(() => {
                onLoginSuccess();
            }, 800);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">

                <h1>Campus Connect</h1>
                <h2>Student Login</h2>

                <form onSubmit={handleLogin}>

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <p className="error">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="success">
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?

                    <button
                        type="button"
                        className="register-link"
                        onClick={onRegister}
                    >
                        Register
                    </button>
                </p>

            </div>
        </div>
    );
}

export default Login;
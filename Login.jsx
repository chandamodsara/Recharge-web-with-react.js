import React, { useState } from "react";


const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setMessage("Please fill all required fields.");
            return;
        }

        if (isRegister && !form.name) {
            setMessage("Please enter your name.");
            return;
        }

        if (isRegister) {
            // Save account in browser
            localStorage.setItem(
                "bluewaveUser",
                JSON.stringify(form)
            );

            setMessage("Account created successfully! 🎉");

            setTimeout(() => {
                setIsRegister(false);
                setMessage("");
            }, 1500);

            return;
        }

        // Save login
        localStorage.setItem(
            "bluewaveLogin",
            JSON.stringify({
                email: form.email,
                loginTime: new Date().toLocaleString(),
            })
        );

        setMessage("Login saved successfully! ✅");
    };

    const handleCreateAccount = () => {
        setIsRegister(true);
        setMessage("");

        setForm({
            name: "",
            email: "",
            password: "",
        });
    };

    const handleBackLogin = () => {
        setIsRegister(false);
        setMessage("");

        setForm({
            name: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className="login-page">

            {/* Login Card */}
            <div className="login-card">

                {/* Lock */}
                <div className="login-lock">
                    <div className="lock-circle">
                        <span>🔒</span>
                    </div>
                </div>

                <h1>
                    {isRegister ? "Create Account" : "Welcome Back!"}
                </h1>

                <p className="login-subtitle">
                    {isRegister
                        ? "Create your BlueWave recharge account"
                        : "Login to your Recharge Account"}
                </p>

                {/* Success / Error Message */}
                {message && (
                    <div
                        className={
                            message.includes("successfully")
                                ? "login-message success"
                                : "login-message error"
                        }
                    >
                        {message}
                    </div>
                )}

                {/* Form */}
                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name only for register */}
                    {isRegister && (
                        <div className="input-group">
                            <label>Full Name</label>

                            <div className="input-box">
                                <span>👤</span>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                    )}

                    {/* Email */}
                    <div className="input-group">
                        <label>Email Address</label>

                        <div className="input-box">
                            <span>✉</span>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <label>Password</label>

                        <div className="input-box">
                            <span>🔑</span>

                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    {/* Login Options */}
                    {!isRegister && (
                        <div className="login-options">

                            <label className="remember">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>

                            <a href="#forgot">
                                Forgot Password?
                            </a>

                        </div>
                    )}

                    {/* BLUE LOGIN / CREATE BUTTON */}
                    <button
                        type="submit"
                        className="login-btn"
                    >
                        {isRegister
                            ? "Create Account"
                            : "Login"}
                    </button>

                </form>

                {/* Social Login */}
                {!isRegister && (
                    <>
                        <div className="login-divider">
                            <span>OR</span>
                        </div>

                        <div className="social-login">

                            <button
                                type="button"
                                className="social-btn google-btn"
                                onClick={() =>
                                    setMessage("Google login selected.")
                                }
                            >
                                <span className="google-icon">
                                    G
                                </span>

                                Login with Google
                            </button>

                            <button
                                type="button"
                                className="social-btn facebook-btn"
                                onClick={() =>
                                    setMessage("Facebook login selected.")
                                }
                            >
                                <span className="facebook-icon">
                                    f
                                </span>

                                Login with Facebook
                            </button>

                        </div>
                    </>
                )}

                {/* Create Account / Back */}
                {!isRegister ? (
                    <p className="register-text">
                        Don't have an account?

                        <button
                            type="button"
                            onClick={handleCreateAccount}
                        >
                            Create Account
                        </button>
                    </p>
                ) : (
                    <p className="register-text">
                        Already have an account?

                        <button
                            type="button"
                            onClick={handleBackLogin}
                        >
                            Login
                        </button>
                    </p>
                )}

            </div>
        </div>
    );
};

export default Login;
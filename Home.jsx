import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero-grid">

                    <div className="hero-content">
                        <span className="badge">⚡ Fast & Secure Recharge</span>

                        <h1>
                            Recharge in seconds.
                            <span> Stay connected.</span>
                        </h1>

                        <p>
                            BlueWave makes mobile recharge simple, fast and secure.
                            Choose your perfect plan and recharge anytime.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/dashboard" className="primary-btn">
                                Recharge Now →
                            </Link>

                            <Link to="/about" className="secondary-btn">
                                Learn More
                            </Link>
                        </div>

                        <div className="trust-items">
                            <span>✓ Secure Payment</span>
                            <span>✓ Instant Recharge</span>
                            <span>✓ 24/7 Support</span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="phone-card">

                            <div className="phone-header">
                                <b>BlueWave</b>
                                <span>•••</span>
                            </div>

                            <small>Available Balance</small>

                            <h2>₹1,280.50</h2>

                            <div className="mobile-number">
                                +91 98765 43210
                            </div>

                            <div className="data-box">
                                <div>
                                    <span>Data Used</span>
                                    <b>72%</b>
                                </div>

                                <div className="progress">
                                    <i></i>
                                </div>
                            </div>

                            <Link to="/dashboard" className="phone-btn">
                                Recharge Now
                            </Link>

                        </div>
                    </div>

                </div>
            </section>

            <section className="section">
                <div className="container">

                    <div className="section-title">
                        <span>WHY BLUEWAVE</span>
                        <h2>Everything you need in one place</h2>
                        <p>
                            Easy recharge experience designed for everyone.
                        </p>
                    </div>

                    <div className="feature-grid">

                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Easy Recharge</h3>
                            <p>
                                Recharge your mobile number in just a few clicks.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure Payment</h3>
                            <p>
                                Your payment and transaction information stays protected.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Instant Activation</h3>
                            <p>
                                Get your recharge activated quickly without waiting.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💙</div>
                            <h3>24/7 Support</h3>
                            <p>
                                Our support team is always ready to help you.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="plans-section section">
                <div className="container">

                    <div className="section-title">
                        <span>POPULAR PLANS</span>
                        <h2>Choose your recharge plan</h2>
                    </div>

                    <div className="plans-grid">

                        <div className="plan-card">
                            <h3>Starter</h3>
                            <h2>₹199</h2>
                            <p>1.5 GB/day</p>
                            <p>28 Days Validity</p>
                            <Link to="/dashboard">Choose Plan →</Link>
                        </div>

                        <div className="plan-card popular-plan">
                            <div className="popular-label">POPULAR</div>
                            <h3>Smart</h3>
                            <h2>₹299</h2>
                            <p>2 GB/day</p>
                            <p>28 Days Validity</p>
                            <Link to="/dashboard">Choose Plan →</Link>
                        </div>

                        <div className="plan-card">
                            <h3>Max</h3>
                            <h2>₹499</h2>
                            <p>3 GB/day</p>
                            <p>56 Days Validity</p>
                            <Link to="/dashboard">Choose Plan →</Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
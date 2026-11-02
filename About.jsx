export default function About() {
    return (
        <div className="page">

            <section className="inner-hero">
                <div className="container">

                    <span className="badge">ABOUT BLUEWAVE</span>

                    <h1>
                        Simple technology for
                        <span> everyday connectivity.</span>
                    </h1>

                    <p>
                        We are building a faster, simpler and more reliable
                        recharge experience for everyone.
                    </p>

                </div>
            </section>

            <section className="section">
                <div className="container about-grid">

                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                            alt="Mobile payment"
                        />
                    </div>

                    <div className="about-content">

                        <span className="badge">OUR MISSION</span>

                        <h2>
                            Recharge should never
                            feel complicated.
                        </h2>

                        <p>
                            BlueWave is designed to make mobile recharge
                            quick, convenient and secure.
                        </p>

                        <p>
                            From mobile recharge to data plans and
                            transaction history, everything is available
                            from one simple dashboard.
                        </p>

                        <div className="about-list">
                            <div>✓ Fast Recharge</div>
                            <div>✓ Secure Transactions</div>
                            <div>✓ Simple Dashboard</div>
                            <div>✓ Customer Support</div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="section light-section">
                <div className="container">

                    <div className="section-title">
                        <span>OUR VALUES</span>
                        <h2>Built around our customers</h2>
                    </div>

                    <div className="feature-grid">

                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Speed</h3>
                            <p>
                                We focus on fast and smooth recharge experiences.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h3>Security</h3>
                            <p>
                                Security is at the heart of every transaction.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">❤️</div>
                            <h3>Customer First</h3>
                            <p>
                                Every feature is designed with customers in mind.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}
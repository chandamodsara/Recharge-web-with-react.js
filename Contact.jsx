import { useState } from "react";

export default function Contact() {

    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);

        setTimeout(() => {
            setSent(false);
        }, 3000);
    };

    return (
        <div className="page">

            <section className="inner-hero">
                <div className="container">

                    <span className="badge">CONTACT US</span>

                    <h1>
                        We're here when
                        <span> you need us.</span>
                    </h1>

                    <p>
                        Have a question? Send us a message.
                    </p>

                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">

                    <div className="contact-info">

                        <span className="badge">GET IN TOUCH</span>

                        <h2>Let's talk.</h2>

                        <p>
                            Our support team is available to help
                            with recharge and account related questions.
                        </p>

                        <div className="contact-item">
                            <div>📧</div>
                            <span>
                                <b>Email</b>
                                support@bluewave.com
                            </span>
                        </div>

                        <div className="contact-item">
                            <div>📞</div>
                            <span>
                                <b>Phone</b>
                                +91 98765 43210
                            </span>
                        </div>

                        <div className="contact-item">
                            <div>📍</div>
                            <span>
                                <b>Office</b>
                                Rajasthan, India
                            </span>
                        </div>

                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <label>
                            Name

                            <input
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </label>

                        <label>
                            Email

                            <input
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </label>

                        <label>
                            Message

                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </label>

                        <button className="primary-btn">
                            Send Message →
                        </button>

                        {sent && (
                            <div className="success-message">
                                ✓ Message sent successfully!
                            </div>
                        )}

                    </form>

                </div>
            </section>

        </div>
    );
}
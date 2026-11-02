import { useState } from "react";

export default function UserDashboard() {
    const [success, setSuccess] = useState(false);

    const handleRecharge = (e) => {
        e.preventDefault();
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <div className="container dashboard-header">
                <div>
                    <span className="badge">USER DASHBOARD</span>
                    <h1>Good to see you 👋</h1>
                    <p>Manage your mobile recharge and account.</p>
                </div>

                <div className="avatar">CM</div>
            </div>

            <div className="container">
                {/* Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">💳</div>
                        <span>Wallet Balance</span>
                        <h2>₹1,280.50</h2>
                        <small>Available balance</small>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">📱</div>
                        <span>Mobile Number</span>
                        <h2>98•••43210</h2>
                        <small>Jio • Active</small>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">🔄</div>
                        <span>Total Recharges</span>
                        <h2>24</h2>
                        <small>All Successful</small>
                    </div>
                </div>

                {/* Recharge + Plan */}
                <div className="dashboard-grid">
                    <form className="dashboard-box" onSubmit={handleRecharge}>
                        <span className="badge">QUICK RECHARGE</span>

                        <h2>Recharge Your Number</h2>

                        <label>
                            Mobile Number
                            <input
                                type="tel"
                                defaultValue="+91 98765 43210"
                                required
                            />
                        </label>

                        <label>
                            Select Operator
                            <select>
                                <option>Jio</option>
                                <option>Airtel</option>
                                <option>Vi</option>
                                <option>BSNL</option>
                            </select>
                        </label>

                        <label>
                            Select Plan
                            <select defaultValue="299">
                                <option value="199">₹199 • 1.5GB/day</option>
                                <option value="299">₹299 • 2GB/day</option>
                                <option value="499">₹499 • 3GB/day</option>
                            </select>
                        </label>

                        <button type="submit" className="primary-btn">
                            Pay & Recharge →
                        </button>

                        {success && (
                            <div className="success-message">
                                ✓ Recharge Successful!
                            </div>
                        )}
                    </form>

                    {/* Current Plan */}
                    <div className="current-plan">
                        <span className="badge">CURRENT PLAN</span>

                        <h2>Smart 299</h2>

                        <div className="big-data">
                            2 GB <small>/day</small>
                        </div>

                        <p>Validity : 28 Days</p>

                        <div className="plan-progress">
                            <i></i>
                        </div>

                        <div className="plan-info">
                            <span>1.16 GB Used</span>
                            <span>18 Days Left</span>
                        </div>

                        <hr />

                        <p>📞 Unlimited Calling</p>
                        <p>💬 100 SMS / Day</p>
                        <p>🌐 2GB High Speed Internet</p>
                    </div>
                </div>

                {/* Recharge History */}
                <div className="history-box">
                    <div className="history-title">
                        <div>
                            <span className="badge">TRANSACTIONS</span>
                            <h2>Recharge History</h2>
                            <p>Recent successful recharge details</p>
                        </div>

                        <button className="history-view-btn">View All</button>
                    </div>

                    <div className="history-table">
                        <div className="history-row history-heading">
                            <span>Date</span>
                            <span>Plan</span>
                            <span>Amount</span>
                            <span>Operator</span>
                            <span>Status</span>
                        </div>

                        <div className="history-row">
                            <span>12 Aug 2026</span>
                            <b>Smart 299</b>
                            <span>₹299</span>
                            <span>Jio</span>
                            <strong className="success">✓ Success</strong>
                        </div>

                        <div className="history-row">
                            <span>28 Jul 2026</span>
                            <b>Starter 199</b>
                            <span>₹199</span>
                            <span>Airtel</span>
                            <strong className="success">✓ Success</strong>
                        </div>

                        <div className="history-row">
                            <span>30 Jun 2026</span>
                            <b>Max 499</b>
                            <span>₹499</span>
                            <span>Vi</span>
                            <strong className="success">✓ Success</strong>
                        </div>

                        <div className="history-row">
                            <span>02 May 2026</span>
                            <b>Smart 299</b>
                            <span>₹299</span>
                            <span>Jio</span>
                            <strong className="success">✓ Success</strong>
                        </div>

                        <div className="history-row">
                            <span>15 Apr 2026</span>
                            <b>Unlimited 399</b>
                            <span>₹399</span>
                            <span>BSNL</span>
                            <strong className="success">✓ Success</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
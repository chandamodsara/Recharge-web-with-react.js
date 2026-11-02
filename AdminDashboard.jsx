import React, { useMemo, useState } from "react";

const USERS_PER_PAGE = 10;

const initialUsers = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    username: `user${i + 1}`,
    email: `user${i + 1}@example.com`,
    rechargetype: i % 2 === 0 ? "personal" : "business",
    mobile: `99999999${String(i).padStart(2, "0")}`,
    role: i % 2 === 0 ? "client" : "admin",
    status: i % 2 === 0 ? "active" : "non-active",
    operator:
        i % 4 === 0
            ? "airtel"
            : i % 4 === 1
                ? "jio"
                : i % 4 === 2
                    ? "vi"
                    : "bsnl",
    idtype: i % 2 === 0 ? "aadhar" : "pencard",
    rechargestatus: i % 3 === 0 ? "failed" : "successed",
}));

export default function AdminDashboard() {
    const [users, setUsers] = useState(initialUsers);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [activeMenu, setActiveMenu] = useState("dashboard");

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        mobile: "",
        role: "client",
        rechargetype: "personal",
        idtype: "aadhar",
        status: "active",
        operator: "airtel",
        rechargestatus: "successed",
    });

    /* -------------------------
       FILTER USERS
    ------------------------- */

    const filteredUsers = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();

        if (!term) return users;

        return users.filter(
            (user) =>
                user.username.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                user.mobile.includes(term)
        );
    }, [users, searchTerm]);

    /* -------------------------
       PAGINATION
    ------------------------- */

    const totalPages = Math.max(
        1,
        Math.ceil(filteredUsers.length / USERS_PER_PAGE)
    );

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * USERS_PER_PAGE,
        currentPage * USERS_PER_PAGE
    );

    /* -------------------------
       STATISTICS
    ------------------------- */

    const activeUsers = users.filter(
        (user) => user.status === "active"
    ).length;

    const successfulRecharges = users.filter(
        (user) => user.rechargestatus === "successed"
    ).length;

    const failedRecharges = users.filter(
        (user) => user.rechargestatus === "failed"
    ).length;

    /* -------------------------
       ADD USER
    ------------------------- */

    const handleAddUser = () => {
        if (
            !newUser.username.trim() ||
            !newUser.email.trim() ||
            !newUser.mobile.trim()
        ) {
            alert("Please fill Username, Email and Mobile.");
            return;
        }

        const user = {
            ...newUser,
            id: Date.now(),
        };

        setUsers((prev) => [...prev, user]);

        setNewUser({
            username: "",
            email: "",
            mobile: "",
            role: "client",
            rechargetype: "personal",
            idtype: "aadhar",
            status: "active",
            operator: "airtel",
            rechargestatus: "successed",
        });

        setCurrentPage(
            Math.ceil((users.length + 1) / USERS_PER_PAGE)
        );
    };

    /* -------------------------
       EDIT USER
    ------------------------- */

    const handleEdit = (id, key, value) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id
                    ? {
                        ...user,
                        [key]: value,
                    }
                    : user
            )
        );
    };

    /* -------------------------
       DELETE USER
    ------------------------- */

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        setUsers((prev) =>
            prev.filter((user) => user.id !== id)
        );

        if (
            paginatedUsers.length === 1 &&
            currentPage > 1
        ) {
            setCurrentPage((page) => page - 1);
        }
    };

    /* -------------------------
       SEARCH
    ------------------------- */

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    /* -------------------------
       SIDEBAR MENU
    ------------------------- */

    const menuItems = [
        {
            id: "home",
            icon: "⌂",
            label: "Home",
        },
        {
            id: "dashboard",
            icon: "▦",
            label: "Dashboard",
        },
        {
            id: "users",
            icon: "♙",
            label: "Users",
        },
        {
            id: "recharges",
            icon: "↻",
            label: "Recharges",
        },
        {
            id: "notifications",
            icon: "♢",
            label: "Notifications",
        },
        {
            id: "settings",
            icon: "⚙",
            label: "Settings",
        },


    ];

    return (
        <div className="admin-layout">

            {/* =========================
          SIDEBAR
      ========================= */}

            <aside className="admin-sidebar">

                <div className="admin-brand">

                    <div className="admin-brand-icon">
                        ⚡
                    </div>

                    <div>
                        <strong>
                            Blue<span>Wave</span>
                        </strong>

                        <small>ADMIN PANEL</small>
                    </div>

                </div>

                <div className="sidebar-title">
                    MAIN MENU
                </div>

                <nav className="admin-menu">

                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={
                                activeMenu === item.id
                                    ? "admin-menu-item active"
                                    : "admin-menu-item"
                            }
                            onClick={() =>
                                setActiveMenu(item.id)
                            }
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </button>

                    ))}

                </nav>

                <div className="sidebar-bottom">

                    <button className="admin-menu-item">
                        <span>▣</span>
                        Privacy Policy
                    </button>

                    <button className="admin-menu-item">
                        <span>↪</span>
                        Logout
                    </button>

                </div>

            </aside>


            {/* =========================
          MAIN AREA
      ========================= */}

            <main className="admin-main">

                {/* TOP NAVBAR */}

                <header className="admin-topbar">

                    <div>

                        <div className="admin-breadcrumb">
                            Admin /{" "}
                            <strong>
                                Dashboard
                            </strong>
                        </div>

                        <h1>
                            Admin Dashboard
                        </h1>

                    </div>

                    <div className="admin-top-actions">

                        <form
                            className="admin-global-search"
                            onSubmit={handleSearch}
                        >
                            <span>⌕</span>

                            <input
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search users..."
                            />
                        </form>

                        <button className="notification-btn">
                            ♢
                            <i></i>
                        </button>

                        <div className="admin-profile">

                            <div className="admin-avatar">
                                A
                            </div>

                            <div>
                                <strong>Admin</strong>
                                <small>Administrator</small>
                            </div>

                        </div>

                    </div>

                </header>

                {/* =========================
            CONTENT
        ========================= */}

                <div className="admin-content">

                    {/* STAT CARDS */}

                    <section className="admin-stats-grid">

                        <div className="admin-stat-card blue">

                            <div className="stat-card-top">
                                <span>Total Users</span>

                                <div className="stat-card-icon">
                                    ♙
                                </div>
                            </div>

                            <h2>
                                {users.length.toLocaleString()}
                            </h2>

                            <p>
                                <b>+12.4%</b> from last month
                            </p>

                        </div>

                        <div className="admin-stat-card cyan">

                            <div className="stat-card-top">
                                <span>Total Revenue</span>

                                <div className="stat-card-icon">
                                    ₹
                                </div>
                            </div>

                            <h2>
                                ₹12.8L
                            </h2>

                            <p>
                                <b>+8.7%</b> from last month
                            </p>

                        </div>

                        <div className="admin-stat-card purple">

                            <div className="stat-card-top">
                                <span>Total Recharges</span>

                                <div className="stat-card-icon">
                                    ↻
                                </div>
                            </div>

                            <h2>
                                18,420
                            </h2>

                            <p>
                                <b>+14.2%</b> from last month
                            </p>

                        </div>

                        <div className="admin-stat-card green">

                            <div className="stat-card-top">
                                <span>Success Rate</span>

                                <div className="stat-card-icon">
                                    ✓
                                </div>
                            </div>

                            <h2>
                                98.7%
                            </h2>

                            <p>
                                <b>{successfulRecharges}</b>{" "}
                                successful records
                            </p>

                        </div>

                    </section>

                    {/* CHART + SUMMARY */}

                    <section className="admin-middle-grid">

                        {/* CHART */}

                        <div className="admin-panel chart-panel">

                            <div className="panel-header">

                                <div>
                                    <h2>Recharge Overview</h2>

                                    <p>
                                        Monthly recharge activity
                                    </p>
                                </div>

                                <select>
                                    <option>2026</option>
                                    <option>2025</option>
                                </select>

                            </div>

                            <div className="chart">

                                <div className="chart-y">
                                    <span>20K</span>
                                    <span>15K</span>
                                    <span>10K</span>
                                    <span>5K</span>
                                    <span>0</span>
                                </div>

                                <div className="chart-area">

                                    <div className="chart-grid-line one"></div>
                                    <div className="chart-grid-line two"></div>
                                    <div className="chart-grid-line three"></div>
                                    <div className="chart-grid-line four"></div>

                                    <div className="bars">

                                        <div
                                            className="bar"
                                            style={{ height: "45%" }}
                                        >
                                            <span>Jan</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "62%" }}
                                        >
                                            <span>Feb</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "40%" }}
                                        >
                                            <span>Mar</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "72%" }}
                                        >
                                            <span>Apr</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "58%" }}
                                        >
                                            <span>May</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "82%" }}
                                        >
                                            <span>Jun</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "70%" }}
                                        >
                                            <span>Jul</span>
                                        </div>

                                        <div
                                            className="bar"
                                            style={{ height: "91%" }}
                                        >
                                            <span>Aug</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* QUICK SUMMARY */}

                        <div className="admin-panel summary-panel">

                            <div className="panel-header">

                                <div>
                                    <h2>Recharge Status</h2>
                                    <p>Current overview</p>
                                </div>

                            </div>

                            <div className="status-circle">

                                <div>
                                    <strong>
                                        98.7%
                                    </strong>

                                    <small>
                                        Success
                                    </small>
                                </div>

                            </div>

                            <div className="status-list">

                                <div>
                                    <span>
                                        <i className="success-dot"></i>
                                        Successful
                                    </span>

                                    <b>
                                        {successfulRecharges}
                                    </b>
                                </div>

                                <div>
                                    <span>
                                        <i className="failed-dot"></i>
                                        Failed
                                    </span>

                                    <b>
                                        {failedRecharges}
                                    </b>
                                </div>

                                <div>
                                    <span>
                                        <i className="pending-dot"></i>
                                        Active Users
                                    </span>

                                    <b>
                                        {activeUsers}
                                    </b>
                                </div>

                            </div>

                        </div>

                    </section>

                    {/* =========================
              ADD USER
          ========================= */}

                    <section className="admin-panel add-user-panel">

                        <div className="panel-header">

                            <div>
                                <h2>Add New User</h2>

                                <p>
                                    Create a new recharge account
                                </p>
                            </div>

                        </div>

                        <div className="add-user-form">

                            <input
                                type="text"
                                placeholder="Username"
                                value={newUser.username}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        username: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={newUser.email}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        email: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Mobile"
                                value={newUser.mobile}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        mobile: e.target.value,
                                    })
                                }
                            />

                            <select
                                value={newUser.rechargetype}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        rechargetype: e.target.value,
                                    })
                                }
                            >
                                <option value="personal">
                                    Personal
                                </option>

                                <option value="business">
                                    Business
                                </option>
                            </select>

                            <select
                                value={newUser.operator}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        operator: e.target.value,
                                    })
                                }
                            >
                                <option value="airtel">Airtel</option>
                                <option value="jio">Jio</option>
                                <option value="vi">Vi</option>
                                <option value="bsnl">BSNL</option>
                            </select>

                            <select
                                value={newUser.role}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        role: e.target.value,
                                    })
                                }
                            >
                                <option value="client">
                                    Client
                                </option>

                                <option value="admin">
                                    Admin
                                </option>
                            </select>

                            <button
                                className="add-user-btn"
                                onClick={handleAddUser}
                            >
                                + Add User
                            </button>

                        </div>

                    </section>

                    {/* =========================
              USERS TABLE
          ========================= */}

                    <section className="admin-panel users-panel">

                        <div className="panel-header users-panel-header">

                            <div>
                                <h2>User Management</h2>

                                <p>
                                    Manage all registered users
                                </p>
                            </div>

                            <span className="user-count">
                                {filteredUsers.length} Users
                            </span>

                        </div>

                        <div className="table-wrapper">

                            <table className="admin-users-table">

                                <thead>

                                    <tr>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Recharge Type</th>
                                        <th>Mobile</th>
                                        <th>ID Type</th>
                                        <th>Operator</th>
                                        <th>Status</th>
                                        <th>Recharge</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {paginatedUsers.map((user) => (

                                        <tr key={user.id}>

                                            <td>

                                                <div className="table-user">

                                                    <div className="table-avatar">
                                                        {user.username
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                    </div>

                                                    <input
                                                        value={user.username}
                                                        onChange={(e) =>
                                                            handleEdit(
                                                                user.id,
                                                                "username",
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                </div>

                                            </td>

                                            <td>

                                                <input
                                                    value={user.email}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </td>

                                            <td>

                                                <select
                                                    value={user.rechargetype}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "rechargetype",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="personal">
                                                        Personal
                                                    </option>

                                                    <option value="business">
                                                        Business
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <input
                                                    value={user.mobile}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "mobile",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </td>

                                            <td>

                                                <select
                                                    value={user.idtype}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "idtype",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="aadhar">
                                                        Aadhar
                                                    </option>

                                                    <option value="pencard">
                                                        PAN Card
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <select
                                                    value={user.operator}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "operator",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="airtel">
                                                        Airtel
                                                    </option>

                                                    <option value="jio">
                                                        Jio
                                                    </option>

                                                    <option value="vi">
                                                        Vi
                                                    </option>

                                                    <option value="bsnl">
                                                        BSNL
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <select
                                                    value={user.status}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={
                                                        user.status === "active"
                                                            ? "status-select active"
                                                            : "status-select inactive"
                                                    }
                                                >
                                                    <option value="active">
                                                        Active
                                                    </option>

                                                    <option value="non-active">
                                                        Inactive
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <select
                                                    value={user.rechargestatus}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "rechargestatus",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={
                                                        user.rechargestatus ===
                                                            "successed"
                                                            ? "status-select active"
                                                            : "status-select inactive"
                                                    }
                                                >
                                                    <option value="successed">
                                                        Success
                                                    </option>

                                                    <option value="failed">
                                                        Failed
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <select
                                                    value={user.role}
                                                    onChange={(e) =>
                                                        handleEdit(
                                                            user.id,
                                                            "role",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="client">
                                                        Client
                                                    </option>

                                                    <option value="admin">
                                                        Admin
                                                    </option>

                                                </select>

                                            </td>

                                            <td>

                                                <button
                                                    className="delete-user-btn"
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                    {paginatedUsers.length === 0 && (

                                        <tr>

                                            <td
                                                colSpan="10"
                                                className="empty-table"
                                            >
                                                No users found.
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                        {/* PAGINATION */}

                        <div className="pagination">

                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage(
                                        (page) => page - 1
                                    )
                                }
                            >
                                ← Previous
                            </button>

                            {Array.from(
                                { length: totalPages },
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={
                                            currentPage === index + 1
                                                ? "page-active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setCurrentPage(index + 1)
                                        }
                                    >
                                        {index + 1}
                                    </button>
                                )
                            )}

                            <button
                                disabled={
                                    currentPage === totalPages
                                }
                                onClick={() =>
                                    setCurrentPage(
                                        (page) => page + 1
                                    )
                                }
                            >
                                Next →
                            </button>

                        </div>

                    </section>

                </div>

            </main>

        </div>
    );
}
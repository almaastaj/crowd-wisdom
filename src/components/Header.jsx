import React from "react";
import Logo from "../assets/logo.png";
function Header({ showForm, setShowForm }) {
    const appTitle = "Crowd Wisdom";
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Crowd Wisdom Logo" />
                <h1>{appTitle}</h1>
            </div>
            <button
                className="btn btn-large btn-open"
                onClick={() => setShowForm((show) => !show)}
                title={showForm ? "Close " : "Share a fact"}
            >
                {showForm ? "close " : "Share a fact"}
            </button>
        </header>
    );
}

export default Header;

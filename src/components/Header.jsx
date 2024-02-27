import React from "react";

function Header({ showForm, setShowForm }) {
    const appTitle = "Today I Learned!";
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Today i learned logo" />
                <h1>{appTitle}</h1>
            </div>
            <button
                className="btn btn-large btn-open"
                onClick={() => setShowForm((show) => !show)}
            >
                {showForm ? "close " : "Share a fact"}
            </button>
        </header>
    );
}

export default Header;

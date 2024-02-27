import React from "react";

function CategoryFilter({ setCurrentCategory }) {
    const CATEGORIES = [
        { name: "technology", color: "#3b82f6" },
        { name: "science", color: "#16a34a" },
        { name: "finance", color: "#ef4444" },
        { name: "society", color: "#eab308" },
        { name: "entertainment", color: "#db2777" },
        { name: "health", color: "#14b8a6" },
        { name: "history", color: "#f97316" },
        { name: "news", color: "#8b5cf6" },
    ];

    return (
        <aside>
            <ul>
                <li className="category">
                    <button
                        className="btn btn-all-categories"
                        onClick={() => setCurrentCategory("all")}
                    >
                        All
                    </button>
                </li>
                {CATEGORIES.map((cat) => (
                    <li key={cat.name} className="category">
                        <button
                            className="btn btn-category"
                            style={{ backgroundColor: cat.color }}
                            onClick={() => setCurrentCategory(cat.name)}
                        >
                            {cat.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default CategoryFilter;

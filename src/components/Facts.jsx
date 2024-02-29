import React from "react";
import { useState } from "react";
import supabase from "../supabase/supabase.js";

function Facts({ factObj, setFacts }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const isDisputed =
        factObj.votesMindblowing + factObj.votesInteresting <
        factObj.votesFalse;

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

    async function handleVote(columnName) {
        setIsUpdating(true);
        const { data: updatedFact, error } = await supabase
            .from("facts")
            .update({ [columnName]: factObj[columnName] + 1 })
            .eq("id", factObj.id)
            .select();
        setIsUpdating(false);
        if (!error)
            setFacts((facts) =>
                facts.map((f) => (f.id === factObj.id ? updatedFact[0] : f)),
            );
    }

    return (
        <li className="fact">
            <p>
                {isDisputed ? (
                    <span className="disputed">[⛔️ DISPUTED]</span>
                ) : null}
                {factObj.text}
                <a
                    className="source"
                    href={factObj.source}
                    target="_blank"
                    rel="noreferrer"
                >
                    (Source)
                </a>
            </p>
            <span
                className="tag"
                style={{
                    backgroundColor: CATEGORIES.find(
                        (cat) => factObj.category === cat.name,
                    ).color,
                }}
            >
                {factObj.category}
            </span>
            <div className="vote-buttons">
                <button
                    onClick={() => handleVote("votesInteresting")}
                    disabled={isUpdating}
                    title="Interesting Fact"
                >
                    👍 {factObj.votesInteresting}
                </button>
                <button
                    onClick={() => handleVote("votesMindblowing")}
                    disabled={isUpdating}
                    title="Mind Blowing Fact"
                >
                    🤯 {factObj.votesMindblowing}
                </button>
                <button
                    onClick={() => handleVote("votesFalse")}
                    disabled={isUpdating}
                    title="False Fact"
                >
                    ⛔️ {factObj.votesFalse}
                </button>
            </div>
        </li>
    );
}

export default Facts;

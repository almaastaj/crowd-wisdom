import React from "react";
import { useState } from "react";
import { IsValidHttpUrl } from "../util.js";
import supabase from "../supabase/supabase.js";

function NewFactForm({ setFacts, setShowForm }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [category, setCategory] = useState("");
    const textLength = text.length;

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

    async function HandleSubmit(e) {
        //1. Prevent browser reload
        e.preventDefault();
        //2. Check if data is valid. If so, create a new fact
        if (text && IsValidHttpUrl(source) && category && textLength <= 200) {
            //3. Create a new Fact
            // const newFact = {
            //   id: Math.round(Math.random() * 1000),
            //   text,
            //   source,
            //   category,
            //   votesInteresting: 0,
            //   votesMindblowing: 0,
            //   votesFalse: 0,
            //   createdIn: new Date().getFullYear(),
            // };
            // Upload fact to supabase and recieve fact object
            setIsUploading(true);
            const { data: newFact, error } = await supabase
                .from("facts")
                .insert([{ text, source, category }])
                .select();
            setIsUploading(false);
            //4. Add the new fact to the UI: add the fact to state
            if (!error) setFacts((facts) => [newFact[0], ...facts]);

            // 5. Reset the input fields
            setText("");
            setSource("");
            setCategory("");

            //6. Close the form
            setShowForm(false);
        }
    }

    return (
        <form className="fact-form" onSubmit={HandleSubmit}>
            <input
                type="text"
                placeholder="Share a fact with world..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <span>{200 - textLength}</span>
            <input
                type="text"
                placeholder="Trustworthy source..."
                value={source}
                onChange={(e) => setSource(e.target.value)}
                disabled={isUploading}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isUploading}
            >
                <option value="">Choose category:</option>
                {CATEGORIES.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                        {cat.name.toUpperCase()}
                    </option>
                ))}
                ;
            </select>
            <button className="btn btn-large" disabled={isUploading}>
                post
            </button>
        </form>
    );
}

export default NewFactForm;

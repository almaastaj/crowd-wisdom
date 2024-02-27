import React from "react";

function Facts({ factObj, setFacts }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const isDisputed =
        factObj.votesMindblowing + factObj.votesInteresting <
        factObj.votesFalse;
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
                >
                    👍 {factObj.votesInteresting}
                </button>
                <button
                    onClick={() => handleVote("votesMindblowing")}
                    disabled={isUpdating}
                >
                    🤯 {factObj.votesMindblowing}
                </button>
                <button
                    onClick={() => handleVote("votesFalse")}
                    disabled={isUpdating}
                >
                    ⛔️ {factObj.votesFalse}
                </button>
            </div>
        </li>
    );
}

export default Facts;

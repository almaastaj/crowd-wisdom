import React from "react";
import Facts from "./Facts";

function FactList({ facts, setFacts }) {
    //Temporrary Variable
    if (facts.length === 0)
        return (
            <p className="message">
                No Facts for this category yet. Try to create the first one 😊
            </p>
        );
    return (
        <section>
            <ul className="facts-list">
                {facts.map((fact) => (
                    <Facts key={fact.id} factObj={fact} setFacts={setFacts} />
                ))}
            </ul>
            <p>
                There are {facts.length} facts in the database. Add your own!{" "}
            </p>
        </section>
    );
}

export default FactList;

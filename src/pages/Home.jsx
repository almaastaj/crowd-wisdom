import React from "react";

function Home() {
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("all");
    useEffect(
        function () {
            async function getFacts() {
                setIsLoading(true);
                let query = supabase.from("facts").select("*");
                if (currentCategory !== "all")
                    query = query.eq("category", currentCategory);
                const { data: facts, error } = await query
                    .order("votesInteresting", { ascending: false })
                    .limit(1000);
                if (!error) setFacts(facts);
                else alert("there is some error");
                setIsLoading(false);
            }
            getFacts();
        },
        [currentCategory],
    );

    return (
        <>
            {/* HEADER */}
            <Header showForm={showForm} setShowForm={setShowForm} />

            {showForm ? (
                <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
            ) : null}

            <main className="main">
                <CategoryFilter setCurrentCategory={setCurrentCategory} />
                {isLoading ? (
                    <Loader />
                ) : (
                    <FactList facts={facts} setFacts={setFacts} />
                )}
            </main>
        </>
    );
}

export default Home;

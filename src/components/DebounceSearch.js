import { useEffect, useState } from "react";

export default function SearchWithDebounce() {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    // Debounce effect
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500); // debounce delay (ms)

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    // Trigger search when debouncedQuery changes
    useEffect(() => {
        if (!debouncedQuery) return;

        console.log("Searching for:", debouncedQuery);
        {/*fetch(`/api/search?q=${debouncedQuery}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });*/}
    }, [debouncedQuery]);


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>Search While Typing</h1>
            <input style={{ padding: "10px", margin: "10px", width: "150px" }}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}
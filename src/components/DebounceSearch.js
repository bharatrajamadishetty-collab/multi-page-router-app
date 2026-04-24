import { useEffect, useState } from "react";

export default function SearchWithDebounce() {
    const [users, setUsers] = useState([]);
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
        fetch(`http://localhost:8080/v1/search?userName=${debouncedQuery}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            });
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
            {users.map((user, index) => (
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ccc", padding: "8px" }}>User ID</th>
                            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Username</th>
                            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Expires At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.userId ?? index}>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.userId}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.userName}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.expiresAt}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}
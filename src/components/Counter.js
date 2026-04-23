import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>Counter Page</h1>
            <h2>{count}</h2>
            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
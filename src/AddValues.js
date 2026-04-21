import { useState } from "react";

function AddValues() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Add Values</h1>
      <input type="number" value={num1} placeholder="Enter first number" onChange={n1 => setNum1(n1.target.value)} />
      <input type="number" value={num2} placeholder="Enter second number" onChange={n2 => setNum2(n2.target.value)} />
      <h2>Sum: {Number(num1) + Number(num2)}</h2>
    </div>
  );
}

export default AddValues;
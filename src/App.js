import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddValues from "./AddValues";
import Counter from "./Counter";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", gap: "10px", display: "flex" }}>
        <Link to="/">Counter</Link>
        <Link to="/add">Add Values</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/add" element={<AddValues />} />
      </Routes>
    </Router>
  );
}

export default App;
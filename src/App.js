import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddValues from "./components/AddValues";
import Counter from "./components/Counter";
import ModalPopup from "./components/ModalPopup";
import StarRating from "./components/StarRating";
import ThemeToggle from "./components/ThemeToggle";
import CountDownTimer from "./components/CountDownTimer";
import FormBuilder from "./components/FormBuilder";
import ProgressBar from "./components/ProgressBar";
import DebounceSearch from "./components/DebounceSearch";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", gap: "10px", display: "flex" }}>
        <Link to="/">Counter</Link>
        <Link to="/add">Add Values</Link>
        <Link to="/star">Star Rating</Link>
        <Link to="/popup">Modal Popup</Link>
        <Link to="/theme">Theme Change</Link>
        <Link to="/countdown">Countdown Timer</Link>
        <Link to="/form">Form Builder</Link>
        <Link to="/progress">Progress Bar</Link>
        <Link to="/debounce">Debounce Search</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="/add" element={<AddValues/>} />
        <Route path="/star" element={<StarRating/>} />
        <Route path="/popup" element={<ModalPopup/>} />
        <Route path="/theme" element={<ThemeToggle/>} />
        <Route path="/countdown" element={<CountDownTimer/>} />
        <Route path="/form" element={<FormBuilder/>} />
        <Route path="/progress" element={<ProgressBar/>} />
        <Route path="/debounce" element={<DebounceSearch/>} />
      </Routes>
    </Router>
  );
}

export default App;
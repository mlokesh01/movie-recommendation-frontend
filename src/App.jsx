import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Results from "./pages/Results";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter/:industry" element={<Filter />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}
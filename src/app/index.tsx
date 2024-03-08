import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";

/**
 * Composant racine de l'application.
 * Ce composant gère le routage des différentes pages de l'application.
 * @returns {JSX.Element} L'élément racine de l'application.
 */
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}
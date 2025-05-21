// src/comparatie-piloti/ComparatiePiloti.jsx
import "./ComparatiePiloti.css";
import { Link } from "react-router-dom";

export default function ComparatiePiloti() {
  return (
    <div className="comparatie-container">
      {/* Header */}
      <header className="header">
        <h1>COMPARATIE PILOTI</h1>
      </header>

      {/* Plus-uri */}
      <div className="plus-wrapper">
        <div className="plus-box">+</div>
        <div className="plus-box">+</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Link to="/" className="footer-button">
          PAGINA PRINCIPALA
        </Link>
        <button className="footer-button">CLASAMENTE TRECUTE</button>
      </footer>
    </div>
  );
}

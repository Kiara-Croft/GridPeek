import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, History, Star, Home } from "lucide-react";
import { useFavoriteTeam } from "../FavoriteTeamContext/FavoriteTeamContext"; // nou: context echipa favorită
import "./PaginaPrincipala.css";

export default function PaginaPrincipala() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { team, setTeam, teams } = useFavoriteTeam(); // nou: hook context echipe

  const teamStyles = {
    "Red Bull": { color: "#4570C0" },
    Ferrari: { color: "#D52E37" },
    Mercedes: { color: "#75F0D3" },
    McLaren: { color: "#f47600" },
    Haas: { color: "#9c9fa2" },
    Alpine: { color: "#00a1e8" },
    Williams: { color: "#1868db" },
    "Kick Sauber": { color: "#01c00e" },
    "Racing Bulls": { color: "#6c98ff" },
    "Aston Martin": { color: "#229971" },
  };

  const favoriteColor = teamStyles[team]?.color || "#d32f2f"; // fallback: roșu standard

  return (
    <div className="container">
      {/* Header */}
      <header className="header" style={{ backgroundColor: favoriteColor }}>
        <h1>RACE RESULTS</h1>
      </header>

      <section className="info-cursa">
        <span className="info-item">LOCATIE</span>
        <span className="info-item">TIPUL DE SESIUNE</span>
        <span className="info-item">TURURI PARCURSE/TURURI</span>
      </section>

      {/* Tabel */}
      <table className="tabel-cursa">
        <thead>
          <tr>
            <th>Pozitie</th>
            <th>Nume</th>
            <th>Timp</th>
            <th>Puncte</th>
          </tr>
        </thead>

        <tbody>
          {[...Array(20)].map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td></td>
              <td></td>
              <td>{[25, 18, 15, 12, 10, 8, 6, 4, 2, 1][index] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Meniu jos */}
      <footer className="meniu-jos" style={{ backgroundColor: favoriteColor }}>
        <div
          style={{
            display: "inline-block",
            marginRight: "8px",
            borderBottom: "3px solid #ffffff",
            paddingBottom: "1px",
            marginBottom: "1px",
          }}
        >
          <Home size={20} style={{ color: "#ffffff" }} />
        </div>

        <Link
          to="/comparatie"
          state={{ reset: true }}
          className="footer-button"
        >
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/istoric" className="footer-button">
          <History size={20} style={{ marginRight: "8px" }} />
        </Link>

        {/* e noua bucata: dropdown echipă favorită */}
        <div style={{ position: "relative" }}>
          <button
            className="footer-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Star size={20} style={{ marginRight: "8px" }} />
          </button>

          {showDropdown && (
            <div className="dropdown-echipe">
              {teams.map((t) => (
                <div
                  key={t}
                  className="echipa-item"
                  onClick={() => {
                    setTeam(t);
                    setShowDropdown(false);
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Users, Home, History } from "lucide-react";
import styles from "./locatie.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function Locatie() {
  //  culoarea temei
  const { team } = useFavoriteTeam();
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
    <div className={styles.container}>
      {/* colorăm header */}
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTUL PE ZONE</h1>
      </header>
      <div className={styles["glass-box"]}>
        {/* Tabel */}
        <table className={styles.tabelCursa}>
          <thead>
            <tr>
              <th>Pozitie</th>
              <th>Nume</th>
              <th>Timp</th>
              <th>Puncte</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(20)].map((_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td></td>
                <td></td>
                <td>{[25, 18, 15, 12, 10, 8, 6, 4, 2, 1][i] || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  colorăm footer */}
      <footer
        className={styles.footer}
        style={{ backgroundColor: favoriteColor }}
      >
        <div
          style={{
            display: "inline-block",
            marginRight: "8px",
            borderBottom: "3px solid #ffffff",
            paddingBottom: "1px",
            marginBottom: "1px",
          }}
        >
          <History size={20} style={{ color: "#ffffff" }} />
        </div>

        <Link to="/" className={styles["footer-button"]}>
          <Home size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/comparatie" className={styles["footer-button"]}>
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>
      </footer>
    </div>
  );
}

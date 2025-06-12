import { useLocation, Link } from "react-router-dom";
import { Users, Home, History } from "lucide-react";
import styles from "./pilot.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext"; //

export default function Pilot() {
  const location = useLocation();
  const an = location.state?.an || "NECUNOSCUT";
  const pilot = location.state?.pilot || "NECUNOSCUT";

  //  Tema bazată pe echipa favorită
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

  // Date hardcodate temporar (vor fi din API)
  const curse = [];

  return (
    <div className={styles.container}>
      {/* colorăm header */}
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTE TRECUTE</h1>
      </header>

      <section className={styles.info}>
        <div>
          <strong>AN ALES:</strong> {an}
        </div>
        <div>
          <strong>PILOT:</strong> {pilot.toUpperCase()}
        </div>
      </section>

      <table className={styles.tabel}>
        <thead>
          <tr>
            <th>CURSA</th>
            <th>LOCUL</th>
            <th>NUMAR DE PUNCTE</th>
          </tr>
        </thead>
        <tbody>
          {curse.map((cursa, index) => (
            <tr key={index}>
              <td>{cursa.nume}</td>
              <td>{cursa.loc}</td>
              <td>{cursa.puncte}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* colorăm footer */}
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

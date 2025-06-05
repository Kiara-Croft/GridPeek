import { Link } from "react-router-dom";
import { Users, Home } from "lucide-react";
import styles from "./locatie.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function Locatie() {
  //  culoarea temei
  const { team } = useFavoriteTeam();
  const teamStyles = {
    "Red Bull": { color: "#4570C0" },
    Ferrari: { color: "#D52E37" },
    Mercedes: { color: "#75F0D3" },
    McLaren: { color: "#FF8700" },
    Haas: { color: "#555555" },
    "Aston Martin": { color: "#006F62" },
  };
  const favoriteColor = teamStyles[team]?.color || "#d32f2f";

  return (
    <div className={styles.container}>
      {/* colorăm header */}
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTUL PE ZONE</h1>
      </header>

      <section className={styles.infoCursa}>
        <span className={styles.infoItem}>miami</span>
        <span className={styles.infoItem}>cursa</span>
        <span className={styles.infoItem}>12/57</span>
      </section>

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

      {/*  colorăm footer */}
      <footer
        className={styles.footer}
        style={{ backgroundColor: favoriteColor }}
      >
        <Link to="/" className={styles.footerButton}>
          <Home size={20} style={{ marginRight: "8px" }} />
        </Link>
        <Link to="/comparatie" className={styles.footerButton}>
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>
      </footer>
    </div>
  );
}

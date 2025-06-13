import { useLocation, Link } from "react-router-dom";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";
import { Home, History, Trash, Users } from "lucide-react";
import styles from "./ComparatieDetalii.module.css";

export default function ComparatieDetalii() {
  const location = useLocation();
  const { pilot1, pilot2 } = location.state || {};

  //  obținem culoarea temei
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
    <div className={styles["comparatie-container"]}>
      {/*  colorăm header */}
      <header
        className={styles["header"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1 className={styles["h1"]}> COMPARATIE PILOTI</h1>
      </header>

      <div className={styles["glass-box"]}>
        <div className={styles["pilot-info-wrapper"]}>
          {/* Poza pilot 1 */}
          <div className={styles["pilot-poza-wrapper"]}>
            <img
              src={pilot1.poza}
              alt={pilot1.nume}
              className={styles["pilot-poza"]}
            />
          </div>

          {/* Info pilot 1 */}
          <div className={styles["pilot-info"]}>
            <p>
              <strong>NUME:</strong>
            </p>
            <p>{pilot1.nume}</p>
            <p>
              <strong>ECHIPA:</strong>
            </p>
            <p>Echipa X</p>
            <p>
              <strong>SEZOANE:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>CURSE:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>PODIUMURI:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>WINS:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>CAMPIONATE:</strong>
            </p>
            <p>-</p>
          </div>

          {/* Info pilot 2 */}
          <div className={styles["pilot-info"]}>
            <p>
              <strong>NUME:</strong>
            </p>
            <p>{pilot2.nume}</p>
            <p>
              <strong>ECHIPA:</strong>
            </p>
            <p>Echipa Y</p>
            <p>
              <strong>SEZOANE:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>CURSE:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>PODIUMURI:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>WINS:</strong>
            </p>
            <p>-</p>
            <p>
              <strong>CAMPIONATE:</strong>
            </p>
            <p>-</p>
          </div>

          {/* Poza pilot 2 */}
          <div className={styles["pilot-poza-wrapper"]}>
            <img
              src={pilot2.poza}
              alt={pilot2.nume}
              className={styles["pilot-poza"]}
            />
          </div>
        </div>
      </div>

      {/* colorăm footer */}
      <footer
        className={styles["footer"]}
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
          <Users size={20} style={{ color: "#ffffff" }} />
        </div>

        <Link to="/" className={styles["footer-button"]}>
          <Home size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/istoric" className={styles["footer-button"]}>
          <History size={20} style={{ marginRight: "8px" }} />
        </Link>
      </footer>
    </div>
  );
}

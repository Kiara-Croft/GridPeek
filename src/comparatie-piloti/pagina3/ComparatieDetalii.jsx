import { useLocation, Link } from "react-router-dom";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";
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
    McLaren: { color: "#FF8700" },
    Haas: { color: "#555555" },
    "Aston Martin": { color: "#006F62" },
  };
  const favoriteColor = teamStyles[team]?.color || "#d32f2f";

  return (
    <div className={styles["comparatie-container"]}>
      {/*  colorăm header */}
      <header
        className={styles["header"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>COMPARATIE PILOTI</h1>
      </header>

      <div className={styles["pilot-info-wrapper"]}>
        {[pilot1, pilot2].map((pilot, index) => (
          <div key={index} className={styles["pilot-card"]}>
            {pilot && (
              <>
                <img
                  src={pilot.poza}
                  alt={pilot.nume}
                  className={styles["pilot-poza"]}
                />
                <p>
                  <strong>NUME:</strong>
                </p>
                <p>{pilot.nume}</p>

                <p>
                  <strong>ECHIPA:</strong>
                </p>
                <p>Echipa X</p>

                <p>
                  <strong>NR DE SEZOANE:</strong>
                </p>
                <p>-</p>

                <p>
                  <strong>NR DE CURSE:</strong>
                </p>
                <p>-</p>

                <p>
                  <strong>NR DE PODIUMURI:</strong>
                </p>
                <p>-</p>

                <p>
                  <strong>CURSE CASTIGATE:</strong>
                </p>
                <p>-</p>

                <p>
                  <strong>CAMPIONATE:</strong>
                </p>
                <p>-</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* colorăm footer */}
      <footer
        className={styles["footer"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <Link to="/" className={styles["footer-button"]}>
          PAGINA PRINCIPALA
        </Link>
        <button className={styles["footer-button"]}>CLASAMENTE TRECUTE</button>
      </footer>
    </div>
  );
}

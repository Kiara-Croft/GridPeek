import { useLocation, Link } from "react-router-dom";
import styles from "./ComparatieDetalii.module.css";

export default function ComparatieDetalii() {
  const location = useLocation();
  const { pilot1, pilot2 } = location.state || {};

  return (
    <div className={styles["comparatie-container"]}>
      <header className={styles["header"]}>
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

                <p>
                  <strong>NR DE CURSE:</strong>
                </p>

                <p>
                  <strong>NR DE PODIUMURI:</strong>
                </p>

                <p>
                  <strong>CURSE CASTIGATE:</strong>
                </p>

                <p>
                  <strong>CAMPIONATE:</strong>
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      <footer className={styles["footer"]}>
        <Link to="/" className={styles["footer-button"]}>
          PAGINA PRINCIPALA
        </Link>
        <button className={styles["footer-button"]}>CLASAMENTE TRECUTE</button>
      </footer>
    </div>
  );
}

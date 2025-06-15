import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";
import { Home, History, Users } from "lucide-react";
import styles from "./ComparatieDetalii.module.css";

export default function ComparatieDetalii() {
  const location = useLocation();
  const { pilot1, pilot2 } = location.state || {};
  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obținem culoarea temei (păstrăm exact din codul original)
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

  const favoriteColor = teamStyles[team]?.color || "#d32f2f";

  // Păstrăm exact API-ul de la ChatGPT fără modificări
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch("https://api.jolpi.ca/ergast/f1/2025/drivers");
      const data = await res.json();
      const drivers = data.MRData.DriverTable.Drivers;
      setD1(drivers.find((d) => d.driverId === pilot1.id));
      setD2(drivers.find((d) => d.driverId === pilot2.id));
      setLoading(false);
    };
    getData();
  }, [pilot1.id, pilot2.id]);

  if (loading)
    return (
      <div className={styles["loading-message"]}>Se încarcă datele...</div>
    );
  if (!d1 || !d2)
    return (
      <div className={styles["error-message"]}>Nu s-au găsit pilotii.</div>
    );

  // Păstrăm structura și designul din codul original
  return (
    <div className={styles["comparatie-container"]}>
      {/* Header-ul din codul original */}
      <header
        className={styles["header"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1 className={styles["h1"]}>COMPARATIE PILOTI</h1>
      </header>

      <div className={styles["glass-box"]}>
        <div className={styles["pilot-info-wrapper"]}>
          {/* Poza pilot 1 - din codul original */}
          <div className={styles["pilot-poza-wrapper"]}>
            <img
              src={pilot1.poza}
              alt={pilot1.nume}
              className={styles["pilot-poza"]}
            />
          </div>

          {/* Info pilot 1 - combinăm datele din API cu structura originală */}
          <div className={styles["pilot-info"]}>
            <p>
              <strong>NUME:</strong> {pilot1.nume}
            </p>
            <p>
              <strong>ECHIPA:</strong> {pilot1.echipa || "Echipa X"}
            </p>
            <p>
              <strong>NUMAR:</strong> {d1.permanentNumber || "-"}
            </p>
            <p>
              <strong>COD:</strong> {d1.code || "-"}
            </p>
            <p>
              <strong>DATA NAȘTERII:</strong> {d1.dateOfBirth || "-"}
            </p>
            <p>
              <strong>NAȚIONALITATE:</strong> {d1.nationality || "-"}
            </p>
          </div>

          {/* Info pilot 2 - combinăm datele din API cu structura originală */}
          <div className={styles["pilot-info"]}>
            <p>
              <strong>NUME:</strong> {pilot2.nume}
            </p>
            <p>
              <strong>ECHIPA:</strong> {pilot2.echipa || "Echipa Y"}
            </p>
            <p>
              <strong>NUMAR:</strong> {d2.permanentNumber || "-"}
            </p>
            <p>
              <strong>COD:</strong> {d2.code || "-"}
            </p>
            <p>
              <strong>DATA NAȘTERII:</strong> {d2.dateOfBirth || "-"}
            </p>
            <p>
              <strong>NAȚIONALITATE:</strong> {d2.nationality || "-"}
            </p>
          </div>

          {/* Poza pilot 2 - din codul original */}
          <div className={styles["pilot-poza-wrapper"]}>
            <img
              src={pilot2.poza}
              alt={pilot2.nume}
              className={styles["pilot-poza"]}
            />
          </div>
        </div>
      </div>

      {/* Footer-ul exact din codul original */}
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

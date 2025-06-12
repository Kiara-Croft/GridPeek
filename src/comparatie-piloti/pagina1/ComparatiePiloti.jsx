import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ComparatiePiloti.module.css";
import { Home, History, Trash, Users } from "lucide-react";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function ComparatiePiloti() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pilot1, setPilot1] = useState(null);
  const [pilot2, setPilot2] = useState(null);

  // Tema echipă favorită
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

  const favoriteColor = teamStyles[team]?.color || "#d32f2f"; // fallback: roșu standardf";

  // Resetare la venire din pagina principală
  useEffect(() => {
    if (location.state?.reset) {
      sessionStorage.removeItem("pilotLeft");
      sessionStorage.removeItem("pilotRight");
      setPilot1(null);
      setPilot2(null);
    } else {
      const storedPilot1 = sessionStorage.getItem("pilotLeft");
      const storedPilot2 = sessionStorage.getItem("pilotRight");
      if (storedPilot1) setPilot1(JSON.parse(storedPilot1));
      if (storedPilot2) setPilot2(JSON.parse(storedPilot2));
    }
  }, []);

  // Salvăm pilotul ales din pagina2
  useEffect(() => {
    if (location.state?.pilot && location.state?.slot) {
      const selected = location.state.pilot;

      if (location.state.slot === "left") {
        setPilot1(selected);
        sessionStorage.setItem("pilotLeft", JSON.stringify(selected));
      } else if (location.state.slot === "right") {
        setPilot2(selected);
        sessionStorage.setItem("pilotRight", JSON.stringify(selected));
      }
    }
  }, [location]);

  // Reset manual
  const handleReset = () => {
    sessionStorage.removeItem("pilotLeft");
    sessionStorage.removeItem("pilotRight");
    setPilot1(null);
    setPilot2(null);
  };

  // Trimite către pagina3
  const handleCompara = () => {
    navigate("/pagina3", {
      state: { pilot1, pilot2 },
    });
  };

  return (
    <div className={styles["comparatie-container"]}>
      <header
        className={styles["header"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>COMPARATIE PILOTI</h1>
      </header>

      <div className={styles["plus-wrapper"]}>
        {pilot1 ? (
          <div className={styles["pilot-box"]}>
            <img
              src={pilot1.poza}
              alt={pilot1.nume}
              className={styles["pilot-poza"]}
            />
            <p>{pilot1.nume}</p>
          </div>
        ) : (
          <Link
            to="/pagina2"
            state={{ slot: "left" }}
            className={styles["plus-box"]}
          >
            +
          </Link>
        )}

        {pilot2 ? (
          <div className={styles["pilot-box"]}>
            <img
              src={pilot2.poza}
              alt={pilot2.nume}
              className={styles["pilot-poza"]}
            />
            <p>{pilot2.nume}</p>
          </div>
        ) : (
          <Link
            to="/pagina2"
            state={{ slot: "right" }}
            className={styles["plus-box"]}
          >
            +
          </Link>
        )}
      </div>

      <div className={styles["extra-buttons"]}>
        <button className={styles["reset-button"]} onClick={handleReset}>
          <Trash size={20} style={{ marginRight: "8px" }} />
        </button>

        <button
          className={styles["compara-button"]}
          onClick={handleCompara}
          disabled={!pilot1 || !pilot2}
        >
          Compară
        </button>
      </div>

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

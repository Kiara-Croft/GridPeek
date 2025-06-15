import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, Home, History } from "lucide-react";
import styles from "./selectare.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function Selectare() {
  const navigate = useNavigate();

  //  context echipă + culoare
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
  // State pentru zona
  const [anZona, setAnZona] = useState("");
  const [circuit, setCircuit] = useState("");

  // State pentru pilot
  const [anPilot, setAnPilot] = useState("");
  const [pilot, setPilot] = useState("");

  const trimiteLaLocatie = () => {
    if (anZona && circuit) {
      navigate("/istoric/locatie", {
        state: { an: anZona, locatie: circuit },
      });
    }
  };

  const trimiteLaPilot = () => {
    if (anPilot && pilot) {
      navigate("/istoric/pilot", {
        state: { an: anPilot, pilot: pilot },
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* colorăm header */}
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTE</h1>
      </header>

      <div className={styles.main}>
        {/* ZONE */}
        <section className={styles.section}>
          <h3 className={styles.h3}>CLASAMENT PE ZONE</h3>
          <input
            type="number"
            placeholder="Ex: 1976"
            value={anZona}
            onChange={(e) => setAnZona(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Ex: monaco"
            value={circuit}
            onChange={(e) => setCircuit(e.target.value)}
            className={styles.input}
          />
          <button onClick={trimiteLaLocatie} className={styles.sendButton}>
            CLASAMENT PE ZONE
          </button>
        </section>

        {/* PILOT */}
        <section className={styles.section}>
          <h3 className={styles.h3}>CLASAMENT PILOTI</h3>
          <input
            type="number"
            placeholder="Ex: 2010"
            value={anPilot}
            onChange={(e) => setAnPilot(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Ex: fernando alonso"
            value={pilot}
            onChange={(e) => setPilot(e.target.value)}
            className={styles.input}
          />
          <button onClick={trimiteLaPilot} className={styles.sendButton}>
            CLASAMENT PILOT
          </button>
        </section>
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

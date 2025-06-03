import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./selectare.module.css";
import { Users, Home } from "lucide-react";

export default function Selectare() {
  const navigate = useNavigate();

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
      <header className={styles.header}>
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
            placeholder="Ex: max verstappen"
            value={pilot}
            onChange={(e) => setPilot(e.target.value)}
            className={styles.input}
          />
          <button onClick={trimiteLaPilot} className={styles.sendButton}>
            CLASAMENT PILOT
          </button>
        </section>
      </div>

      <footer className={styles.footer}>
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

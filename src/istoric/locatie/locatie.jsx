import { Link } from "react-router-dom";
import styles from "./locatie.module.css";
import { Users, Home } from "lucide-react";

export default function Locatie() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
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

      {/* Footer */}
      <footer className={styles.footer}>
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

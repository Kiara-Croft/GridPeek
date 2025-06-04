import { useLocation, Link } from "react-router-dom";
import styles from "./pilot.module.css";
import { Users, Home } from "lucide-react";

export default function Pilot() {
  const location = useLocation();
  const an = location.state?.an || "NECUNOSCUT";
  const pilot = location.state?.pilot || "NECUNOSCUT";

  // Date hardcodate temporar (le înlocuim cu API mai târziu)
  const curse = [
    { nume: "Monaco", loc: 1, puncte: 25 },
    { nume: "Baku", loc: 3, puncte: 15 },
    { nume: "Spa", loc: 5, puncte: 10 },
    { nume: "Canada", loc: 2, puncte: 18 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
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

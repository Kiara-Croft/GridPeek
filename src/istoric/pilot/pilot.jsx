import { useLocation, Link } from "react-router-dom";
import { Users, Home } from "lucide-react";
import styles from "./pilot.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext"; //

export default function Pilot() {
  const location = useLocation();
  const an = location.state?.an || "NECUNOSCUT";
  const pilot = location.state?.pilot || "NECUNOSCUT";

  //  Tema bazată pe echipa favorită
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

  // Date hardcodate temporar (vor fi din API)
  const curse = [
    { nume: "Monaco", loc: 1, puncte: 25 },
    { nume: "Baku", loc: 3, puncte: 15 },
    { nume: "Spa", loc: 5, puncte: 10 },
    { nume: "Canada", loc: 2, puncte: 18 },
  ];

  return (
    <div className={styles.container}>
      {/* colorăm header */}
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
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

      {/* colorăm footer */}
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

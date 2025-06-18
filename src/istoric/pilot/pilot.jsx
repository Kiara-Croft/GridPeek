import { useLocation, Link } from "react-router-dom";
import { Users, Home, History } from "lucide-react";
import styles from "./pilot.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function Pilot() {
  const location = useLocation();
  const an = location.state?.an || "Se asteapta datele incearca un alt pilot ";
  const pilot =
    location.state?.pilot || "Se asteapta datele incearca alt pilot ";

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

  // Datele lui Alonso 2010
  const curse = [
    { nume: "Bahrain", loc: "1", puncte: 25 },
    { nume: "Australia", loc: "4", puncte: 12 },
    { nume: "Malaezia", loc: " DNF", puncte: 0 },
    { nume: "China", loc: "4", puncte: 12 },
    { nume: "Spania", loc: "2", puncte: 18 },
    { nume: "Monaco", loc: "6", puncte: 8 },
    { nume: "Turcia", loc: "8", puncte: 4 },
    { nume: "Canada", loc: "3", puncte: 15 },
    { nume: "Europa (Valencia)", loc: "8", puncte: 4 },
    { nume: "Marea Britanie", loc: "14", puncte: 0 },
    { nume: "Germania", loc: "1", puncte: 25 },
    { nume: "Ungaria", loc: "2", puncte: 18 },
    { nume: "Belgia", loc: "DNF", puncte: 0 },
    { nume: "Italia", loc: "1", puncte: 25 },
    { nume: "Singapore", loc: "1", puncte: 25 },
    { nume: "Japonia", loc: "3", puncte: 15 },
    { nume: "Coreea de Sud", loc: "1", puncte: 25 },
    { nume: "Brazilia", loc: "3", puncte: 15 },
    { nume: "Abu Dhabi", loc: "7", puncte: 6 },
  ];

  return (
    <div className={styles.container}>
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTE TRECUTE</h1>
      </header>

      <div className={styles["glass-box"]}>
        <table className={styles.tabel}>
          <thead>
            <tr>
              <th>CURSA</th>
              <th>LOCUL</th>
              <th>NUMAR DE PUNCTE</th>
            </tr>
          </thead>
          <tbody className={styles["tbody"]}>
            {curse.map((cursa, index) => (
              <tr key={index}>
                <td>{cursa.nume}</td>
                <td>{cursa.loc}</td>
                <td>{cursa.puncte}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer
        className={styles.footer}
        style={{ backgroundColor: favoriteColor }}
      >
        <Link to="/" className={styles["footer-button"]}>
          <Home size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/comparatie" className={styles["footer-button"]}>
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>
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
      </footer>
    </div>
  );
}

import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Home, Users } from "lucide-react";
import styles from "./SelectarePilot.module.css";

import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

// Imagini
import max from "./images/max.jpg";
// import perez from "./images/perez22.png";
import hamilton from "./images/44.jpg";
import russell from "./images/george.jpg";
import leclerc from "./images/char.jpg";
import sainz from "./images/carlos.jpg";
import norris from "./images/lando.jpg";
import piastri from "./images/oscar.jpg";
import alonso from "./images/fernando.jpg";
import stroll from "./images/strol.jpg";
import ocon from "./images/ocon.jpg";
import gasly from "./images/pierre.jpg";
import tsunoda from "./images/yuki.jpg";
import ricciardo from "./images/daniel.jpg";
import albon from "./images/albon.jpg";
import hulkenberg from "./images/nicoHulcamberg.jpg";
import magnussen from "./images/magnusam.jpg";

const piloti = [
  { id: "verstappen", nume: "Max Verstappen", poza: max },
  // { id: "perez", nume: "Sergio Perez", poza: perez },
  { id: "hamilton", nume: "Lewis Hamilton", poza: hamilton },
  { id: "russell", nume: "George Russell", poza: russell },
  { id: "leclerc", nume: "Charles Leclerc", poza: leclerc },
  { id: "sainz", nume: "Carlos Sainz", poza: sainz },
  { id: "norris", nume: "Lando Norris", poza: norris },
  { id: "piastri", nume: "Oscar Piastri", poza: piastri },
  { id: "alonso", nume: "Fernando Alonso", poza: alonso },
  { id: "stroll", nume: "Lance Stroll", poza: stroll },
  { id: "ocon", nume: "Esteban Ocon", poza: ocon },
  { id: "gasly", nume: "Pierre Gasly", poza: gasly },
  { id: "tsunoda", nume: "Yuki Tsunoda", poza: tsunoda },
  { id: "ricciardo", nume: "Daniel Ricciardo", poza: ricciardo },
  { id: "albon", nume: "Alex Albon", poza: albon },
  { id: "hulkenberg", nume: "Nico Hulkenberg", poza: hulkenberg },
  { id: "magnussen", nume: "Kevin Magnussen", poza: magnussen },
];

export default function SelectarePilot() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const slot = location.state?.slot;

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

  const pilotiFiltrati = piloti.filter((pilot) =>
    pilot.nume.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles["selectare-container"]}>
      <header
        className={styles["header"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>COMPARATIE PILOTI</h1>
      </header>

      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="Caută pilot..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles["pilot-lista"]}>
        {pilotiFiltrati.map((pilot) => (
          <div
            className={styles["pilot-card"]}
            key={pilot.id}
            onClick={() =>
              navigate("/comparatie", {
                state: { pilot: pilot, slot: slot },
              })
            }
          >
            <img
              src={pilot.poza}
              alt={pilot.nume}
              className={styles["pilot-poza"]}
            />
            <span className={styles["pilot-nume"]}>{pilot.nume}</span>
          </div>
        ))}
      </div>

      <footer
        className={styles["footer"]}
        style={{ backgroundColor: favoriteColor }}
      >
        <Link to="/" className={styles["footer-button"]}>
          <Home size={20} style={{ marginRight: "8px" }} />
        </Link>
        <Link to="/istoric" className={styles["footer-button"]}>
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>
      </footer>
    </div>
  );
}

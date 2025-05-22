import styles from "./SelectarePilot.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import max from "./images/max.jpg";
//import perez from "./images/perez22.png";
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
//import sargeant from "./images/usa_logan.jpeg";
import hulkenberg from "./images/nicoHulcamberg.jpg";
import magnussen from "./images/magnusam.jpg";
///import zhou from "./images/zhou-f1.jpg";
///import bottas from "./images/valteri_77.png";

const piloti = [
  { id: "verstappen", nume: "Max Verstappen", poza: max },
  //{ id: "perez", nume: "Sergio Perez", poza: perez },
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
  ///{ id: "sargeant", nume: "Logan Sargeant", poza: sargeant },
  { id: "hulkenberg", nume: "Nico Hulkenberg", poza: hulkenberg },
  { id: "magnussen", nume: "Kevin Magnussen", poza: magnussen },
  ///{ id: "zhou", nume: "Guanyu Zhou", poza: zhou },
  ///{ id: "bottas", nume: "Valtteri Bottas", poza: bottas },
];

export default function SelectarePilot() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const slot = location.state?.slot; // "left" sau "right"

  const pilotiFiltrati = piloti.filter((pilot) =>
    pilot.nume.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles["selectare-container"]}>
      <header className={styles["header"]}>
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

      <footer className={styles["footer"]}>
        <Link to="/" className={styles["footer-button"]}>
          PAGINA PRINCIPALA
        </Link>
        <button className={styles["footer-button"]}>CLASAMENTE TRECUTE</button>
      </footer>
    </div>
  );
}

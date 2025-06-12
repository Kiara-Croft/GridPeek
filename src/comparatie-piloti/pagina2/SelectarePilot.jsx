import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Home, Users } from "lucide-react";
import styles from "./SelectarePilot.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

// Imagini piloți
import max from "./images/max.jpg";
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
    "Red Bull": "#4570C0",
    Ferrari: "#D52E37",
    Mercedes: "#75F0D3",
    McLaren: "#f47600",
    Haas: "#9c9fa2",
    Alpine: "#00a1e8",
    Williams: "#1868db",
    "Kick Sauber": "#01c00e",
    "Racing Bulls": "#6c98ff",
    "Aston Martin": "#229971",
  };

  const favoriteColor = teamStyles[team] || "#d32f2f";

  const pilotiFiltrati = piloti.filter((pilot) =>
    pilot.nume.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const thirdWidthRef = useRef(0); // nou!

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    const { left, right } = carousel.getBoundingClientRect();
    const mouseX = e.clientX;

    const edgeSize = 100;
    const speed = 30;

    clearInterval(scrollInterval.current);

    if (mouseX < left + edgeSize) {
      scrollInterval.current = setInterval(() => {
        carousel.scrollLeft -= speed;
      }, 16);
    } else if (mouseX > right - edgeSize) {
      scrollInterval.current = setInterval(() => {
        carousel.scrollLeft += speed;
      }, 16);
    }
  };

  const stopScroll = () => {
    clearInterval(scrollInterval.current);
  };

  // CURSIVITATE INFINITĂ 🔁
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const scrollToMiddle = () => {
      const totalWidth = el.scrollWidth;
      const third = totalWidth / 3;
      el.scrollLeft = third;
      thirdWidthRef.current = third;
    };

    scrollToMiddle();

    const handleScroll = () => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft = thirdWidthRef.current;
      } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = thirdWidthRef.current;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <div
      className={styles["selectare-container"]}
      style={{ "--favorite-color": favoriteColor }}
    >
      <header className={styles["header"]}>
        <h1>COMPARAȚIE PILOȚI</h1>
      </header>

      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="Caută pilot..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div
        className={styles["pilot-carousel"]}
        ref={carouselRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopScroll}
        onMouseEnter={handleMouseMove}
      >
        {[...pilotiFiltrati, ...pilotiFiltrati, ...pilotiFiltrati].map(
          (pilot, index) => (
            <div
              className={styles["pilot-card"]}
              key={`${pilot.id}-${index}`}
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
          )
        )}
      </div>

      <nav className={styles["navbar"]}>
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
        <Link to="/" className={styles["nav-button"]} title="Acasă">
          <Home size={24} />
        </Link>
        <Link to="/istoric" className={styles["nav-button"]} title="Istoric">
          <Users size={24} />
        </Link>
      </nav>

      <footer className={styles["footer"]}>
        <span>© 2025 Miruna's F1 App</span>
      </footer>
    </div>
  );
}

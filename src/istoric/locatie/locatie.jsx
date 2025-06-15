import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Home, History } from "lucide-react";
import styles from "./locatie.module.css";
import { useFavoriteTeam } from "../../FavoriteTeamContext/FavoriteTeamContext";

export default function Locatie() {
  const { team } = useFavoriteTeam();
  const location = useLocation(); // Get the navigation state

  // Get the passed year and location from navigation state
  const initialYear = location.state?.an || "2025";
  const initialLocation = location.state?.locatie || "";

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

  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(initialYear);

  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState("");

  const [results, setResults] = useState([]);

  // 🔽 Sezoane
  useEffect(() => {
    fetch("https://api.jolpi.ca/ergast/f1/seasons")
      .then((res) => res.json())
      .then((data) => {
        const years = data.MRData.SeasonTable.Seasons.map(
          (s) => s.season
        ).reverse();
        setSeasons(years);
      });
  }, []);

  // 🔽 Când se selectează sezonul, luăm cursele
  useEffect(() => {
    if (!selectedSeason) return;
    fetch(`https://api.jolpi.ca/ergast/f1/${selectedSeason}/races`)
      .then((res) => res.json())
      .then((data) => {
        const raceList = data.MRData.RaceTable.Races;
        setRaces(raceList);

        // If we have an initial location, try to find the matching race
        if (initialLocation && raceList.length > 0) {
          const foundRace = raceList.find(
            (race) =>
              race.Circuit.circuitName
                .toLowerCase()
                .includes(initialLocation.toLowerCase()) ||
              race.raceName
                .toLowerCase()
                .includes(initialLocation.toLowerCase())
          );

          if (foundRace) {
            setSelectedRace(foundRace.round);
          } else {
            setSelectedRace("");
          }
        } else {
          setSelectedRace(""); // reset
        }

        setResults([]);
      });
  }, [selectedSeason, initialLocation]);

  // 🔽 Când se selectează cursa, luăm clasamentul
  useEffect(() => {
    if (!selectedSeason || !selectedRace) return;
    fetch(
      `https://api.jolpi.ca/ergast/f1/${selectedSeason}/${selectedRace}/results`
    )
      .then((res) => res.json())
      .then((data) => {
        const resultsData = data.MRData.RaceTable.Races[0]?.Results || [];
        setResults(resultsData);
      });
  }, [selectedRace, selectedSeason]);

  return (
    <div className={styles.container}>
      <header
        className={styles.header}
        style={{ backgroundColor: favoriteColor }}
      >
        <h1>CLASAMENTUL PE ZONE</h1>
      </header>

      <div className={styles["glass-box"]}>
        {/* Selectori */}
        <div>
          <label className={styles["select"]}>
            Alege un an:
            <select
              className={styles["an"]}
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
            >
              {seasons.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label className={styles["select"]}>
            Alege o cursă:
            <select
              className={styles["an"]}
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
            >
              <option value="">-- Selectează --</option>
              {races.map((r) => (
                <option key={r.round} value={r.round}>
                  {r.raceName}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Tabel cu clasament */}
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
            {results.length > 0
              ? results.map((r, i) => (
                  <tr key={i}>
                    <td>{r.position}</td>
                    <td>
                      {r.Driver.givenName} {r.Driver.familyName}
                    </td>
                    <td>{r.Time?.time || "DNF"}</td>
                    <td>{r.points}</td>
                  </tr>
                ))
              : [...Array(20)].map((_, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td></td>
                    <td></td>
                    <td>{[25, 18, 15, 12, 10, 8, 6, 4, 2, 1][i] || 0}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

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

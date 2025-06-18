import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, History, Palette, Home } from "lucide-react";
import { useFavoriteTeam } from "../FavoriteTeamContext/FavoriteTeamContext";
import "./PaginaPrincipala.css";

export default function PaginaPrincipala() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { team, setTeam, teams } = useFavoriteTeam();
  const [raceData, setRaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchLatestRace = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/ergast/f1/current/last/results.json"
        );
        // Atenție la path: începe cu /api/ ca să fie prins de proxy-ul Netlify/Vite

        if (!response.ok) {
          throw new Error("Nu s-au putut încărca datele");
        }

        const data = await response.json();

        if (data.MRData.RaceTable.Races.length > 0) {
          const race = data.MRData.RaceTable.Races[0];
          setRaceData({
            location: `${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`,
            laps: `${race.Results[0].laps}/${race.Results[0].laps}`,
            raceName: race.raceName,
            results: race.Results,
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRace();
  }, []);

  const favoriteColor = teamStyles[team]?.color || "#e31800";

  return (
    <div className="container">
      <header className="header" style={{ backgroundColor: favoriteColor }}>
        <h1>RACE RESULTS</h1>
      </header>

      <div className="glass-box">
        {loading ? (
          <div className="loading-message">Se încarcă datele...</div>
        ) : error ? (
          <div className="error-message">
            {error}
            <button
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Reîncarcă
            </button>
          </div>
        ) : raceData ? (
          <>
            <h2 className="race-title">{raceData.raceName}</h2>
            <section className="info-cursa">
              <span className="info-item">{raceData.location}</span>
              <span className="info-item">Cursă</span>
              <span className="info-item">{raceData.laps}</span>
            </section>

            <table className="tabel-cursa">
              <thead>
                <tr>
                  <th>Pozitie</th>
                  <th>Nume</th>
                  <th>Timp</th>
                  <th>Puncte</th>
                </tr>
              </thead>
              <tbody>
                {raceData.results.map((result) => (
                  <tr key={result.position}>
                    <td>{result.position}</td>
                    <td>
                      {result.Driver.givenName} {result.Driver.familyName}
                      <br />
                      <small>{result.Constructor.name}</small>
                    </td>
                    <td>{result.Time?.time || result.status}</td>
                    <td>{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="no-data">Nu sunt date disponibile</div>
        )}
      </div>

      <footer className="footer" style={{ backgroundColor: favoriteColor }}>
        <div
          style={{
            display: "inline-block",
            marginRight: "8px",
            borderBottom: "3px solid #ffffff",
            paddingBottom: "1px",
            marginBottom: "1px",
          }}
        >
          <Home size={20} style={{ color: "#ffffff" }} />
        </div>

        <Link
          to="/comparatie"
          state={{ reset: true }}
          className="footer-button"
        >
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/istoric" className="footer-button">
          <History size={20} style={{ marginRight: "8px" }} />
        </Link>

        <div style={{ position: "relative" }}>
          <button
            className="footer-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Palette size={20} style={{ marginRight: "8px" }} />
          </button>

          {showDropdown && (
            <div className="dropdown-echipe">
              {teams.map((t) => (
                <div
                  key={t}
                  className="echipa-item"
                  onClick={() => {
                    setTeam(t);
                    setShowDropdown(false);
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

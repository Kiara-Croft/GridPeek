import { createContext, useContext, useState } from "react";

const FavoriteTeamContext = createContext();

export function FavoriteTeamProvider({ children }) {
  const [team, setTeam] = useState(null);
  const teams = [
    "Red Bull",
    "Ferrari",
    "Mercedes",
    "McLaren",
    "Haas",
    "Aston Martin",
  ];

  return (
    <FavoriteTeamContext.Provider value={{ team, setTeam, teams }}>
      {children}
    </FavoriteTeamContext.Provider>
  );
}

export function useFavoriteTeam() {
  return useContext(FavoriteTeamContext);
}

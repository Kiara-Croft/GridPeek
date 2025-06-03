import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipala from "./pagina-principala/PaginaPrincipala";
import ComparatiePiloti from "./comparatie-piloti/pagina1/ComparatiePiloti";
import SelectarePilot from "./comparatie-piloti/pagina2/SelectarePilot";
import ComparatieDetalii from "./comparatie-piloti/pagina3/ComparatieDetalii";
import Selectare from "./istoric/selectare/selectare";
import Locatie from "./istoric/locatie/locatie";
import Pilot from "./istoric/pilot/pilot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipala />} />
        <Route path="/comparatie" element={<ComparatiePiloti />} />
        <Route path="/pagina2" element={<SelectarePilot />} />
        <Route path="/pagina3" element={<ComparatieDetalii />} />
        <Route path="/istoric" element={<Selectare />} />
        <Route path="/istoric/locatie" element={<Locatie />} />
        <Route path="/istoric/pilot" element={<Pilot />} />
      </Routes>
    </Router>
  );
}

export default App;

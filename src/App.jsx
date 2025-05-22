import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipala from "./pagina-principala/PaginaPrincipala";
import ComparatiePiloti from "./comparatie-piloti/pagina1/ComparatiePiloti";
import SelectarePilot from "./comparatie-piloti/pagina2/SelectarePilot";
import ComparatieDetalii from "./comparatie-piloti/pagina3/ComparatieDetalii";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipala />} />
        <Route path="/comparatie" element={<ComparatiePiloti />} />
        <Route path="/pagina2" element={<SelectarePilot />} />
        <Route path="/pagina3" element={<ComparatieDetalii />} />
      </Routes>
    </Router>
  );
}

export default App;

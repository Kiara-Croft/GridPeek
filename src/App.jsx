import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipala from "./pagina-principala/PaginaPrincipala";
import ComparatiePiloti from "./comparatie-piloti/ComparatiePiloti";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipala />} />
        <Route path="/comparatie" element={<ComparatiePiloti />} />
      </Routes>
    </Router>
  );
}

export default App;

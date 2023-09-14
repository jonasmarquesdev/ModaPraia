import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

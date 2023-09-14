import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

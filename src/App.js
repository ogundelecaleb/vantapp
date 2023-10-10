import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import "animate.css/animate.min.css";
import Personal from "./Personal";
import Product from "./Product";
import Company from "./Company";
import TermsOfUse from "./TermsOfUse";


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;

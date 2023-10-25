import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import "animate.css/animate.min.css";
import Personal from "./Personal";
import Product from "./Product";
import Company from "./Company";
import TermsOfUse from "./TermsOfUse";
import Blog from "./blog";
import Faq from "./Faq";
import Page404 from "./404";
import Privacy from "./Privacy";


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Page404 />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

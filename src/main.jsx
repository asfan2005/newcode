import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  Konditsaner,
  Malumot,
  Kontakt,
  Ventilatsiya,
  Services,
  Obyekti,
  Montaj,
  Ventilator,
  Sistem,
  ServicKon,
  Ustanovka,
  Dostavka,
  Отзывы,
  Navosti,
  Div,
  Korzina,
  News,
} from "./components/index.js";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/konditsaner" element={<Konditsaner />} />
        <Route path="/malumot/:id" element={<Malumot />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/ventilatsiya" element={<Ventilatsiya />} />
        <Route path="/services" element={<Services />} />
        <Route path="/obyekti" element={<Obyekti />} />
        <Route path="/montaj" element={<Montaj />} />
        <Route path="/ventilator" element={<Ventilator />} />
        <Route path="/sistem" element={<Sistem />} />
        <Route path="/servicKon" element={<ServicKon />} />
        <Route path="/ustanovka" element={<Ustanovka />} />
        <Route path="/dostavka" element={<Dostavka />} />
        <Route path="/Отзывы" element={<Отзывы />} />
        <Route path="/navosti" element={<Navosti />} />
        <Route path="/div" element={<Div />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import TeamSection from "./components/TeamSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";

import CookieBanner from "./components/CookieBanner";

import './styles/Custom.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <MenuSection />
              <TeamSection />
              <GallerySection />
              <ContactSection />
              <Footer />
            </>
          }
        />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
      </Routes>

      <CookieBanner />
    </>
  );
}

export default App;

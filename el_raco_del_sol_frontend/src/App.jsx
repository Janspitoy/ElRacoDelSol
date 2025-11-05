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
      </Routes>
    </>
  );
}

export default App;
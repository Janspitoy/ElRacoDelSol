import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-uppercase me-5" href="#hero">
          El Racó del Sol
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          {/* Меню теперь выровнено влево */}
          <ul className="navbar-nav me-auto text-start">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#menu">Carta</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Equipo</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Galería</a></li>
          </ul>

          {/* Кнопка брони справа */}
          <div className="d-flex">
            <a className="btn btn-outline-light ms-lg-3" href="#contact">
              <i className="bi bi-calendar-check me-1"></i> Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

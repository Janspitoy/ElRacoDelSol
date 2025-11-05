import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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

  // 🔹 Исправляем "прыжок" из-за скроллбара
  useEffect(() => {
    const navCollapse = document.querySelector("#nav");

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    const handleToggle = () => {
      const isOpen = navCollapse.classList.contains("show");
      document.body.classList.toggle("menu-open", isOpen);
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${getScrollbarWidth()}px`
      );
    };

    navCollapse?.addEventListener("shown.bs.collapse", handleToggle);
    navCollapse?.addEventListener("hidden.bs.collapse", handleToggle);

    return () => {
      navCollapse?.removeEventListener("shown.bs.collapse", handleToggle);
      navCollapse?.removeEventListener("hidden.bs.collapse", handleToggle);
    };
  }, []);

  // 🔹 Переход и плавный скролл
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const navCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse = window.bootstrap?.Collapse.getInstance(navCollapse);

    // Закрыть меню после клика
    if (bsCollapse) bsCollapse.hide();

    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold text-uppercase me-5"
          href="/#hero"
          onClick={(e) => handleNavClick(e, "hero")}
        >
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
          <ul className="navbar-nav me-auto text-start">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#menu"
                onClick={(e) => handleNavClick(e, "menu")}
              >
                Carta
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#team"
                onClick={(e) => handleNavClick(e, "team")}
              >
                Equipo
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#gallery"
                onClick={(e) => handleNavClick(e, "gallery")}
              >
                Galería
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <a
              className="btn btn-outline-light ms-lg-3"
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              <i className="bi bi-calendar-check me-1"></i> Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

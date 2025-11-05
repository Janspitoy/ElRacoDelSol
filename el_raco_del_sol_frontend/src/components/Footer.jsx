export default function Footer() {
  return (
    <footer className="bg-black text-light py-5">
      <div className="container text-center">
        <h5 className="text-warning mb-3">El Racó del Sol</h5>
        <p className="mb-2">
          Carrer de Verdi, 12 — Gràcia, Barcelona<br />
          Tel: <a href="tel:+34930000000" className="text-warning">+34 930 000 000</a>
        </p>
        <p className="text-muted1 mb-4">Lun–Dom: 13:00–16:00 / 19:30–23:00</p>
        <div className="d-flex justify-content-center gap-3 fs-4 mb-3">
          <a href="https://instagram.com" className="text-warning" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com" className="text-warning" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://linkedin.com" className="text-warning" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <small className="text-muted1">
          © {new Date().getFullYear()} El Racó del Sol — Hecho con ❤️ en Barcelona
        </small>
      </div>
    </footer>
  );
}
export default function About() {
  return (
    <section id="about" className="py-5 bg-dark text-light">
      <div className="container d-lg-flex align-items-center gap-5">
        <div className="flex-grow-1">
          <h2 className="mb-4 fw-bold text-warning">Sobre nosotros</h2>
          <p className="lead">
            En <strong>El Racó del Sol</strong>, celebramos la cocina catalana
            con ingredientes frescos, vinos locales y una atmósfera que refleja
            la calidez de Barcelona. Cada plato está hecho con pasión, fuego y
            sol.
          </p>
          <p className="text-muted">
            Descubre nuestros sabores, vive nuestra historia y disfruta de un
            rincón donde cada comida se convierte en un recuerdo.
          </p>
        </div>
        <img
          src="../src/assets/img2.avif"
          alt="Chef preparando tapas"
          className="img-fluid rounded shadow"
        />
      </div>
    </section>
  );
}

import heroImg from '../assets/img.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero d-flex align-items-center justify-content-center text-center text-light"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="overlay"></div>
      <div className="container position-relative z-2">
        <h1 className="display-3 fw-bold mb-3">El Racó del Sol</h1>
        <p className="lead mb-4">
          El sabor del Mediterráneo bajo el sol de Barcelona
        </p>
        <a href="#menu" className="btn btn-lg btn-outline-light px-4 py-2">
          Ver carta
        </a>
      </div>
    </section>
  );
}

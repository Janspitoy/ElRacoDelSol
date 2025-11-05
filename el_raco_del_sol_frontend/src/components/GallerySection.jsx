import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import axios from "axios";

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/gallery/")
      .then((res) => {
        // Проверяем, действительно ли пришёл массив
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          console.error("Unexpected response:", res.data);
          setImages([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
        setImages([]);
      });
  }, []);

  const slides = images.map((img) => ({ src: img.image }));

  return (
    <>
      <section id="gallery" className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="fw-bold text-warning mb-5 text-center">Galería</h2>
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {Array.isArray(images) && images.length > 0 ? (
              images.map((img, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={img.image}
                    alt={img.title || `Foto ${i + 1}`}
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "260px",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No hay imágenes aún.</p>
            )}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        plugins={[Zoom, Fullscreen]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
        }}
      />
    </>
  );
}

import { useState } from "react";
// Импортируем лайтбокс и его стили
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// (Опционально) импортируем плагины для зума, полноэкранного режима и т.д.
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export default function GallerySection() {
  // Исходные изображения
  const images = [
    "../src/assets/gallery1.jpg",
    "../src/assets/gallery2.jpg",
    "../src/assets/gallery3.jpeg",
    "../src/assets/gallery4.jpg",
    "../src/assets/gallery5.jpg",
  ];

  // Состояние для лайтбокса: -1 = закрыт, 0 и > = индекс открытого фото
  const [index, setIndex] = useState(-1);

  // Форматируем изображения для лайтбокса (ему нужен массив объектов)
  const slides = images.map((src) => ({ src }));

  return (
    <>
      <section id="gallery" className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="fw-bold text-warning mb-5 text-center">Galería</h2>
          
          {/* Используем CSS Grid для мозаики или просто row для сетки */}
          <div className="gallery-grid">
            {images.map((src, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setIndex(i)} // Открываем лайтбокс по клику
              >
                <img
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Компонент Лайтбокса */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        plugins={[Zoom, Fullscreen]} // Добавляем плагины
        styles={{ 
          container: { backgroundColor: "rgba(0, 0, 0, .9)" } 
        }}
      />
    </>
  );
}
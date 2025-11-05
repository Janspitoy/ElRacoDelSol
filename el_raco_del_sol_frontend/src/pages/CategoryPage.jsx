import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import Footer from "../components/Footer"; // добавляем футер

export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    api.get(`/categories/${slug}/`).then((r) => setCategory(r.data));
    window.scrollTo(0, 0); // при загрузке — наверх страницы
  }, [slug]);

  if (!category)
    return (
      <div className="text-center py-5 text-light">
        <div className="spinner-border text-warning" role="status"></div>
        <p className="mt-3">Cargando…</p>
      </div>
    );

  return (
    <>
      <section className="category-section py-5">
        <div className="container">
          {/* Заголовок */}
          <div className="text-center mb-5">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <Link to="/" className="btn btn-outline-warning px-4 py-2 order-1 order-md-0">
                ← Volver
              </Link>

              <h1 className="fw-bold text-warning mb-0 text-center flex-grow-1 order-0 order-md-1 w-100 w-md-auto">
                {category.name}
              </h1>
            </div>
            <p className="lead text-muted1">{category.description}</p>
          </div>

          {/* Сетка блюд */}
          <div className="row g-4">
            {category.dishes.map((dish) => (
              <div className="col-md-4" key={dish.id}>
                <div className="card h-100 dish-card shadow-sm">
                  <div className="dish-image-wrapper">
                    <img
                      src={dish.image || "/placeholder.jpg"}
                      className="card-img-top"
                      alt={dish.name}
                    />
                    {/* Эффект при наведении */}
                    <div className="dish-overlay">
                      <span className="dish-overlay-text">Ver detalle</span>
                    </div>
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {dish.description}
                    </p>
                  </div>

                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-warning">
                      {dish.price}€
                    </span>
                    <span
                      className={`badge ${
                        dish.is_available ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {dish.is_available ? "Disponible" : "Agotado"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

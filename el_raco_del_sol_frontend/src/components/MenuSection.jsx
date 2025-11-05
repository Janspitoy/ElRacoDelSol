import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

export default function MenuSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/categories/").then((res) => setCategories(res.data));
  }, []);

  return (
    <section id="menu" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-warning">Nuestra carta</h2>
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={cat.image || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={cat.name}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {cat.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/category/${cat.slug}`}
                      className="btn btn-warning w-100"
                    >
                      Ver platos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

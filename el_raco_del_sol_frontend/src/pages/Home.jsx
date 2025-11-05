import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => { api.get("/categories/").then(r => setCategories(r.data)); }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">El Racó del Sol</h1>
      <div className="row g-4">
        {categories.map(cat => (
          <div className="col-md-4" key={cat.id}>
            <div className="card h-100 shadow-sm">
              <img src={cat.image || "/placeholder.jpg"} alt={cat.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="text-muted">{cat.description}</p>
                <Link to={`/category/${cat.slug}`} className="btn btn-primary">Ver platos</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

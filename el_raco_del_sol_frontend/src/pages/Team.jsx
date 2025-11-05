import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => { api.get("/team/").then(r => setMembers(r.data)); }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Nuestro equipo</h2>
      <div className="row g-4">
        {members.map(m => (
          <div className="col-sm-6 col-md-4" key={m.id}>
            <div className="card h-100 text-center shadow-sm">
              <img src={m.photo || "/placeholder-user.jpg"} alt={m.name} className="card-img-top" style={{objectFit:"cover",height:"260px"}}/>
              <div className="card-body">
                <h5 className="card-title">{m.name}</h5>
                <p className="text-muted">{m.role}</p>
                {m.description && <p className="card-text">{m.description}</p>}
              </div>
              <div className="card-footer bg-white d-flex justify-content-center gap-3 fs-5">
                {m.instagram && <a href={m.instagram} target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>}
                {m.facebook  && <a href={m.facebook}  target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>}
                {m.linkedin  && <a href={m.linkedin}  target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>}
                {m.twitter   && <a href={m.twitter}   target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>}
                {m.tiktok    && <a href={m.tiktok}    target="_blank" rel="noreferrer"><i className="bi bi-tiktok"></i></a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

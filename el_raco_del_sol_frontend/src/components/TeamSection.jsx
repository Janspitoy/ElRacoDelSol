import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get("/team/").then((res) => setTeam(res.data));
  }, []);

  return (
    <section id="team" className="py-5 bg-dark text-light">
      <div className="container text-center">
        <h2 className="fw-bold text-warning mb-5">Nuestro equipo</h2>

        {/* Обертка для скролла */}
        <div className="team-scroll-wrapper">
          <div className="row flex-nowrap g-4">
            {team.map((member) => (
              // Задаем ширину колонок, чтобы они не сжимались
              <div key={member.id} className="col-10 col-md-5 col-lg-4">
                <div className="card h-100 text-center shadow">
                  <img
                    src={member.photo || "/placeholder-user.jpg"}
                    alt={member.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "320px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5>{member.name}</h5>
                    <p className="text-warning">{member.role}</p>
                    <p className="text-muted flex-grow-1">{member.description}</p>
                    <div className="social-links mt-auto">
                      {member.instagram && (
                        <a href={member.instagram} className="me-2 text-warning fs-4">
                          <i className="bi bi-instagram"></i>
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} className="text-warning fs-4">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
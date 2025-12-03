import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0e0e0e",
        color: "#ccc",
        padding: "60px 20px 30px",
        fontFamily: "sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1100px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        {/* 🏠 Columna 1 - Información de contacto */}
        <div style={{ flex: "1 1 300px", textAlign: "left" }}>
          <h4 style={{ color: "#f4c542", marginBottom: "10px" }}>El Racò del Sol</h4>
          <p style={{ margin: "0 0 12px", color: "#aaa", lineHeight: "1.6" }}>
            “El sabor del Mediterráneo bajo el sol de Barcelona.”<br />
            Carrer de Verdi, 12 — Gràcia, Barcelona<br />
            <strong>Tel:</strong>{" "}
            <a href="tel:+34930000000" style={{ color: "#f4c542", textDecoration: "none" }}>
              +34 930 000 000
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@elracodelsol.com" style={{ color: "#f4c542", textDecoration: "none" }}>
              info@elracodelsol.com
            </a>
          </p>
          <p style={{ fontSize: "13px", color: "#888" }}>Lun–Dom: 13:00–16:00 / 19:30–23:00</p>
        </div>

        {/* 🍽️ Columna 2 - Enlaces legales */}
        <div
          style={{
            flex: "1 1 250px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5 style={{ color: "#f4c542", marginBottom: "15px" }}>Información Legal</h5>
          <a href="/aviso-legal" style={linkStyle}>
            Aviso Legal
          </a>
          <a href="/politica-de-privacidad" style={linkStyle}>
            Política de Privacidad
          </a>
          <a href="/politica-de-cookies" style={linkStyle}>
            Política de Cookies
          </a>
        </div>

        {/* 🌐 Columna 3 - Redes sociales */}
        <div
          style={{
            flex: "1 1 250px",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <h5 style={{ color: "#f4c542", marginBottom: "15px" }}>Síguenos</h5>
          <div style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}>
            <a
              href="https://instagram.com"
              style={socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              style={socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://linkedin.com"
              style={socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* © Línea inferior */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "20px",
          fontSize: "13px",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} El Racò del Sol — Hecho con ❤️ por{" "}
        <a
          href="https://touch-craft.com/es/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f4c542", textDecoration: "none" }}
        >
          TouchCraft
        </a>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "8px",
  transition: "color 0.3s",
};
const socialLink = {
  color: "#f4c542",
  textDecoration: "none",
  transition: "opacity 0.3s",
};

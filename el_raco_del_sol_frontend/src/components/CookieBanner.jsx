import React, { useState, useEffect } from "react";

const COOKIE_KEY = "cookieConsent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
    if (consent === "accepted") loadAnalytics();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    loadAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  const loadAnalytics = () => {
    if (window.gtag) return; // избегаем дубликатов
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // замени на свой ID Google Analytics
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-XXXXXXX", { anonymize_ip: true });
    };
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#111",
        color: "#fff",
        padding: "16px",
        textAlign: "center",
        fontSize: "15px",
        zIndex: 9999,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.4)",
      }}
    >
      <p style={{ margin: "0 0 10px" }}>
        🍪 Este sitio utiliza cookies para gestionar reservas (CoverManager) y
        analizar el tráfico mediante Google Analytics.{" "}
        <a href="/politica-de-cookies" style={{ color: "#ffc107" }}>
          Más información
        </a>
        .
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button
          onClick={acceptCookies}
          style={{
            background: "#ffc107",
            color: "#000",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Aceptar
        </button>
        <button
          onClick={declineCookies}
          style={{
            background: "#444",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}

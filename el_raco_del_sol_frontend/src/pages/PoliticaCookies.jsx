import React from "react";
import { Helmet } from "react-helmet-async";

export default function PoliticaCookies() {
  return (
    <div className="legal-page" style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <Helmet>
        <title>Política de Cookies | El Racò del Sol - Restaurante en Barcelona</title>
        <meta
          name="description"
          content="Política de cookies de El Racò del Sol. Explicación sobre el uso de cookies técnicas y analíticas (Google Analytics, CoverManager)."
        />
      </Helmet>

      <h1>Política de Cookies</h1>
      <p>
        Este sitio web utiliza cookies y tecnologías similares para garantizar el correcto
        funcionamiento del sitio, gestionar reservas con <strong>CoverManager</strong>
        y analizar el tráfico mediante <strong>Google Analytics</strong>.
      </p>

      <h3>1. ¿Qué son las cookies?</h3>
      <p>
        Las cookies son pequeños archivos que se almacenan en su navegador y permiten recordar información
        sobre su visita para mejorar la experiencia del usuario.
      </p>

      <h3>2. Tipos de cookies</h3>
      <ul>
        <li><strong>Técnicas:</strong> necesarias para el funcionamiento básico y las reservas online.</li>
        <li><strong>Analíticas:</strong> ayudan a entender cómo los visitantes usan la web (Google Analytics).</li>
      </ul>

      <h3>3. Gestión</h3>
      <p>
        Puede aceptar o rechazar las cookies no esenciales mediante el banner de consentimiento o desde la configuración de su navegador.
      </p>

      <h3>4. Cookies de terceros</h3>
      <ul>
        <li><strong>CoverManager:</strong> sistema de reservas – <a href="https://www.covermanager.com" target="_blank" rel="noopener noreferrer">covermanager.com</a></li>
        <li><strong>Google Analytics:</strong> herramienta de análisis – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
      </ul>

      <p>Última actualización: {new Date().getFullYear()}</p>
    </div>
  );
}

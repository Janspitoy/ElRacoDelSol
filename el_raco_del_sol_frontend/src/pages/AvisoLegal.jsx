import React from "react";
import { Helmet } from "react-helmet-async";

export default function AvisoLegal() {
  return (
    <div className="legal-page" style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <Helmet>
        <title>Aviso Legal | El Racò del Sol - Restaurante Mediterráneo en Barcelona</title>
        <meta
          name="description"
          content="Aviso Legal de El Racò del Sol, restaurante mediterráneo en Barcelona. Información sobre el titular, uso del sitio web y legislación aplicable."
        />
      </Helmet>

      <h1>Aviso Legal</h1>
      <p>
        En cumplimiento con la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
      </p>

      <h3>1. Datos del titular</h3>
      <p>
        Nombre comercial: <strong>El Racò del Sol</strong><br />
        Titular: <strong>El Racò del Sol Barcelona S.L.</strong><br />
        CIF: <strong>B12345678</strong><br />
        Domicilio: <strong>Carrer de Mallorca 182, 08036 Barcelona, España</strong><br />
        Email: <strong>info@elracodelsol.com</strong><br />
        Teléfono: <strong>+34 933 456 789</strong>
      </p>

      <h3>2. Objeto del sitio</h3>
      <p>
        Este sitio web tiene como objetivo proporcionar información sobre el restaurante El Racò del Sol, sus servicios, carta y sistema de reservas online.
      </p>

      <h3>3. Propiedad intelectual</h3>
      <p>
        Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño, son propiedad de El Racò del Sol o de sus respectivos titulares.
      </p>

      <h3>4. Legislación aplicable</h3>
      <p>
        Este aviso legal se rige por la legislación española. Cualquier disputa será resuelta ante los tribunales de Barcelona.
      </p>
    </div>
  );
}

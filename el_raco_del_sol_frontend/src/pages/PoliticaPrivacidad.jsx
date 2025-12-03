import React from "react";
import { Helmet } from "react-helmet-async";

export default function PoliticaPrivacidad() {
  return (
    <div className="legal-page" style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <Helmet>
        <title>Política de Privacidad | El Racò del Sol - Restaurante Mediterráneo</title>
        <meta
          name="description"
          content="Política de privacidad de El Racò del Sol en Barcelona. Cómo tratamos los datos personales para reservas y consultas según el GDPR."
        />
      </Helmet>

      <h1>Política de Privacidad</h1>
      <p>
        En El Racò del Sol cumplimos con el Reglamento (UE) 2016/679 (GDPR) y la Ley Orgánica 3/2018 sobre Protección de Datos Personales.
      </p>

      <h3>1. Responsable del tratamiento</h3>
      <p>
        Responsable: <strong>El Racò del Sol Barcelona S.L.</strong><br />
        CIF: <strong>B12345678</strong><br />
        Dirección: <strong>Carrer de Mallorca 182, 08036 Barcelona</strong><br />
        Email: <strong>info@elracodelsol.com</strong>
      </p>

      <h3>2. Finalidad</h3>
      <p>
        Los datos personales se recogen con el fin de gestionar reservas, responder consultas y mejorar la atención al cliente.
      </p>

      <h3>3. Legitimación</h3>
      <p>
        El tratamiento se basa en el consentimiento del usuario al realizar una reserva o enviar un formulario de contacto.
      </p>

      <h3>4. Cesiones de datos</h3>
      <p>
        Los datos podrán ser tratados por el proveedor de reservas <strong>CoverManager</strong> exclusivamente para la gestión de reservas, actuando como encargado del tratamiento.
      </p>

      <h3>5. Derechos</h3>
      <p>
        Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad enviando un correo a <strong>info@elracodelsol.com</strong>.
      </p>

      <h3>6. Conservación</h3>
      <p>
        Los datos se conservarán mientras exista relación comercial y durante los plazos legales establecidos.
      </p>
    </div>
  );
}

import Link from "next/link"
import styles from "../terminos/legal.module.css"

export default function PrivacidadPage() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalHeader}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>
        <h1 className={styles.legalTitle}>Políticas de Privacidad</h1>
      </div>

      <div className={styles.legalContent}>
        <div className={styles.parchment}>
          <h2>Política de Privacidad</h2>
          <p>Última actualización: {new Date().toLocaleDateString()}</p>

          <h3>1. Información que Recopilamos</h3>
          <p>
            Dungeon RPG recopila cierta información para proporcionar y mejorar nuestros servicios. Esta información
            incluye:
          </p>
          <ul>
            <li>ID de usuario de Discord</li>
            <li>Nombre de usuario y avatar</li>
            <li>Datos de interacción con el bot (comandos utilizados, participación en eventos)</li>
            <li>Datos de progreso en el juego (monedas, inventario, estadísticas)</li>
          </ul>

          <h3>2. Cómo Utilizamos la Información</h3>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Mejorar y personalizar la experiencia del usuario</li>
            <li>Desarrollar nuevas funciones y características</li>
            <li>Monitorear el uso de nuestros servicios</li>
          </ul>

          <h3>3. Compartición de Datos</h3>
          <p>No vendemos ni compartimos sus datos personales con terceros, excepto en las siguientes circunstancias:</p>
          <ul>
            <li>Con su consentimiento</li>
            <li>Para cumplir con obligaciones legales</li>
            <li>Para proteger nuestros derechos, privacidad, seguridad o propiedad</li>
          </ul>

          <h3>4. Seguridad de los Datos</h3>
          <p>
            Implementamos medidas de seguridad diseñadas para proteger sus datos contra acceso no autorizado o
            alteración.
          </p>

          <h3>5. Sus Derechos</h3>
          <p>Usted tiene derecho a:</p>
          <ul>
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>

          <h3>6. Cambios a esta Política</h3>
          <p>
            Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio
            publicando la nueva Política de Privacidad en esta página.
          </p>

          <h3>7. Contacto</h3>
          <p>
            Si tiene preguntas sobre esta Política de Privacidad, contáctenos a través de nuestro <a href="https://discord.gg/N7CHH4zvQz"><strong>servidor de soporte de discord.</strong></a>
          </p>
        </div>
      </div>

      <footer className={styles.legalFooter}>
        <Link href="/" className={styles.footerLink}>
          Inicio
        </Link>
        <Link href="/terminos" className={styles.footerLink}>
          Términos y Condiciones
        </Link>
      </footer>
    </div>
  )
}

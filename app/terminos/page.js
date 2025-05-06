import Link from "next/link"
import styles from "./legal.module.css"

export default function TerminosPage() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalHeader}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>
        <h1 className={styles.legalTitle}>Términos y Condiciones</h1>
      </div>

      <div className={styles.legalContent}>
        <div className={styles.parchment}>
          <h2>Términos y Condiciones de Uso</h2>
          <p>Última actualización: {new Date().toLocaleDateString()}</p>

          <h3>1. Aceptación de los Términos</h3>
          <p>
            Al acceder y utilizar Dungeon RPG ("el Bot"), usted acepta estar sujeto a estos Términos y Condiciones de
            Uso. Si no está de acuerdo con alguno de estos términos, no utilice este Bot.
          </p>

          <h3>2. Uso del Bot</h3>
          <p>
            El bot está diseñado para entretenimiento y gestión de partidas de rol. Su uso indebido, incluyendo spam o explotación
            de errores, puede resultar en restricciones.
          </p>

          <h3>3. Restricciones de Uso</h3>
          <p>Usted acepta no:</p>
          <ul>
            <li>Utilizar el Bot para cualquier propósito ilegal o no autorizado</li>
            <li>Intentar acceder, alterar o interferir con la funcionalidad del Bot</li>
            <li>Utilizar el Bot para acosar, abusar o dañar a otros usuarios</li>
            <li>Utilizar el Bot para distribuir contenido inapropiado o ilegal</li>
          </ul>

          <h3>4. Propiedad Intelectual</h3>
          <p>
            Todos los derechos, títulos e intereses en y para el Bot, incluidos todos los derechos de propiedad
            intelectual, son y seguirán siendo propiedad exclusiva de los propietarios de Dungeon RPG.
          </p>

          <h3>5. Modificaciones</h3>
          <p>
            Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. Es su
            responsabilidad revisar estos términos periódicamente para detectar cambios.
          </p>

          <h3>6. Sistema de Recompensas</h3>
          <p>
            Oro, XP e ítems se otorgan según la mecánica del juego. No se garantizan recompensas fuera de lo establecido en las
            reglas del bot.
          </p>

          <h3>7. Limitación de Responsabilidad</h3>
          <p>
            En ningún caso los propietarios o creadores de Dungeon RPG serán responsables por cualquier reclamación,
            daños u otra responsabilidad, ya sea en una acción de contrato, agravio o de otro tipo, que surja de o en
            conexión con el Bot o el uso u otros tratos con el Bot.
          </p>

          <h3>8. Propiedad de Contenido</h3>
          <p>
            La lógica, los sistemas y el diseño del bot son propiedad del desarrollador y no pueden ser reproducidos o revendidos
            sin autorización.
          </p>

          <h3>9. Soporte y Contacto</h3>
          <p>
            Para reportar errores, sugerencias o dudas, se recomienda unirse al <a href="https://discord.gg/N7CHH4zvQz"><strong>servidor de soporte de discord</strong></a> o contactar a los administradores.
          </p>
        </div>
      </div>

      <footer className={styles.legalFooter}>
        <Link href="/" className={styles.footerLink}>
          Inicio
        </Link>
        <Link href="/privacidad" className={styles.footerLink}>
          Políticas de Privacidad
        </Link>
      </footer>
    </div>
  )
}

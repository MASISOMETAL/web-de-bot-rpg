import styles from "../docs.module.css"

export default function Instalacion() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Instalación</h1>

      <div className={styles.parchment}>
        <h2>Cómo añadir Dungeon RPG a tu servidor</h2>

        <p>Añadir Dungeon RPG a tu servidor de Discord es un proceso sencillo que solo requiere unos pocos pasos:</p>

        <ol className={styles.featureList}>
          <li>
            Haz clic en el botón "Añadir a Discord" en nuestra página principal o
            <a
              href="https://discord.com/oauth2/authorize?client_id=1366544486477332563&permissions=84992&integration_type=0&scope=bot+applications.commands"
              className={styles.link}
            >
              {" "}
              usa este enlace
            </a>
          </li>
          <li>Selecciona el servidor donde deseas añadir el bot</li>
          <li>Verifica que tienes los permisos necesarios (necesitas ser administrador del servidor)</li>
          <li>Confirma los permisos solicitados por el bot</li>
          <li>¡Listo! El bot se unirá a tu servidor y estará listo para usar</li>
        </ol>

        <h3>Permisos requeridos</h3>
        <p>Dungeon RPG necesita los siguientes permisos para funcionar correctamente:</p>
        <ul className={styles.featureList}>
          <li>Ver canales (para configurar el spawn de monstruos)</li>
          <li>Enviar mensajes (para enviarte respuesta de los comandos que usas)</li>
          <li>Insertar enlaces (para poder enviar mensajes en Embed)</li>
          <li>Leer el historial de mensajes (para que los mensajes que enviamos tengan un tiempo de expiración)</li>
        </ul>

        <div className={styles.callout}>
          <h4>Configuración inicial</h4>
          <p>
            Una vez que el bot se haya unido a tu servidor, usa el comando <code>/set_monster_channel [canal]</code> para configurar
            el canal en donde aparecerán los monstruos.
          </p>
        </div>
      </div>
    </div>
  )
}

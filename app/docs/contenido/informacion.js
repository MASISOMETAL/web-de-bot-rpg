import styles from "../docs.module.css"

export default function Informacion() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Comandos de Información</h1>

      <div className={styles.parchment}>
        <h2>Importante</h2>
        <p>
          Dungeon RPG tiene un sistema de generación de monstruos segun interacciones de mensajes, mientras mas mensajes se envien
          en tu server, mas posibilidades de que aparezca un monstruo, pero esto solo sucederá si usas el comando /set_monster_channel
          para asignar un canal de spawn de monstruos.
        </p>

        <div className={styles.commandTable}>
          <div className={styles.commandRow}>
            <div className={styles.commandName}>/set_monster_channel [canal]</div>
            <div className={styles.commandDesc}><strong>Admin:</strong>Solo con permisos de administrador podes usar este comando,
              con este comando podes asignar un canal de spawn para tus monstruos.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/items [categoria]</div>
            <div className={styles.commandDesc}>Muestra una lista de todos los items y sus ID del bot según categoria.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/items [categoria] [id]</div>
            <div className={styles.commandDesc}>Muestra a detalle un item en particular según su ID.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/rank [global o server]</div>
            <div className={styles.commandDesc}>Muestra el ranking de los personajes de Dungeon RPG o del servidor en el que se ejecuta.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/kit [codigo]</div>
            <div className={styles.commandDesc}>Puedes reclamar un kit inicial según su codigo.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/ayuda</div>
            <div className={styles.commandDesc}>Muestra la información de todos los comandos disponibles.</div>
          </div>
        </div>

        <div className={styles.callout}>
          <h4>Nota:</h4>
          <p>
            El codigo de los kits, generalmente se le brinda a los admins del server, para que estos puedan compartirselos a su gente
          </p>
        </div>
      </div>
    </div>
  )
}

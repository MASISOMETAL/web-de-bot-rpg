import styles from "../docs.module.css"

export default function Personaje() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Comandos de Personaje</h1>

      <div className={styles.parchment}>
        <h2>Interacciones con el personaje</h2>
        <p>
          Dungon RPG utiliza comandos de barra diagonal (slash commands) para todas sus funciones. Aquí están los
          comandos básicos para empezar:
        </p>
        <p>
          Cada vez que subes de nivel, tienes 5 puntos para asignar a las estadisticas de tu personaje, y revisa si no has aprendido
          una nueva habilidad.
        </p>

        <div className={styles.commandTable}>
          <div className={styles.commandRow}>
            <div className={styles.commandName}>/crear_personaje [Nombre] [Clase]</div>
            <div className={styles.commandDesc}>
              Este comando te permite crear un persnaje dentro del bot, poniendole un nombre, y eligiendo
              una de las categorias disponibles.
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/mi_personaje</div>
            <div className={styles.commandDesc}>
              Muestra las estadisticas y equipamiento de tu personaje.
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/personaje_de [@usuario]</div>
            <div className={styles.commandDesc}>
              Muestra las estadisticas del personaje de un usuario.
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/estadisticas</div>
            <div className={styles.commandDesc}>Muestra estadísticas generales de progreso.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/asignar_puntos [stat] [cantidad]</div>
            <div className={styles.commandDesc}>
              Aumenta tus estadisticas al subir de nivel [stat] elige la estadistica que deseas aumentar, [cantidad] es la cantidad
              de puntos que deseas subir a esa estadistica.
            </div>
          </div>

        </div>

        <h3>Ejemplos de uso</h3>
        <div className={styles.codeBlock}>
          <p>/crear_personaje Jose Guerrero</p>
          <p>/estadisticas</p>
          <p>/asignar_puntos Evasion 3</p>
        </div>

        <div className={styles.callout}>
          <h4>Consejo</h4>
          <p>
            Puedes escribir "/" en el chat de Discord para ver todos los comandos disponibles del bot con sus
            descripciones.
          </p>
          <p>La mayoria de comandos te dejan poner un parametro o te dan opciones para elegir</p>
        </div>
      </div>
    </div>
  )
}

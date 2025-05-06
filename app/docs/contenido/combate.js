import styles from "../docs.module.css"

export default function Combate() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Comandos de combate</h1>

      <div className={styles.parchment}>
        <h2>Economía Medieval</h2>
        <p>
          Dungeon RPG incluye un excelente sistema de ataque, basado en muchas probabilidades, dependiendo no solo de las estadisticas
          sino tambien de los elementos, y muchos otros factores.
        </p>
        <p>
          Cabe destacar, que cada vez que un monstruo en un server es eliminado, este le dará una recompensa de oro y experiencia
          acorde al daño total que le has realizado, y tambien puede tirar un item.
        </p>

        <div className={styles.commandTable}>
          <div className={styles.commandRow}>
            <div className={styles.commandName}>/ataque [ID monstruo] [ID Habilidad]</div>
            <div className={styles.commandDesc}>Ataca un monstruo del servidor (Ver /monstruos) usando su ID y el ID de la habilidad
              que quieras usar (ver /mis_habilidades). Los ataques tienen un enfriamiento de 90 segundos</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/elementos</div>
            <div className={styles.commandDesc}>Muestra la tabla de elementos para ver sus debilidades y resistencias, todos los
              elementos tiene 2 elementos que son mas fuertes para él, y 2 elementos que son mas debiles para él.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/mis_habilidades</div>
            <div className={styles.commandDesc}>Muestra una lista de todas las habilidades por ID que tu personaje tiene aprendidas.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/mis_habilidades [ID]</div>
            <div className={styles.commandDesc}>Muestra en detalle una habilidad por su ID.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/monster</div>
            <div className={styles.commandDesc}>Muestra una lista de todos los monstruos activos del servidor dando su ID, estos monstruos solo
              estarán activos en cada server de manera única, (siempre y cuando se haya seteado el canal de spawn, ver /set_monster_channel [canal]).</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/monster [id]</div>
            <div className={styles.commandDesc}>Muestra a detalle un monstruo en particular segun su ID.</div>
          </div>
        </div>

        <div className={styles.callout}>
          <h4>Nota:</h4>
          <p>
            Al morir un monstruo, manda un mensaje privado a todos los usuarios que participaron en el ataque, diciendo la experiencia
            y el oro ganado.
          </p>
        </div>
      </div>
    </div>
  )
}

import styles from "../docs.module.css"
import { monsters } from "../../../data/monsters"
import MonsterCard from "../../../components/monsterCard"

export default function Monstruos() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Bestiario Dungeon RPG</h1>

      <div className={styles.parchment}>
        <h2>Monstruos</h2>
        <p>
          El mundo de Dungeon RPG está habitado por numerosos monstruos que los aventureros pueden
          encontrar al interactuar en el chat.
        </p>

        <h3>Monstruos</h3>

        {monsters.map(monster => <MonsterCard key={monster.id} monster={monster} />)}

        {/* <div className={styles.callout}>
          <h4>Consejo de Caza</h4>
          <p>
            Estudia las debilidades de los monstruos antes de enfrentarlos. Equipar armas y hechizos que exploten estas
            debilidades puede marcar la diferencia entre la victoria y la derrota.
          </p>
        </div> */}
      </div>
    </div>
  )
}

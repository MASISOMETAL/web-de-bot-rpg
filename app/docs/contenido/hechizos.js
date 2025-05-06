import SkillsTable from "../../../components/skills"
import { skillsByRace } from "../../../data/skills"
import styles from "../docs.module.css"

export default function Hechizos() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Hechizos y Magia</h1>

      <div className={styles.parchment}>
        <h2>Sistema de Magia</h2>
        <p>
          La magia es una fuerza poderosa en el mundo de Dungeon RPG, permitiendo a los usuarios lanzar hechizos con
          diversos efectos.
        </p>

        <h3>Lista de hechizos</h3>

        {Object.entries(skillsByRace).map(([race, skills]) => <SkillsTable key={race} race={race} skills={skills} />)}

        {/* <div className={styles.callout}>
          <h4>Consejo Arcano</h4>
          <p>
            Combina diferentes escuelas de magia para crear estrategias efectivas. Por ejemplo, usa hechizos de control
            para inmovilizar enemigos y luego daño de área para maximizar el impacto.
          </p>
        </div> */}
      </div>
    </div>
  )
}

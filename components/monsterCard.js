import React from 'react'
import styles from "./monsterCard.module.css"

const MonsterCard = ({ monster }) => {
  return (
    <div className={styles.monsterCard}>
      <div className={styles.containerImg}>
        <img src={monster.image} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.containerName}>
          <h4>{monster.name}</h4>
        </div>
        <div>
        <p>{monster.description}</p>
        </div>
        <div className={styles.containerStats}>
          <p>
            <strong>Nivel:</strong> {monster.nivel}
          </p>
          <p>
            <strong>HP:</strong> {monster.stats.hp}
          </p>
          <p>
            <strong>Atk. Físico:</strong> {monster.stats.atkfisico}
          </p>
          <p>
            <strong>Def. Física:</strong> {monster.stats.deffisica}
          </p>
          <p>
            <strong>Atk. Mágico:</strong> {monster.stats.atkmagico}
          </p>
          <p>
            <strong>Def. Mágica:</strong> {monster.stats.defmagica}
          </p>
          <p>
            <strong>Def. Física:</strong> {monster.stats.precision}
          </p>
          <p>
            <strong>Presición:</strong> {monster.stats.evasion}
          </p>
          <p>
            <strong>Evasion:</strong> {monster.stats.hp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MonsterCard
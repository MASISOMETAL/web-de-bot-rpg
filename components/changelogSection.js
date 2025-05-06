'use client'

import { useState } from 'react'
import styles from "./changelogSection.module.css"
import { changelogs } from '../data/changelogs'

const ChangelogSection = () => {
  const [expandedId, setExpandedId] = useState(Math.max(...changelogs.map(item => item.id))) // El primer changelog está expandido por defecto

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className={styles.sectionChangelog}>
      <h2 className={styles.changelogTitle}>Últimas Actualizaciones</h2>
      <div className={styles.changelogContainer}>
        {changelogs.sort((a, b) => b.id - a.id).slice(0, 6).map((item) => (
          <div
            className={`${styles.changelogCard} ${expandedId === item.id ? styles.expanded : ""}`}
            key={item.id}
            onClick={() => toggleExpand(item.id)}
          >
            <div className={styles.changelogHeader}>
              <div className={styles.dateContainer}>
                <span className={styles.dateLabel}>Fecha:</span>
                <span className={styles.dateValue}>{item.fecha}</span>
              </div>
              <div className={styles.expandIcon}>{expandedId === item.id ? "−" : "+"}</div>
            </div>

            {expandedId === item.id && (
              <ul className={styles.changelogList}>
                {item.cambios.map((update, index) => (
                  <li key={index} className={styles.changelogItem}>
                    {update}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChangelogSection
import styles from "./feature-card.module.css"

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

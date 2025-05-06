import Link from "next/link"
import styles from "./page.module.css"
import FeatureCard from "../components/feature-card"
import { changelogs } from "../data/changelogs"
import ChangelogSection from "../components/changelogSection"

export default function Home() {
  const features = [
    {
      title: "Comandos de Rol",
      description: "Crea aventuras épicas con comandos de rol personalizados para tu servidor.",
      icon: "🎭",
    },
    {
      title: "Sistema de Economía",
      description: "Monedas de oro, comercio y tesoros para tus miembros.",
      icon: "💰",
    },
    {
      title: "Batallas Épicas",
      description: "Sistema de combate avanzado con armas y hechizos medievales.",
      icon: "⚔️",
    },
    {
      title: "Sistema de Equipamiento",
      description: "Equipa items a tus personajes, y preparalos para las batallas.",
      icon: "💼",
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Dungeon RPG</h1>
          <p className={styles.description}>
            Transforma tu servidor de Discord en un reino medieval lleno de aventuras.
          </p>
          <p className={styles.description}>
            Colabora en nuestro servidor de discord creando tus propios monstruos o items.
          </p>
          <div className={styles.buttonContainer}>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1366544486477332563&permissions=84992&integration_type=0&scope=bot+applications.commands"
              className={styles.primaryButton}
            >
              Añadir a Discord
            </a>
            <Link href="/docs" className={styles.secondaryButton}>
              Ver Documentación
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Características Principales</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <ChangelogSection />
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>¿Listo para la aventura?</h2>
        <p className={styles.ctaText}>Únete a miles de servidores que ya disfrutan de la experiencia medieval</p>
        <div className={styles.buttonContainer}>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1366544486477332563&permissions=84992&integration_type=0&scope=bot+applications.commands"
            className={styles.primaryButton}
          >
            Añadir a Discord
          </a>
          <a href="https://discord.gg/N7CHH4zvQz" className={styles.primaryButton}>
            Unete a nuestro server
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href="/terminos" className={styles.footerLink}>
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className={styles.footerLink}>
            Políticas de Privacidad
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Dungeon RPG - Todos los derechos reservados</p>
      </footer>
    </main>
  )
}

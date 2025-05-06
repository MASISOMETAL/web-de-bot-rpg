"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./docs.module.css"
import { ChevronDown, ChevronRight } from "lucide-react"

// Componentes de contenido
import Introduccion from "./contenido/introduccion"
import Instalacion from "./contenido/instalacion"
import Personaje from "./contenido/personaje"
import Combate from "./contenido/combate"
import Informacion from "./contenido/informacion"
import Monstruos from "./contenido/monstruos"
import Items from "./contenido/items"
import Hechizos from "./contenido/hechizos"
import InventarioTienda from "./contenido/inventarioTienda"

export default function DocsPage() {
  // Estado para controlar qué sección está activa
  const [activeSection, setActiveSection] = useState("introduccion")

  // Estado para controlar qué categorías están expandidas
  const [expandedCategories, setExpandedCategories] = useState({
    comencemos: true,
    comandos: false,
    contenido: false,
    avanzado: false,
  })

  // Función para alternar la expansión de una categoría
  const toggleCategory = (category) => {    
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    })
  }

  // Función para cambiar la sección activa
  const changeSection = (section) => {
    setActiveSection(section)
  }

  // Mapeo de secciones a componentes
  const sectionComponents = {
    introduccion: <Introduccion />,
    instalacion: <Instalacion />,
    personaje: <Personaje />,
    inventarioTienda: <InventarioTienda />,
    combate: <Combate />,
    informacion: <Informacion />,
    monstruos: <Monstruos />,
    items: <Items />,
    hechizos: <Hechizos />,
  }

  return (
    <div className={styles.docsContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            Dungeon RPG
          </Link>
        </div>

        <nav className={styles.navigation}>
          {/* Categoría: Comencemos */}
          <div className={styles.category}>
            <button className={styles.categoryButton} onClick={() => toggleCategory("comencemos")}>
              {expandedCategories.comencemos ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span>Comencemos</span>
            </button>

            {expandedCategories.comencemos && (
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "introduccion" ? styles.active : ""}`}
                    onClick={() => changeSection("introduccion")}
                  >
                    Introducción
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "instalacion" ? styles.active : ""}`}
                    onClick={() => changeSection("instalacion")}
                  >
                    Instalación
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Categoría: Comandos de Personaje */}
          <div className={styles.category}>
            <button className={styles.categoryButton} onClick={() => toggleCategory("comandos")}>
              {expandedCategories.comandos ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span>Comandos</span>
            </button>

            {expandedCategories.comandos && (
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "personaje" ? styles.active : ""}`}
                    onClick={() => changeSection("personaje")}
                  >
                    Personaje
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "inventarioTienda" ? styles.active : ""}`}
                    onClick={() => changeSection("inventarioTienda")}
                  >
                    Inventario o tienda
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "combate" ? styles.active : ""}`}
                    onClick={() => changeSection("combate")}
                  >
                    Combate
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "informacion" ? styles.active : ""}`}
                    onClick={() => changeSection("informacion")}
                  >
                    Información
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Categoría: Contenido */}
          <div className={styles.category}>
            <button className={styles.categoryButton} onClick={() => toggleCategory("contenido")}>
              {expandedCategories.contenido ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span>Contenido</span>
            </button>

            {expandedCategories.contenido && (
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "monstruos" ? styles.active : ""}`}
                    onClick={() => changeSection("monstruos")}
                  >
                    Monstruos
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "items" ? styles.active : ""}`}
                    onClick={() => changeSection("items")}
                  >
                    Items
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${activeSection === "hechizos" ? styles.active : ""}`}
                    onClick={() => changeSection("hechizos")}
                  >
                    Hechizos
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/terminos" className={styles.sidebarFooterLink}>
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className={styles.sidebarFooterLink}>
            Políticas de Privacidad
          </Link>
        </div>
      </aside>

      <main className={styles.content}>{sectionComponents[activeSection]}</main>
    </div>
  )
}

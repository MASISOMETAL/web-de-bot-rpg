import React, { useRef } from 'react';
import styles from "./skills.module.css";

const SkillsTable = ({ race, skills }) => {
  const tableContainerRef = useRef(null);

  // Función para habilitar desplazamiento con arrastre
  const handleMouseDown = (event) => {
    const container = tableContainerRef.current;
    if (!container) return;

    let startX = event.pageX - container.offsetLeft;
    let scrollLeft = container.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.skillCard}>
      {/* Título con la raza */}
      <h2>{race}</h2>

      {/* Contenedor con scroll horizontal y arrastre */}
      <div
        className={styles.tableContainer}
        ref={tableContainerRef}
        onMouseDown={handleMouseDown}
      >
        <table className={styles.skillTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nivel Desbloqueo</th>
              <th>Tipo</th>
              <th>Daño</th>
              <th>Mana Cost</th>
              <th>Efecto</th>
              <th>Probabilidad Efecto</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.name}>
                <td>{skill.name}</td>
                <td>{skill.unlockLevel}</td>
                <td>{skill.type === "physical" ? "Físico" : "Mágico"}</td>
                <td>{skill.damage}</td>
                <td>{skill.manaCost}</td>
                <td>{skill.effect ? skill.effect : "N/A"}</td>
                <td>{skill.effectChance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsTable;

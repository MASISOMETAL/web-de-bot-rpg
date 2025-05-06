import React, { useRef } from 'react';
import styles from "./itemsCards.module.css";

const ItemsCard = ({ item }) => {
  const tableContainerRef = useRef(null);

  // Manejar el desplazamiento al arrastrar
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
    <div className={styles.itemCard}>
      <h2>{item.category}</h2>
      
      {/* Contenedor con funcionalidad de arrastre */}
      <div className={styles.tableContainer} ref={tableContainerRef} onMouseDown={handleMouseDown}>
        <table className={styles.itemTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nivel</th>
              <th>HP</th>
              <th>Mana</th>
              <th>ATK Físico</th>
              <th>DEF Física</th>
              <th>ATK Mágico</th>
              <th>DEF Mágica</th>
              <th>Precisión</th>
              <th>Evasión</th>
              <th>Usable By</th>
            </tr>
          </thead>
          <tbody>
            {item.items.map((itm) => (
              <tr key={itm.name}>
                <td>{itm.name}</td>
                <td>{itm.nivel}</td>
                <td>{itm.stats.hp}</td>
                <td>{itm.stats.mana}</td>
                <td>{itm.stats.atkfisico}</td>
                <td>{itm.stats.deffisica}</td>
                <td>{itm.stats.atkmagico}</td>
                <td>{itm.stats.defmagica}</td>
                <td>{itm.stats.precision}</td>
                <td>{itm.stats.evasion}</td>
                <td>{itm.usableBy.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsCard;

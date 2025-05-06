import ItemsCard from "../../../components/itemsCard"
import { itemList } from "../../../data/items"
import styles from "../docs.module.css"

export default function Items() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Objetos y Equipamiento</h1>

      <div className={styles.parchment}>
        <h2>Catálogo de Items</h2>
        <p>
          Dungeon RPG cuenta con un extenso catálogo de items que los aventureros pueden obtener, utilizar, equiparse o vender.
        </p>

        <h3>Categorías de Objetos</h3>
        <ul className={styles.featureList}>
          <li>
            <strong>Cascos:</strong> Las mismas se equipan en la cabeza del personaje
          </li>
          <li>
            <strong>Armaduras:</strong> Las mismas se equipan en el pecho del personaje
          </li>
          <li>
            <strong>Pantalones:</strong> Los mismos se equipan en las piernas del personaje
          </li>
          <li>
            <strong>Guantes:</strong> Los mismos se equipan en los brazos del personaje
          </li>
          <li>
            <strong>Botas:</strong> Las mismas se equipan en los pies del personaje
          </li>
          <li>
            <strong>Armas:</strong> Las mismas se equipan en cada mano del personaje
          </li>
          <li>
            <strong>Consumibles:</strong> Objeto de pociones que curan HP o Mana
          </li>
        </ul>

        <h3>Lista de todos los objetos</h3>

        {itemList.map(item => <ItemsCard key={item.category} item={item} />)}

      </div>
    </div>
  )
}

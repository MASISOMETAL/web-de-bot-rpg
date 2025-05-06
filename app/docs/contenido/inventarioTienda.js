import styles from "../docs.module.css"

export default function InventarioTienda() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Comandos de inventario y tienda</h1>

      <div className={styles.parchment}>
        <h2>Sistema de comercio y inventario</h2>
        <p>
          El sistema de comercio de Dungeon RPG, permite comprar, vender items, gestionar tu inventario, equiparte items, etc...
        </p>

        <div className={styles.commandTable}>
          <div className={styles.commandRow}>
            <div className={styles.commandName}>/tienda [categoria]</div>
            <div className={styles.commandDesc}>Te muestra todos los items que hay en venta segun su categoria mostrandote su ID
              , Luego puedes comprar un item con ese ID
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/comprar_item [categoria] [id]</div>
            <div className={styles.commandDesc}>Compras un item de la tienda, seleccionando su categoria y su ID, antes visto en
              /shop.
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/equipar_item [id]</div>
            <div className={styles.commandDesc}>Permite equipar un item que tengas en el inventario (ver comando inventario), el ID que
              pide para ser equipado, es el ID de tu inventario.
            </div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/desequipar_item [slot]</div>
            <div className={styles.commandDesc}>Permite quitar un item equipado, eligiendo su slot (el lugar donde está equipado el item).</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/inventario</div>
            <div className={styles.commandDesc}>Te muestra los items que tenes en el inventario, cada item del inventario tiene su propio
              ID, este ID es el que se usa para equipar un item.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/usar_item [id]</div>
            <div className={styles.commandDesc}>Permite usar un item consumible (pociones) de tu inventario.
              El ID es el ID de tu inventario.</div>
          </div>

          <div className={styles.commandRow}>
            <div className={styles.commandName}>/vender_item [id]</div>
            <div className={styles.commandDesc}>Permite vender un item de tu inventario, segun su ID, el item te dará la mitad de su coste de compra.</div>
          </div>
        </div>

        <div className={styles.callout}>
          <h4>NOTA:</h4>
          <p>
            Existen mas items de los que venden en shop, que puedes obtener matando monstruos.
          </p>
        </div>
      </div>
    </div>
  )
}

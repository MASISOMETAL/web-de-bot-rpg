import styles from "../docs.module.css"

export default function Introduccion() {
  return (
    <div className={styles.docPage}>
      <h1 className={styles.docTitle}>Documentación de Dungeon RPG</h1>

      <div className={styles.parchment}>
        <h2>Bienvenido a la documentación oficial</h2>
        <p>
          Dungon RPG es un bot de Discord diseñado para transformar tu servidor en un reino medieval lleno de
          aventuras, batallas épicas y un sistema de economía basado en monedas de oro.
        </p>

        <h3>¿Qué puedes hacer con Dungon RPG?</h3>
        <ul className={styles.featureList}>
          <li>Crear un personaje elijiendo entre las razas disponibles</li>
          <li>Compra items en una amplia tienda de objetos</li>
          <li>Equipa a tu personaje con armaduras y armas</li>
          <li>Combate contra monstruos de todo tipo en un amplio sistema de ataque</li>
          <li>Sube de nivel y aumenta tus stats al recibir experiencia por matar monstruos</li>
          <li>Colecciona items, oro y experiencia para subir de nivel y hacerte mas fuerte</li>
        </ul>

        <p>
          Explora la documentación utilizando el menú de navegación para descubrir todas las funcionalidades y comandos
          disponibles.
        </p>

        <div className={styles.callout}>
          <h4>¿Necesitas ayuda?</h4>
          <p>
            Si tienes alguna pregunta o problema, no dudes en unirte a nuestro
            <a href="https://discord.gg/N7CHH4zvQz" className={styles.link}>
              {" "}
              servidor de soporte
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

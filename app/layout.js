import "./globals.css"

export const metadata = {
  title: "Dungeon RPG - Tu compañero de Discord",
  description: "Un bot de Discord con estilo RPG para tu servidor",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./dungeon-rpg-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

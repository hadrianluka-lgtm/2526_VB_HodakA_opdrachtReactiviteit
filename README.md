# Artikels De Standaard - Next.js Project

Dit project bevat een overzicht van drie artikels van Dominique Deckmyn (De Standaard) over AI. Het is gebouwd met **Next.js** en **Tailwind CSS**.

## Hoe start je dit project?

Omdat dit een Next.js project is, werkt de standaard "Go Live" knop in VS Code niet. Je moet het project starten via de terminal:

1.  Open de terminal in VS Code (`Ctrl + ` ` of `Terminal > New Terminal`).
2.  Typ het volgende commando en druk op Enter:
    ```bash
    npm run dev
    ```
3.  Open je browser en ga naar: [http://localhost:3000](http://localhost:3000)

## Mappenstructuur

- `pages/`: Bevat de verschillende pagina's van de website.
  - `index.js`: De homepagina.
  - `ai-slop.js`: Artikel 1.
  - `vibecoding.js`: Artikel 2.
  - `dario-amodei.js`: Artikel 3.
- `components/`: Bevat herbruikbare onderdelen zoals de `Navbar`, `Footer` en `Layout`.
- `styles/`: Bevat de globale CSS instellingen voor Tailwind.

## Kenmerken

- **Leesbaarheid**: Gebruik van Tailwind Typography voor een prettige leeservaring.
- **Navigatie**: Een eenvoudige menubalk om tussen artikels te schakelen.
- **Afbeeldingen**: Placeholders voor afbeeldingen zijn toegevoegd; je kunt je eigen foto's toevoegen in de `public/images/` map.
- **Responsiviteit**: De website werkt goed op zowel desktop als mobiel.

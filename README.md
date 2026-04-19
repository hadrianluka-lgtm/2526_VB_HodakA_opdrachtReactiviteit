# De Standaard Analyse - Next.js Project

Dit project bevat een UX/UI analyse van drie artikels van De Standaard over AI. Het is gebouwd met **Next.js** en **Tailwind CSS**.

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

## UX/UI Principes

In dit project is aandacht besteed aan:
- **Leesbaarheid**: Gebruik van het `@tailwindcss/typography` (prose) plugin voor optimale tekstbreedte en regelafstand.
- **Visuele Hiërarchie**: Duidelijk onderscheid tussen koppen, intro's en tekstblokken.
- **Navigatie**: Een consistente navbar om eenvoudig tussen de artikels te schakelen.
- **Responsiviteit**: De website werkt goed op zowel desktop als mobiel.

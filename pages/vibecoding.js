export default function Vibecoding() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">De Helpdesk</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <span>Dominique Deckmyn</span>
          <span className="mx-2">&bull;</span>
          <span>23 januari 2026</span>
        </div>
      </header>

      <img src='/images/artikel2.jpg' alt='Artikel afbeelding' className='w-full h-auto rounded-lg my-8' />

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        <p className="font-bold text-xl leading-snug">
          Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je.
          Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet
          helemaal doet wat je nodig hebt?
        </p>

        <p>
          Het is nog maar januari, maar ‘vibecoding’, ofwel coderen met AI, maakt al een goede
          kans om het woord van 2026 te worden. Onder meer omdat de nieuwste versies van
          Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder
          noemenswaardige voorkennis aan zou kunnen beginnen.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500 my-8">
          <h3 className="text-lg font-bold mb-2">Een eenvoudig spel in 5 stappen:</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Open een chatbot (Claude, ChatGPT, Gemini).</li>
            <li>Geef een prompt (bijv. "Maak een dino-spel").</li>
            <li>Kopieer de gegenereerde code.</li>
            <li>Sla het op als .html bestand.</li>
            <li>Open het bestand in je browser.</li>
          </ol>
        </div>

        <p>
          Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Soms begrijpt de chatbot
          je verkeerd, en moet je wat meer preciseren: “Schrijf het programma in Javascript en zet
          alles in één bestand.”
        </p>

        <p>
          Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Ik liet me elke stap in detail
          uitleggen door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of Supabase.
          Met Codex, VS Code en Github kun je haast alles bouwen. Letterlijk zonder een lijn code te schrijven.
        </p>
      </div>
    </article>
  );
}

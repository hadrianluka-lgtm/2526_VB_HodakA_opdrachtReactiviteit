export default function Vibecoding() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">De Helpdesk</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <img src="/images/ai-slop/writer.png" alt="Dominique Deckmyn" className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <div className="font-bold text-gray-900">Dominique Deckmyn</div>
            <div>23 januari 2026</div>
          </div>
        </div>
      </header>

      <div className="w-full aspect-video bg-gray-200 rounded-lg my-8 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
        <div className="text-center p-4">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-1">Hoofdafbeelding Artikel 2 (Nog toe te voegen)</p>
        </div>
      </div>

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

        <p>
          Wie vorig jaar al eens een spelletje of een app probeerde te maken met ChatGPT of Claude,
          stootte vaak nog op muren. Er zaten fouten in de code, of je moest zelf nog te veel weten
          over hoe je die code moest ‘draaien’ op je computer. Die muren zijn nu grotendeels gesloopt.
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
          Vibecoding is in essentie: praten met de computer tot die heeft gebouwd wat je wil. Je hoeft
          niet te weten wat een ‘div’ of een ‘event listener’ is. Je zegt gewoon: “Ik wil een app die
          bijhoudt hoeveel koppen koffie ik drink en die me een waarschuwing geeft als ik over mijn
          limiet ga.” De AI bouwt het, test het, en geeft je een link die je meteen op je telefoon kunt gebruiken.
        </p>

        <p>
          Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Soms begrijpt de chatbot
          je verkeerd, en moet je wat meer preciseren: “Schrijf het programma in Javascript en zet
          alles in één bestand.”
        </p>

        <p>
          Het grote voordeel is dat je niet meer moet worstelen met syntaxfouten of vergeten puntkomma's.
          De AI neemt de zware last van het vertalen van je ideeën naar instructies voor de computer over.
          Je hoeft alleen maar te controleren of het resultaat overeenkomt met je 'vibe'.
        </p>

        <p>
          Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Ik liet me elke stap in detail
          uitleggen door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of Supabase.
          Met Codex, VS Code en Github kun je haast alles bouwen. Letterlijk zonder een lijn code te schrijven.
        </p>

        <p>
          Natuurlijk zijn er beperkingen. Voor complexe, grootschalige systemen is een echte programmeur
          nog steeds onmisbaar. Maar voor die kleine tool die je leven net wat makkelijker maakt, of die
          website voor je hobbyclub, is vibecoding een absolute gamechanger in 2026.
        </p>
      </div>
    </article>
  );
}

export default function Vibecoding() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
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

      <figure className="my-8">
        <img src="/images/vibecoding/main.png" alt="Vibecoding illustratie" className="w-full max-w-2xl mx-auto block h-auto rounded-lg shadow-lg" />
      </figure>

      <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <figure>
            <img src="/images/vibecoding/gemini-game.png" alt="Gemini T-rex game" className="w-full mx-auto block h-auto rounded border border-gray-200" />
            <figcaption className="text-sm text-gray-500 mt-2 italic">
              Dit spel in Javascript is gegenereerd door Gemini met één prompt: 'Maak een spel waarbij een t-rex een bal moet koppen.'
            </figcaption>
          </figure>
          <figure>
            <img src="/images/vibecoding/chatgpt-game.png" alt="ChatGPT game" className="w-full mx-auto block h-auto rounded border border-gray-200" />
            <figcaption className="text-sm text-gray-500 mt-2 italic">
              ChatGPT schreef dit spel in een aantal stappen, na telkens een kleine bijsturing.
            </figcaption>
          </figure>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-blue-500 my-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Een eenvoudig spel in 5 stappen:</h3>
          <ol className="list-decimal ml-5 space-y-3 text-blue-900 font-medium">
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

        <figure className="my-10">
          <img src="/images/vibecoding/calendar.png" alt="Gezinskalender app" className="w-full max-w-2xl mx-auto block h-auto rounded-lg shadow-md border border-gray-100" />
          <figcaption className="text-sm text-gray-500 mt-3 text-center px-4">
            Deze gezinskalender draait op smartphone en pc, de gegevens worden in de 'cloud' bewaard.
            De eerste versie werd geschreven door ChatGPT, maar de afwerking gebeurde met hulp van ChatGPT Codex.
          </figcaption>
        </figure>

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

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Lees ook:</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/vibecoding/read-also-1.png" alt="Echt waar: Niks ai" className="w-full md:w-48 h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-blue-600 hover:underline cursor-pointer">Echt waar: Niks AI</h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">Soms is de beste technologie helemaal geen technologie.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/vibecoding/read-also-2.png" alt="Cyberhuwelijk" className="w-full md:w-48 h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-blue-600 hover:underline cursor-pointer">Mijn destructieve cyberhuwelijk met Claude</h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">Een persoonlijk verhaal over de grens tussen mens en machine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

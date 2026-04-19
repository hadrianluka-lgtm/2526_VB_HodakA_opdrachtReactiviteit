export default function DarioAmodei() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">De Technocraat</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Was het verzet van Dario Amodei het “Ik ben Spartacus!”-moment van Silicon Valley?
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <img src="/images/ai-slop/writer.png" alt="Dominique Deckmyn" className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <div className="font-bold text-gray-900">Dominique Deckmyn</div>
            <div>13 maart 2026</div>
          </div>
        </div>
      </header>

      <div className="w-full aspect-video bg-gray-200 rounded-lg my-8 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
        <div className="text-center p-4">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-1">Hoofdafbeelding Artikel 3 (Nog toe te voegen)</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        <p className="font-bold text-xl leading-snug">
          Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth, en de rechtszaak
          waar dat nu op uitdraait, lijkt steeds meer op een keerpunt.
        </p>

        <p>
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
          tegendraadse oprichter van Anthropic die de confrontatie met Maga aandurft. De kritiek zit
          verstopt in zogenoemde <em>amicus briefs</em>, documenten waarin bedrijven hun steun
          uitspreken voor Anthropic in zijn juridische strijd tegen het Pentagon.
        </p>

        <p>
          De kern van het conflict is de weigering van Anthropic om hun krachtigste AI-model, Claude 4,
          beschikbaar te stellen voor de selectie van doelwitten bij drone-aanvallen. Amodei beroept
          zich op de statuten van zijn bedrijf, dat is opgericht als een 'Public Benefit Corporation'
          met strikte veiligheidsvoorschriften.
        </p>

        <p>
          De strafmaatregel die minister van “Oorlog” Pete Hegseth Anthropic oplegt creëert
          <span className="bg-yellow-100 px-1 font-medium">“een cultuur van dwang, medeplichtigheid en stilte”</span>.
          Microsoft gaat zelfs nog verder en spreekt voorzichtige steun uit voor de ethische bezwaren.
        </p>

        <p>
          Het draait allemaal om de vraag of een bedrijf het recht heeft om te weigeren zijn technologie
          te laten gebruiken voor doeleinden die indruisen tegen de eigen kernwaarden. Amodei stelt
          dat Anthropic niet zomaar een leverancier is, maar een bewaker van veilige AI.
        </p>

        <p>
          Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat
          zelden vanuit een diepe overtuiging. Maar hoe dan ook: het wordt niet meer zoals vroeger.
          Amodei neemt heel nadrukkelijk en moedig een ethisch standpunt in over AI. Dat is bij de
          topontwikkelaars erg goed ontvangen.
        </p>

        <p>
          De uitkomst van deze strijd zal bepalen of Silicon Valley een willoos werktuig blijft van
          politieke machten, of dat het een eigen moreel kompas kan behouden in een tijd van
          toenemende AI-bewapening.
        </p>
      </div>
    </article>
  );
}

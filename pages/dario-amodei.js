import Link from 'next/link';

export default function DarioAmodei() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">De Technocraat</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Was het verzet van Dario Amodei het “Ik ben Spartacus!”-moment van Silicon Valley?
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <img src="/images/dario-amodei/writer.png" alt="Dominique Deckmyn" className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <div className="font-bold text-gray-900">Dominique Deckmyn</div>
            <div>13 maart 2026</div>
          </div>
        </div>
      </header>

      <img src='/images/dario-amodei/main.png' alt='Dario Amodei illustratie' className='w-full h-auto rounded-lg my-8' />

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

        <img src='/images/dario-amodei/spartacus.png' alt='Billboard protest' className='w-full h-auto rounded-lg my-8 shadow-md' />

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

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Lees ook:</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/dario-amodei/read-further.png" alt="Gerelateerd artikel" className="w-full md:w-48 h-32 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-blue-600 hover:underline cursor-pointer">De grote ChatGPT-boycot: waarom tienduizenden gebruikers opzeggen</h4>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">De onrust in Silicon Valley verspreidt zich naar de gewone gebruiker.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 font-bold hover:underline">
          &larr; Terug naar overzicht
        </Link>
      </div>
    </article>
  );
}

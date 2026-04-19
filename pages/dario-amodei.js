import Link from 'next/link';

export default function DarioAmodei() {
  return (
    <article className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
      <header className="mb-12">
        <div className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-2">De Technocraat</div>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
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

      <div className="prose prose-invert prose-lg max-w-none leading-relaxed space-y-6">
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

        <aside className="my-10 border-l-4 border-blue-500 pl-6 py-4 italic text-2xl text-blue-300 font-serif">
          "Het draait allemaal om de vraag of een bedrijf het recht heeft om te weigeren zijn technologie te laten gebruiken voor doeleinden die indruisen tegen de eigen kernwaarden."
        </aside>

        <p>
          De kern van het conflict is de weigering van Anthropic om hun krachtigste AI-model, Claude 4,
          beschikbaar te stellen voor de selectie van doelwitten bij drone-aanvallen. Amodei beroept
          zich op de statuten van zijn bedrijf, dat is opgericht als een 'Public Benefit Corporation'
          met strikte veiligheidsvoorschriften.
        </p>

        <p>
          De strafmaatregel die minister van “Oorlog” Pete Hegseth Anthropic oplegt creëert
          <span className="bg-slate-700 px-1 font-medium text-yellow-400">“een cultuur van dwang, medeplichtigheid en stilte”</span>.
          Microsoft gaat zelfs nog verder en spreekt voorzichtige steun uit voor de ethische bezwaren.
        </p>

        <figure className="my-10">
          <img src="/images/dario-amodei/pete-hegseth.png" alt="Pete Hegseth" className="w-full h-auto rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
          <figcaption className="text-sm text-slate-400 mt-2 text-center">Pete Hegseth, de nieuwe Amerikaanse minister van Oorlog.</figcaption>
        </figure>

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

        <aside className="my-10 border-r-4 border-blue-500 pr-6 py-4 italic text-2xl text-blue-300 font-serif text-right">
          "Amodei stelt dat Anthropic niet zomaar een leverancier is, maar een bewaker van veilige AI."
        </aside>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-xl font-bold mb-4">Lees ook:</h3>
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/dario-amodei/read-further.png" alt="Gerelateerd artikel" className="w-full md:w-48 h-32 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-blue-400 hover:underline cursor-pointer">De grote ChatGPT-boycot: waarom tienduizenden gebruikers opzeggen</h4>
              <p className="text-sm text-slate-400 mt-2 line-clamp-2">De onrust in Silicon Valley verspreidt zich naar de gewone gebruiker.</p>
            </div>
          </div>
        </div>

        <section className="mt-16 p-8 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Analyse</h2>
          <div className="space-y-4 text-slate-300 text-sm md:text-base">
            <p><strong>Context:</strong> Het artikel gaat over een moment waarop het echt begint te wringen tussen Silicon Valley en de politiek. Het verhaal rond Anthropic en Dario Amodei wordt gebruikt om een grotere vraag te stellen: moeten technologiebedrijven altijd meewerken met de overheid, of mogen ze ook grenzen trekken? Zeker als het gaat over iets zwaars zoals het gebruik van AI in oorlogssituaties.</p>
            <p><strong>Gebruiker:</strong> De tekst is bedoeld voor lezers die niet alleen willen weten wat er gebeurt, maar ook waarom het ertoe doet. Mensen die geïnteresseerd zijn in technologie, maar ook in de ethische en politieke kant ervan. Lezers die graag even stilstaan bij de impact van AI op de samenleving.</p>
            <p><strong>Medium:</strong> Het artikel voelt als een long-read: iets waar je even voor gaat zitten. Geen snel nieuwsbericht, maar een stuk dat de tijd neemt om context te geven en dieper in te gaan op het verhaal. Het heeft iets weg van een analyse of achtergrondstuk.</p>
            <h3 className="font-bold mt-6 text-white">Ontwerpkeuzes:</h3>
            <p>De donkere vormgeving ondersteunt de toon van het artikel. Het maakt alles net iets serieuzer en intenser. De lichte tekst op een donkere achtergrond zorgt voor contrast en focus. De grote citaten tussendoor helpen om even te pauzeren en de belangrijkste ideeën eruit te halen, zonder dat je alles opnieuw moet lezen.</p>
            <p><strong>Reflectie:</strong> Alles samen zorgt ervoor dat de lezer meteen aanvoelt dat dit geen luchtig onderwerp is. De vormgeving en de inhoud versterken elkaar: het oogt zwaar, en dat past ook bij wat er verteld wordt. Daardoor komt de boodschap sterker binnen en blijft het ook langer hangen.</p>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-400 font-bold hover:underline">
          &larr; Terug naar overzicht
        </Link>
      </div>
      </div>
    </article>
  );
}

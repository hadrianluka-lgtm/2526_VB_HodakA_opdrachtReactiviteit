export default function AiSlop() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">De Technocraat</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Leidt AI-slop tot de dood van sociale media?
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <img src="/images/ai-slop/writer.png" alt="Dominique Deckmyn" className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <div className="font-bold text-gray-900">Dominique Deckmyn</div>
            <div>2 januari 2026</div>
          </div>
        </div>
      </header>

      <img src='/images/ai-slop/main.png' alt='AI-slop illustratie' className='w-full h-auto rounded-lg my-8' />

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        <p className="font-bold text-xl leading-snug">
          Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop:
          video’s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan.
          Blijven we daar in 2026 naar kijken?
        </p>

        <p>
          De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen,
          zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een
          realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is:
          willen we daarnaar blijven kijken?
        </p>

        <p>
          Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de
          enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes
          die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op
          Youtube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je worden
          aangeboden van AI afkomstig.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 py-2">
          "Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent
          een nieuw tijdperk in sociale media."
        </blockquote>

        <p>
          Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel
          wezen: hoe meer AI in onze feed, hoe minder video’s we bekijken van professionele
          makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een
          bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen.
        </p>

        <p>
          Vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik
          ’m weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de
          voornaamste auteur was. Wat precies is de sociale dimensie van kijken naar een eindeloze
          stroom van door een computer gegenereerde video’s, aanbevolen door een algoritme?
        </p>

        <div className="my-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 text-center font-semibold">Advertentie</h3>
          <img src="/images/ai-slop/ad.png" alt="Advertentie" className="w-full h-auto rounded shadow-sm" />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Lees ook:</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/ai-slop/read-also.png" alt="Gerelateerd artikel" className="w-full md:w-48 h-32 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-blue-600 hover:underline cursor-pointer">Hoe herken je AI-slop in je tijdlijn?</h4>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">Tips om synthetische content te onderscheiden van echte video's en posts van vrienden.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

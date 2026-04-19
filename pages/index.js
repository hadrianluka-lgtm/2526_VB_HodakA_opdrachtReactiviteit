import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl">
        UX/UI Analyse <span className="text-blue-600">De Standaard</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 leading-8">
        Een analyse van drie artikels over AI op basis van UX- en UI-principes,
        geïmplementeerd in een Next.js webpagina.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <Link href="/ai-slop" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h2 className="text-xl font-bold text-gray-900">1. AI-Slop</h2>
          <p className="mt-2 text-gray-600 text-sm">Over de dood van sociale media door AI-video's.</p>
        </Link>

        <Link href="/vibecoding" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h2 className="text-xl font-bold text-gray-900">2. Vibecoding</h2>
          <p className="mt-2 text-gray-600 text-sm">Zelf apps en games maken met AI in enkele minuten.</p>
        </Link>

        <Link href="/dario-amodei" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h2 className="text-xl font-bold text-gray-900">3. Dario Amodei</h2>
          <p className="mt-2 text-gray-600 text-sm">De ethische strijd van Anthropic in Silicon Valley.</p>
        </Link>
      </div>
    </div>
  );
}

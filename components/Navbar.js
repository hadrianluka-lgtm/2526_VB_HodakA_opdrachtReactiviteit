import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              De Standaard Analyse
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ai-slop" className="text-gray-700 hover:text-blue-600 font-medium transition">
              AI-Slop
            </Link>
            <Link href="/vibecoding" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Vibecoding
            </Link>
            <Link href="/dario-amodei" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Dario Amodei
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

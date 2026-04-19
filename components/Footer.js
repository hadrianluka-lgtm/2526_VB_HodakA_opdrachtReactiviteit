export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Artikels De Standaard
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Gemaakt met Next.js en Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

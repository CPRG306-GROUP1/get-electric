export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </a>
          <span className="text-gray-500">|</span>
          <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
            Terms
          </a>
          <span className="text-gray-500">|</span>
          <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy
          </a>
        </div>
        <p className="text-gray-300">
          © 2025 Get Electric. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Calgary, AB, Canada
        </p>
      </div>
    </footer>
  );
}
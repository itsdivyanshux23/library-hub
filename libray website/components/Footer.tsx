
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-pacifico text-blue-400 mb-4">
              StudyBooks
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Access quality textbooks for BSc Computer Science and Data Science at affordable prices. Just ₹30 per book with new content every semester.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full cursor-pointer hover:bg-blue-500 transition-colors">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-pink-600 rounded-full cursor-pointer hover:bg-pink-700 transition-colors">
                <i className="ri-instagram-fill"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/books" className="text-gray-300 hover:text-white transition-colors cursor-pointer">All Books</Link></li>
              <li><Link href="/cs-books" className="text-gray-300 hover:text-white transition-colors cursor-pointer">CS Books</Link></li>
              <li><Link href="/ds-books" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Data Science</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 StudyBooks. All rights reserved. | Quality education at affordable prices.
          </p>
        </div>
      </div>
    </footer>
  );
}


'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20students%20studying%20with%20digital%20textbooks%20and%20laptops%20in%20a%20bright%20contemporary%20library%20setting%2C%20soft%20blue%20and%20white%20color%20scheme%2C%20clean%20minimalist%20design%2C%20professional%20academic%20atmosphere%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20students%20collaborating%20and%20learning%20together%2C%20high-tech%20educational%20environment&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative z-10 px-6 py-20 w-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Quality Textbooks for
                <span className="text-blue-600 block">BSc Students</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Access comprehensive textbooks for Computer Science and Data Science programs. 
                Updated every semester with the latest curriculum. Just ₹30 per book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/books" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Browse Books
                </Link>
                <Link 
                  href="/pricing" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StudyBooks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the most affordable and up-to-date textbooks for your academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-money-rupee-circle-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Pricing</h3>
              <p className="text-gray-600 text-lg">
                Just ₹30 per textbook. Quality education shouldn't break the bank.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-refresh-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Updated Content</h3>
              <p className="text-gray-600 text-lg">
                Fresh content uploaded every semester to match current curriculum.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-book-open-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CS & Data Science</h3>
              <p className="text-gray-600 text-lg">
                Specialized content for Computer Science and Data Science programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Textbooks</h2>
            <p className="text-xl text-gray-600">
              Most accessed books by students this semester
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: '1',
                title: "Database Management Systems",
                semester: "Semester 4",
                subject: "Computer Science",
                downloads: "3,247",
                image: "https://readdy.ai/api/search-image?query=Database%20management%20systems%20textbook%20cover%20with%20database%20schemas%20and%20SQL%20query%20examples%2C%20professional%20academic%20design%2C%20blue%20and%20orange%20color%20palette%2C%20clean%20educational%20book%20layout%2C%20Mumbai%20University%20curriculum%20focus&width=400&height=500&seq=book-1&orientation=portrait"
              },
              {
                id: '2',
                title: "Operating Systems Concepts",
                semester: "Semester 5",
                subject: "Computer Science",
                downloads: "2,864",
                image: "https://readdy.ai/api/search-image?query=Operating%20systems%20textbook%20cover%20with%20process%20management%20diagrams%20and%20system%20architecture%2C%20professional%20academic%20design%2C%20green%20and%20blue%20color%20scheme%2C%20modern%20educational%20book%20appearance%2C%20technical%20graphics&width=400&height=500&seq=book-2&orientation=portrait"
              },
              {
                id: '3',
                title: "Computer Networks & Security",
                semester: "Semester 6",
                subject: "Computer Science",
                downloads: "2,531",
                image: "https://readdy.ai/api/search-image?query=Computer%20networks%20textbook%20cover%20with%20network%20topology%20diagrams%20and%20security%20protocols%2C%20professional%20academic%20design%2C%20purple%20and%20blue%20color%20palette%2C%20clean%20educational%20book%20layout&width=400&height=500&seq=book-3&orientation=portrait"
              }
            ].map((book, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {book.subject}
                    </span>
                    <span className="text-gray-500 text-sm">{book.semester}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{book.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      <i className="ri-download-line mr-1"></i>
                      {book.downloads} downloads
                    </span>
                    <span className="text-2xl font-bold text-blue-600">₹30</span>
                  </div>
                  <Link 
                    href={`/book/${book.id}`}
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer block text-center"
                  >
                    Access Book
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/books" 
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Affordable Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">
            Quality education shouldn't be expensive. Access any textbook for just ₹30.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="text-6xl font-bold mb-4">₹30</div>
            <div className="text-2xl mb-8">per textbook</div>
            <ul className="text-lg mb-8 space-y-3">
              <li className="flex items-center justify-center">
                <i className="ri-check-line text-2xl mr-3"></i>
                Lifetime access to purchased books
              </li>
              <li className="flex items-center justify-center">
                <i className="ri-check-line text-2xl mr-3"></i>
                Updated content every semester
              </li>
              <li className="flex items-center justify-center">
                <i className="ri-check-line text-2xl mr-3"></i>
                Download and offline reading
              </li>
              <li className="flex items-center justify-center">
                <i className="ri-check-line text-2xl mr-3"></i>
                24/7 customer support
              </li>
            </ul>
            <Link 
              href="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">
            Join thousands of students who trust StudyBooks for their academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Create Account
            </Link>
            <Link 
              href="/books" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

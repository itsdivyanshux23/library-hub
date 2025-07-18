
'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface BookDetailProps {
  bookId: string;
}

export default function BookDetail({ bookId }: BookDetailProps) {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const books = {
    '1': {
      title: "Database Management Systems",
      semester: "Semester 4",
      subject: "Computer Science",
      downloads: "3,247",
      price: 30,
      author: "Prof. Ramesh Desai",
      pages: 456,
      edition: "Mumbai University Edition",
      description: "Comprehensive guide to database systems covering relational databases, SQL, normalization, and transaction management. Aligned with Mumbai University BSc Computer Science syllabus.",
      topics: [
        "Relational Database Design",
        "SQL Queries & Optimization", 
        "Normalization & ACID Properties",
        "Transaction Management",
        "Database Security",
        "NoSQL Databases"
      ],
      image: "https://readdy.ai/api/search-image?query=Database%20management%20systems%20textbook%20cover%20with%20database%20schemas%20and%20SQL%20query%20examples%2C%20professional%20academic%20design%2C%20blue%20and%20orange%20color%20palette%2C%20clean%20educational%20book%20layout%2C%20Mumbai%20University%20curriculum%20focus&width=400&height=500&seq=book-1&orientation=portrait"
    },
    '2': {
      title: "Operating Systems Concepts",
      semester: "Semester 5", 
      subject: "Computer Science",
      downloads: "2,864",
      price: 30,
      author: "Dr. Priya Sharma",
      pages: 398,
      edition: "Mumbai University Edition",
      description: "Essential operating systems concepts including process management, memory management, file systems, and security. Designed for Mumbai University Computer Science curriculum.",
      topics: [
        "Process & Thread Management",
        "Memory Management",
        "File System Organization", 
        "CPU Scheduling Algorithms",
        "Deadlock Prevention",
        "System Security"
      ],
      image: "https://readdy.ai/api/search-image?query=Operating%20systems%20textbook%20cover%20with%20process%20management%20diagrams%20and%20system%20architecture%2C%20professional%20academic%20design%2C%20green%20and%20blue%20color%20scheme%2C%20modern%20educational%20book%20appearance%2C%20technical%20graphics&width=400&height=500&seq=book-2&orientation=portrait"
    },
    '3': {
      title: "Computer Networks & Security",
      semester: "Semester 6",
      subject: "Computer Science", 
      downloads: "2,531",
      price: 30,
      author: "Prof. Anil Kulkarni",
      pages: 412,
      edition: "Mumbai University Edition",
      description: "Complete coverage of computer networks and cybersecurity fundamentals including network protocols, routing, and security mechanisms. Mumbai University syllabus compliant.",
      topics: [
        "Network Protocols & Models",
        "Routing & Switching",
        "Network Security",
        "Wireless Networks",
        "Cryptography Basics",
        "Network Management"
      ],
      image: "https://readdy.ai/api/search-image?query=Computer%20networks%20textbook%20cover%20with%20network%20topology%20diagrams%20and%20security%20protocols%2C%20professional%20academic%20design%2C%20purple%20and%20blue%20color%20palette%2C%20clean%20educational%20book%20layout&width=400&height=500&seq=book-3&orientation=portrait"
    }
  };

  const book = books[bookId as keyof typeof books];

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={book.image}
              alt={book.title}
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {book.subject}
              </span>
              <span className="text-gray-500">{book.semester}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{book.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="text-sm text-gray-500">Author</div>
                <div className="font-semibold text-gray-900">{book.author}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Pages</div>
                <div className="font-semibold text-gray-900">{book.pages}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Edition</div>
                <div className="font-semibold text-gray-900">{book.edition}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Downloads</div>
                <div className="font-semibold text-gray-900">{book.downloads}</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Topics Covered</h3>
              <div className="grid grid-cols-2 gap-2">
                {book.topics.map((topic, index) => (
                  <div key={index} className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="text-3xl font-bold text-blue-600">₹{book.price}</div>
              <div className="text-gray-500">One-time payment</div>
            </div>

            <button 
              onClick={() => setShowPurchaseModal(true)}
              className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer mb-4"
            >
              Purchase & Access Book
            </button>

            <div className="text-center text-gray-500 text-sm">
              Lifetime access • Download & offline reading • Updated content
            </div>
          </div>
        </div>
      </div>

      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-book-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase Book</h3>
              <p className="text-gray-600">{book.title}</p>
            </div>

            <div className="border rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Book Price</span>
                <span className="font-semibold">₹{book.price}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Platform Fee</span>
                <span className="font-semibold">₹0</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-xl text-blue-600">₹{book.price}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Pay with UPI
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                Credit/Debit Card
              </button>
            </div>

            <button 
              onClick={() => setShowPurchaseModal(false)}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

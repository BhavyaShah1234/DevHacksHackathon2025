
import React from "react";
import { Accessibility } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <Accessibility className="h-6 w-6 text-prosthetic-500" />
              <span className="text-xl font-bold text-prosthetic-700">ProsPal</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Empowering lives through custom prosthetic solutions for accessibility challenges.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-prosthetic-700">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/generator" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Prototype Generator
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-prosthetic-700">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prosthetic-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-prosthetic-700">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-600">
              Subscribe to our newsletter for updates on new features and resources.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-prosthetic-500 focus:outline-none focus:ring-1 focus:ring-prosthetic-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md border border-prosthetic-500 bg-prosthetic-500 px-3 py-2 text-sm text-white hover:bg-prosthetic-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ProsPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Accessibility className="h-8 w-8 text-prosthetic-500" />
          <span className="text-xl font-bold text-prosthetic-700">
            ProsPal
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-prosthetic-600 hover:text-prosthetic-800 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-prosthetic-600 hover:text-prosthetic-800 transition-colors">
            About
          </Link>
          <Link to="/generator" className="text-prosthetic-600 hover:text-prosthetic-800 transition-colors">
            Generator
          </Link>
          <Link to="/resources" className="text-prosthetic-600 hover:text-prosthetic-800 transition-colors">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border-prosthetic-300 text-prosthetic-600">
            Login
          </Button>
          <Button className="bg-prosthetic-500 hover:bg-prosthetic-600">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

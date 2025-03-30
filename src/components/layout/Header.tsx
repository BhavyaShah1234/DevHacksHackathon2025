
import React from "react";
import { Link } from "react-router-dom";
import { Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="w-full border-b bg-white dark:bg-prosthetic-900 dark:border-prosthetic-800 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
        <Accessibility className="h-8 w-8 text-prosthetic-500 dark:text-prosthetic-400" />
        <span className="text-xl font-bold text-prosthetic-700 dark:text-prosthetic-300">
            ProsPal
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-prosthetic-600 hover:text-prosthetic-800 dark:text-prosthetic-400 dark:hover:text-prosthetic-200 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-prosthetic-600 hover:text-prosthetic-800 dark:text-prosthetic-400 dark:hover:text-prosthetic-200 transition-colors">
            About
          </Link>
          <Link to="/generator" className="text-prosthetic-600 hover:text-prosthetic-800 dark:text-prosthetic-400 dark:hover:text-prosthetic-200 transition-colors">
            Generator
          </Link>
          <Link to="/resources" className="text-prosthetic-600 hover:text-prosthetic-800 dark:text-prosthetic-400 dark:hover:text-prosthetic-200 transition-colors">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <ThemeToggle />
          <Button className="bg-prosthetic-500 hover:bg-prosthetic-600 dark:bg-prosthetic-600 dark:hover:bg-prosthetic-700">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

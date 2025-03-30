import React, { createContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Check for saved theme preference or default to 'light'
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  // Apply the theme class to the document when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === "dark" ? "light" : "dark";
    
    root.classList.remove(oldTheme);
    root.classList.add(theme);
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
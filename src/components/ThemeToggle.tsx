import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-mobile";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-prosthetic-300 dark:border-prosthetic-600"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-prosthetic-700" />
      ) : (
        <Sun className="h-5 w-5 text-prosthetic-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
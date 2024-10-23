// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" && localStorage.theme === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-8 w-12 rounded-full border-2 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
    >  
      <span
        className={`absolute left-1 h-6 w-6 rounded-full transition-transform duration-300 ${
          theme === "dark"
            ? "transform translate-x-4 bg-yellow-500"
            : "bg-white"
        }`}
      >
        <span className="text-sm text-gray-800 flex items-center justify-center w-full">
          {theme === "dark" ? (
            <i className="ri-sun-line text-black "></i>
          ) : (
            <i className="ri-moon-line text-gray-800 "></i>
          )}
        </span>
      </span>

      {/* Show icons based on the theme */}
    </button>
  );
}

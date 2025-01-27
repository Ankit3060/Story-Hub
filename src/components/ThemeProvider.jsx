import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none dark:bg-orange-400 dark:hover:bg-orange-500 cursor-pointer"
        >
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}


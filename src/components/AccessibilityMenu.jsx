import { useTheme } from "../components/ThemeProvider";
import { useState } from "react";
import { Accessibility, Sun, Moon, ZoomIn, Menu, X } from "lucide-react";

export default function AccessibilityMenu({ setIsAccessibilityEnabled }) {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMagnifierEnabled, setIsMagnifierEnabled] = useState(false);
  const [isHighContrastEnabled, setIsHighContrastEnabled] = useState(false);

  // Handle high contrast mode without affecting layout positioning
  const toggleHighContrast = () => {
    setIsHighContrastEnabled(!isHighContrastEnabled);
    document.documentElement.classList.toggle("high-contrast", !isHighContrastEnabled);
  };

  return (
    <div className={`fixed bottom-3 sm:bottom-4 right-3 sm:right-4 z-50 ${isHighContrastEnabled ? "high-contrast-button" : ""}`}>
      <div className="bg-white dark:bg-gray-800 p-2 sm:p-3 shadow-lg rounded-lg flex flex-col gap-1 sm:gap-2">
        <button
          className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400 text-sm sm:text-base"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle accessibility menu"
        >
          {isMenuOpen ? <X size={18} /> : <Accessibility size={18} />}
          <span className="hidden sm:inline">Accessibility</span>
        </button>

        {isMenuOpen && (
          <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-white shadow-lg rounded-lg flex flex-col gap-1 sm:gap-2 dark:bg-gray-700 w-48 sm:w-auto">
            {/* Dark Mode Toggle */}
            <button
              className="flex items-center gap-1 sm:gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400 text-sm sm:text-base"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun size={16} className="flex-shrink-0" /> : <Moon size={16} className="flex-shrink-0" />} 
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Magnifier Toggle */}
            <button
              className="flex items-center gap-1 sm:gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400 text-sm sm:text-base"
              onClick={() => {
                setIsMagnifierEnabled(!isMagnifierEnabled);
                setIsAccessibilityEnabled(!isMagnifierEnabled);
              }}
            >
              <ZoomIn size={16} className="flex-shrink-0" /> 
              <span>{isMagnifierEnabled ? "Disable Magnifier" : "Enable Magnifier"}</span>
            </button>

            {/* High Contrast Mode Toggle */}
            <button
              className="flex items-center gap-1 sm:gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400 text-sm sm:text-base"
              onClick={toggleHighContrast}
            >
              <Accessibility size={16} className="flex-shrink-0" /> 
              <span>{isHighContrastEnabled ? "Disable Contrast" : "Enable Contrast"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
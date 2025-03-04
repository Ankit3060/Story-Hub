import { useTheme } from "../components/ThemeProvider";
import { useState } from "react";
import { Accessibility, Sun, Moon, ZoomIn } from "lucide-react";

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
    <div className={`fixed bottom-4 right-4 z-50 ${isHighContrastEnabled ? "high-contrast-button" : ""}`}>
      <div className="bg-white dark:bg-gray-800 p-3 shadow-lg rounded-lg flex flex-col gap-2">
        <button
          className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Accessibility /> Accessibility
        </button>

        {isMenuOpen && (
          <div className="mt-2 p-3 bg-white shadow-lg rounded-lg flex flex-col gap-2 dark:bg-gray-700">
            {/* Dark Mode Toggle */}
            <button
              className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun /> : <Moon />} {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Magnifier Toggle */}
            <button
              className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
              onClick={() => {
                setIsMagnifierEnabled(!isMagnifierEnabled);
                setIsAccessibilityEnabled(!isMagnifierEnabled);
              }}
            >
              <ZoomIn /> {isMagnifierEnabled ? "Disable Magnifier" : "Enable Magnifier"}
            </button>

            {/* High Contrast Mode Toggle */}
            <button
              className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
              onClick={toggleHighContrast}
            >
              <Accessibility /> {isHighContrastEnabled ? "Disable High Contrast" : "Enable High Contrast"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

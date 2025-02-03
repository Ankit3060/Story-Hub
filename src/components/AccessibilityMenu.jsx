import { useTheme } from "../components/ThemeProvider";
import { useState } from "react";
import { Accessibility, Sun, Moon, ZoomIn } from "lucide-react";

export default function AccessibilityMenu({ setIsAccessibilityEnabled }) {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMagnifierEnabled, setIsMagnifierEnabled] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-3 shadow-lg rounded-lg flex flex-col gap-2">
      <button
        className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Accessibility /> Accessibility
      </button>

      {isMenuOpen && (
        <div className="mt-2 p-3 bg-white shadow-lg rounded-lg flex flex-col gap-2 dark:bg-gray-700">
          <button
            className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun /> : <Moon />} {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
            onClick={() => {
              setIsMagnifierEnabled(!isMagnifierEnabled); 
              setIsAccessibilityEnabled(!isMagnifierEnabled);
            }}
          >
            <ZoomIn /> {isMagnifierEnabled ? "Disable Magnifier" : "Enable Magnifier"}
          </button>

          <button
            className="flex items-center gap-2 p-2 rounded-lg text-orange-500 dark:text-orange-400"
            onClick={() => setIsAccessibilityEnabled(prev => !prev)} 
          >
            <Accessibility /> Accessibility: {isMagnifierEnabled ? "On" : "Off"}
          </button>
        </div>
      )}
    </div>
  );
}

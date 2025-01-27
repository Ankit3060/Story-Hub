export default function Header({ isAccessibilityEnabled, setIsAccessibilityEnabled }) {
    return (
      <header className="bg-white shadow-sm py-4 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-orange-500 dark:text-orange-400">StoryHub</h1>
          <div className="flex items-center gap-4">
            <button
              className="text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 hover:text-orange-600 focus:outline-none cursor-pointer"
              onClick={() => setIsAccessibilityEnabled(!isAccessibilityEnabled)}
            >
              Accessibility: {isAccessibilityEnabled ? "On" : "Off"}
            </button>
          </div>
        </div>
      </header>
    );
  }

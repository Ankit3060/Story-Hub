import React, { useState } from "react";
import StoryList from "./StoryList.jsx";
import Magnifier from "./Magnifier.jsx";

function Home({ isAccessibilityEnabled, stories }) {
  const [hoveredText, setHoveredText] = useState("");

  const handleHover = (text) => setHoveredText(text);
  
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 py-4 sm:py-8">
      {stories.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <h2 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2 sm:mb-4 dark:text-orange-400">No stories found</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            No stories match the selected category. Try choosing a different category.
          </p>
        </div>
      ) : (
        <StoryList
          stories={stories}
          isAccessibilityEnabled={isAccessibilityEnabled}
          handleHover={handleHover}
        />
      )}
      {isAccessibilityEnabled && hoveredText && (
        <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto w-full sm:w-auto sm:max-w-md px-4">
          <Magnifier hoveredText={hoveredText} />
        </div>
      )}
    </div>
  );
}

export default Home;
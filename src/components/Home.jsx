import React, { useState } from "react";
import StoryList from "./StoryList.jsx";
import Magnifier from "./Magnifier.jsx";

function Home({ isAccessibilityEnabled, stories }) {
  const [hoveredText, setHoveredText] = useState("");

  const handleHover = (text) => setHoveredText(text);
  
  return (
    <div className="min-h-screen container mx-auto px-6 py-8">
      {stories.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-orange-600 mb-4 dark:text-orange-400">No stories found</h2>
          <p className="text-gray-700 dark:text-gray-300">
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
      {isAccessibilityEnabled && hoveredText && <Magnifier hoveredText={hoveredText} />}
    </div>
  );
}

export default Home;
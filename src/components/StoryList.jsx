import { motion } from 'framer-motion';

export default function StoryList({ stories, isAccessibilityEnabled, handleTextToSpeech, handleHover }) {
    return (
      <div className="flex flex-col gap-8">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-semibold text-orange-600 mb-4 dark:text-orange-400">{story.title}</h2>
            <p
              onMouseOver={(e) => isAccessibilityEnabled && handleHover(e.target.textContent)}
              onMouseOut={() => handleHover("")}
              className="text-gray-700 cursor-pointer dark:text-gray-300"
              onClick={() => isAccessibilityEnabled && handleTextToSpeech(story.content)}
            >
              {story.content}
            </p>
            <div className="mt-4">
              <button
                className="px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors dark:bg-orange-400 dark:hover:bg-orange-500 cursor-pointer focus:outline-none"
                onClick={() => handleTextToSpeech(story.content)}
              >
                Play Story
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
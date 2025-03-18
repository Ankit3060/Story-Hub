import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Header({ isAccessibilityEnabled, setIsAccessibilityEnabled, setFilteredStories, originalStories }) {
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [secondLevelOpen, setSecondLevelOpen] = useState(false);
  const [thirdLevelOpen, setThirdLevelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    fiction: ["The Brave Little Fox", "The Wise Old Owl", "The Lost Star"],
    nonFiction: ["The Journey of a Raindrop"],
    children: ["The Brave Little Fox", "The Curious Kitten"],
    teens: ["The Lost Star", "The Wise Old Owl"],
    adult: {
      thriller: ["The Dark Night"],
      romance: ["Love in Paris"],
      scifi: ["The Lost Star"],
      mystery: ["The Hidden Clue"],
      fantasy: ["The Magical Forest"]
    },
    senior: ["The Wise Old Owl"],
    popular: ["The Brave Little Fox", "The Lost Star"],
    new: ["The Journey of a Raindrop", "The Curious Kitten"]
  };

  const filterStories = (category, subcategory = null) => {
    setMainDropdownOpen(false);
    setSecondLevelOpen(false);
    setThirdLevelOpen(false);
    
    let filteredTitles = [];
    
    if (subcategory && category === 'adult') {
      filteredTitles = categories.adult[subcategory] || [];
    } else {
      filteredTitles = categories[category] || [];
    }
    
    setActiveCategory(subcategory ? `${category}/${subcategory}` : category);
    
    const filtered = originalStories.filter(story => 
      filteredTitles.includes(story.title)
    );
    
    setFilteredStories(filtered.length > 0 ? filtered : originalStories);
  };

  const showAllStories = () => {
    setActiveCategory(null);
    setFilteredStories(originalStories);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setMainDropdownOpen(false);
      setSecondLevelOpen(false);
      setThirdLevelOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm py-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-orange-500 dark:text-orange-400">StoryHub</h1>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="mr-10 text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
            onClick={showAllStories}
          >
            Home
          </NavLink>

          <div className="relative mr-10">
            <button
              className={`flex items-center text-sm font-medium cursor-pointer ${activeCategory ? 'font-bold' : ''} text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500`}
              onClick={(e) => {
                e.stopPropagation();
                setMainDropdownOpen(!mainDropdownOpen);
              }}
            >
              Browse Categories {activeCategory && `(${activeCategory})`} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {mainDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]">
                <button 
                  className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  onClick={() => filterStories('fiction')}
                >
                  Fiction
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  onClick={() => filterStories('nonFiction')}
                >
                  Non-Fiction
                </button>
                
                <div className="relative">
                  <button 
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSecondLevelOpen(!secondLevelOpen);
                    }}
                  >
                    By Age Group
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                  
                  {secondLevelOpen && (
                    <div className="absolute left-full top-0 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]">
                      <button 
                        className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                        onClick={() => filterStories('children')}
                      >
                        Children's Stories
                      </button>
                      <button 
                        className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                        onClick={() => filterStories('teens')}
                      >
                        Teen Stories
                      </button>
                      
                      <div className="relative">
                        <button 
                          className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            setThirdLevelOpen(!thirdLevelOpen);
                          }}
                        >
                          Adult Fiction
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                        
                        {thirdLevelOpen && (
                          <div className="absolute left-full top-0 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]">
                            <button 
                              className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                              onClick={() => filterStories('adult', 'thriller')}
                            >
                              Thriller
                            </button>
                            <button 
                              className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                              onClick={() => filterStories('adult', 'romance')}
                            >
                              Romance
                            </button>
                            <button 
                              className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                              onClick={() => filterStories('adult', 'scifi')}
                            >
                              Science Fiction
                            </button>
                            <button 
                              className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                              onClick={() => filterStories('adult', 'mystery')}
                            >
                              Mystery
                            </button>
                            <button 
                              className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                              onClick={() => filterStories('adult', 'fantasy')}
                            >
                              Fantasy
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <button 
                        className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                        onClick={() => filterStories('senior')}
                      >
                        Senior Stories
                      </button>
                    </div>
                  )}
                </div>
                
                <button 
                  className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  onClick={() => filterStories('popular')}
                >
                  Popular Stories
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  onClick={() => filterStories('new')}
                >
                  Newest Stories
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-left w-full text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-600 font-bold"
                  onClick={showAllStories}
                >
                  Show All Stories
                </button>
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            className="mr-10 text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
          >
            About Us
          </NavLink>
          <button
            className={`mr-10 cursor-pointer text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 ${
              isAccessibilityEnabled  
            }`}
            onClick={() => setIsAccessibilityEnabled(!isAccessibilityEnabled)}
          >
            Accessibility: {isAccessibilityEnabled ? "On" : "Off"}
          </button>
        </div>
      </div>
    </header>
  );
}
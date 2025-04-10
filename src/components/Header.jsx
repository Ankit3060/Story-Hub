import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Header({ isAccessibilityEnabled, setIsAccessibilityEnabled, setFilteredStories, originalStories }) {
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [secondLevelOpen, setSecondLevelOpen] = useState(false);
  const [thirdLevelOpen, setThirdLevelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef(null);

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
    setMobileMenuOpen(false);
    
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
    setMobileMenuOpen(false);
  };

  // Only apply the click outside handler for desktop view
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth > 768 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMainDropdownOpen(false);
        setSecondLevelOpen(false);
        setThirdLevelOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (dropdownSetter, currentState) => {
    dropdownSetter(!currentState);
  };

  // Check screen position and adjust dropdown direction
  const getDesktopDropdownPosition = () => {
    if (!dropdownRef.current) return {};
    
    const rect = dropdownRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // If dropdown is close to right edge of screen, align it to the right
    if (rect.right + 180 > viewportWidth) {
      return { right: 0 };
    }
    return { left: 0 };
  };

  return (
    <header className="bg-white shadow-sm py-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl md:text-2xl font-bold text-orange-500 dark:text-orange-400">
          <NavLink to="/" className="hover:text-orange-600 dark:hover:text-orange-500"
            onClick={showAllStories}  >
          StoryHub
          </NavLink>
        </h1>
        
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-orange-500 dark:text-orange-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <NavLink
            to="/"
            className="px-2 lg:px-3 py-1 text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
            onClick={showAllStories}
          >
            Home
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center px-2 lg:px-3 py-1 text-sm font-medium cursor-pointer ${activeCategory ? 'font-bold' : ''} text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500`}
              onClick={() => setMainDropdownOpen(!mainDropdownOpen)}
              aria-expanded={mainDropdownOpen}
              aria-haspopup="true"
            >
              Browse Categories {activeCategory && `(${activeCategory})`} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {mainDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]" style={getDesktopDropdownPosition()}>
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
                    aria-expanded={secondLevelOpen}
                    aria-haspopup="true"
                  >
                    By Age Group
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                  
                  {secondLevelOpen && (
                    <div className="absolute top-0 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]"
                         style={dropdownRef.current && dropdownRef.current.getBoundingClientRect().right + 360 > window.innerWidth 
                                ? { right: '100%' } : { left: '100%' }}>
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
                          aria-expanded={thirdLevelOpen}
                          aria-haspopup="true"
                        >
                          Adult Fiction
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                        
                        {thirdLevelOpen && (
                          <div className="absolute top-0 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 min-w-[180px]"
                               style={dropdownRef.current && dropdownRef.current.getBoundingClientRect().right + 540 > window.innerWidth 
                                      ? { right: '100%' } : { left: '100%' }}>
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
            className="px-2 lg:px-3 py-1 text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
          >
            About Us
          </NavLink>
          
          <button
            className={`px-2 lg:px-3 py-1 cursor-pointer text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 ${
              isAccessibilityEnabled  
            }`}
            onClick={() => setIsAccessibilityEnabled(!isAccessibilityEnabled)}
          >
            Accessibility: {isAccessibilityEnabled ? "On" : "Off"}
          </button>
        </div>
        
        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 md:hidden">
            <div className="h-full w-64 bg-white dark:bg-gray-800 shadow-xl p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-orange-500 dark:text-orange-400">Menu</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <NavLink
                  to="/"
                  className="block py-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
                  onClick={showAllStories}
                >
                  Home
                </NavLink>
                
                <div className="py-2">
                  <button
                    className={`flex items-center justify-between w-full ${activeCategory ? 'font-bold' : ''} text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500`}
                    onClick={() => toggleMobileDropdown(setMainDropdownOpen, mainDropdownOpen)}
                    aria-expanded={mainDropdownOpen}
                    aria-haspopup="true"
                  >
                    Browse Categories
                    <ChevronDown className={`h-5 w-5 transform ${mainDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mainDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <button 
                        className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                        onClick={(e) => {
                          e.preventDefault();
                          filterStories('fiction');
                        }}
                      >
                        Fiction
                      </button>
                      <button 
                        className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                        onClick={(e) => {
                          e.preventDefault();
                          filterStories('nonFiction');
                        }}
                      >
                        Non-Fiction
                      </button>
                      
                      <div>
                        <button 
                          className="flex items-center justify-between w-full py-1 text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMobileDropdown(setSecondLevelOpen, secondLevelOpen);
                          }}
                          aria-expanded={secondLevelOpen}
                          aria-haspopup="true"
                        >
                          By Age Group
                          <ChevronDown className={`h-4 w-4 transform ${secondLevelOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {secondLevelOpen && (
                          <div className="pl-4 mt-1 space-y-2">
                            <button 
                              className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                              onClick={(e) => {
                                e.preventDefault();
                                filterStories('children');
                              }}
                            >
                              Children's Stories
                            </button>
                            <button 
                              className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                              onClick={(e) => {
                                e.preventDefault();
                                filterStories('teens');
                              }}
                            >
                              Teen Stories
                            </button>
                            
                            <div>
                              <button 
                                className="flex items-center justify-between w-full py-1 text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleMobileDropdown(setThirdLevelOpen, thirdLevelOpen);
                                }}
                                aria-expanded={thirdLevelOpen}
                                aria-haspopup="true"
                              >
                                Adult Fiction
                                <ChevronDown className={`h-4 w-4 transform ${thirdLevelOpen ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {thirdLevelOpen && (
                                <div className="pl-4 mt-1 space-y-2">
                                  <button 
                                    className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      filterStories('adult', 'thriller');
                                    }}
                                  >
                                    Thriller
                                  </button>
                                  <button 
                                    className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      filterStories('adult', 'romance');
                                    }}
                                  >
                                    Romance
                                  </button>
                                  <button 
                                    className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      filterStories('adult', 'scifi');
                                    }}
                                  >
                                    Science Fiction
                                  </button>
                                  <button 
                                    className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      filterStories('adult', 'mystery');
                                    }}
                                  >
                                    Mystery
                                  </button>
                                  <button 
                                    className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      filterStories('adult', 'fantasy');
                                    }}
                                  >
                                    Fantasy
                                  </button>
                                </div>
                              )}
                            </div>
                            
                            <button 
                              className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                              onClick={(e) => {
                                e.preventDefault();
                                filterStories('senior');
                              }}
                            >
                              Senior Stories
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <button 
                        className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                        onClick={(e) => {
                          e.preventDefault();
                          filterStories('popular');
                        }}
                      >
                        Popular Stories
                      </button>
                      <button 
                        className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
                        onClick={(e) => {
                          e.preventDefault();
                          filterStories('new');
                        }}
                      >
                        Newest Stories
                      </button>
                      <button 
                        className="block py-1 w-full text-left text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400 font-bold"
                        onClick={(e) => {
                          e.preventDefault();
                          showAllStories();
                        }}
                      >
                        Show All Stories
                      </button>
                    </div>
                  )}
                </div>
                
                <NavLink
                  to="/about"
                  className="block py-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
                
                <button
                  className="block py-2 w-full text-left text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
                  onClick={() => {
                    setIsAccessibilityEnabled(!isAccessibilityEnabled);
                    setMobileMenuOpen(false);
                  }}
                >
                  Accessibility: {isAccessibilityEnabled ? "On" : "Off"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
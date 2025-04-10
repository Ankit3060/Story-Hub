import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ThemeProvider from "./components/ThemeProvider";
import AccessibilityMenu from "./components/AccessibilityMenu.jsx";
import AccessibilityConfirmation from "./components/AccessibilityConfirmation.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import "./index.css";
import "./App.css";

const originalStories = [
  {
    id: 1,
    title: "The Brave Little Fox",
    content: `
      In a dense forest where shadows stretched long and the trees whispered secrets, there lived a little fox named Felix. Though small in size, Felix was known for his big heart and unshakable courage.
      One day, a terrible storm swept through the forest, and a group of sparrows lost their way. Felix decided to guide them to safety, navigating through the treacherous terrain. With his keen instincts and unwavering determination, he led them to a hidden cave.
      The sparrows thanked Felix, calling him the bravest creature in the forest. From that day on, Felix became the forest's guardian, always ready to help those in need.
    `
  },
  {
    id: 2,
    title: "The Wise Old Owl",
    content: `
      Deep within the ancient woods stood the oldest oak tree, home to a wise owl named Oliver. Creatures from near and far would gather every evening to hear Oliver's stories.
      One night, a young rabbit asked, "Why do the stars shine so brightly?" Oliver replied with a tale of how the stars were once tears of joy from the moon, celebrating the bravery of creatures who showed kindness.
      Inspired, the young rabbit vowed to spread kindness, realizing the wisdom in Oliver's words. The owl's stories continued to guide generations, making the forest a place of harmony.
    `
  },
  {
    id: 3,
    title: "The Journey of a Raindrop",
    content: `
      A tiny raindrop named Droplet fell from the clouds during a gentle shower. It landed on a leaf and wondered about its purpose in the vast world.
      As the sun rose, Droplet joined others in a stream, then flowed into a mighty river. Along the way, Droplet helped nourish thirsty plants, quench animals, and bring joy to children playing by the riverbanks.
      Eventually, Droplet evaporated back to the sky, realizing that its journey was part of a grand cycle of life. It promised to return and continue making the world thrive.
    `
  },
  {
    id: 4,
    title: "The Curious Kitten",
    content: `
      Whiskers, a fluffy gray kitten, was the most curious creature in her cozy village. She loved exploring every corner, from the bustling market to the quiet gardens.
      One day, she found a peculiar shiny object near the pond. It was a lost locket with a picture of a smiling family. Whiskers carried it in her tiny mouth and began her adventure to find its owner.
      After a long day of searching, she returned the locket to a little girl who had been crying by the pond. The girl hugged Whiskers, and they became the best of friends, embarking on many more adventures together.
    `
  },
  {
    id: 5,
    title: "The Lost Star",
    content: `
      In the vast expanse of the night sky, a tiny star named Nova felt out of place. One night, Nova lost her balance and tumbled down to Earth, landing in a quiet meadow.
      She met a firefly who said, "You may have fallen, but your light still shines." With the firefly's help, Nova traveled through forests and hills, spreading her radiant glow to guide lost travelers and brighten dark paths.
      Eventually, Nova found her way back to the sky, carrying the stories of those she had helped. She shone even brighter, inspiring all who looked up at her.
    `
  },
 
  {
    id: 6,
    title: "The Dark Night",
    content: `
      The city was silent as Detective Morgan walked through the empty streets. A series of mysterious disappearances had everyone on edge. As the rain poured down, washing away footprints and evidence, Morgan knew time was running out.
      A faint sound caught her attention - a whisper from the shadows. Following her instincts, she discovered a hidden passage beneath the old library. What she found there would change everything she thought she knew about the case.
      With determination and courage, Morgan faced the darkness, revealing a truth that had been hidden for decades. The night might be dark, but justice would prevail.
    `
  },
  {
    id: 7,
    title: "Love in Paris",
    content: `
      Claire never believed in love at first sight until she bumped into Marc on the Pont des Arts. Their eyes met, and time seemed to stand still among the thousands of love locks adorning the bridge.
      Over coffee at a quaint café, they shared stories and dreams. Marc, a local artist, showed Claire Paris through his eyes - the hidden courtyards, the secret gardens, the city beyond the tourist attractions.
      As Claire's vacation neared its end, they faced a choice: say goodbye or rewrite their futures. Under the sparkling Eiffel Tower, they made a promise that would change both their lives forever.
    `
  },
  {
    id: 8,
    title: "The Hidden Clue",
    content: `
      Professor Winters examined the ancient manuscript with growing excitement. After decades of searching, the final piece of the puzzle was within reach. The symbols on the weathered parchment held the key to a mystery that had baffled historians for centuries.
      As he deciphered the cryptic message, a pattern emerged - one that led to a location no one had considered. With his trusted assistant, he embarked on a journey to a remote monastery where the truth waited to be uncovered.
      What they discovered there would rewrite history and solve a mystery that had claimed many lives. The smallest clue had led to the greatest discovery.
    `
  },
  {
    id: 9,
    title: "The Magical Forest",
    content: `
      When Eleanor followed the strange glowing butterfly into the old forest behind her grandmother's house, she never expected to cross into another realm. The trees whispered ancient secrets, and creatures of legend watched from the shadows.
      A young faun named Eldir became her guide, explaining that the forest was dying, its magic fading because of a curse. Eleanor, descended from a long line of guardians, was the only one who could restore balance to this magical world.
      With courage she never knew she possessed, Eleanor embarked on a quest through the heart of the enchanted forest, discovering powers within herself that would change both worlds forever.
    `
  }
];

function App() {
  const [isAccessibilityEnabled, setIsAccessibilityEnabled] = useState(false);
  const [filteredStories, setFilteredStories] = useState(originalStories);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAccessibilityState, setPendingAccessibilityState] = useState(false);

  const handleAccessibilityToggleRequest = (newState) => {
    setPendingAccessibilityState(newState);
    setShowConfirmation(true);
  };

  const handleConfirmAccessibility = () => {
    setIsAccessibilityEnabled(pendingAccessibilityState);
    setShowConfirmation(false);
  };

  const handleCancelAccessibility = () => {
    setShowConfirmation(false);
  };

  return (
    <ThemeProvider>
      <Header 
        isAccessibilityEnabled={isAccessibilityEnabled} 
        setIsAccessibilityEnabled={handleAccessibilityToggleRequest}
        setFilteredStories={setFilteredStories}
        originalStories={originalStories}
      />
      <Routes>
        <Route path="/" element={
          <Home 
            isAccessibilityEnabled={isAccessibilityEnabled}
            stories={filteredStories} 
          />
        } />
        <Route path="/about" element={<About isAccessibilityEnabled={isAccessibilityEnabled}/>} />
      </Routes>
      <AccessibilityMenu setIsAccessibilityEnabled={handleAccessibilityToggleRequest} />
      <AccessibilityConfirmation 
        isOpen={showConfirmation}
        onConfirm={handleConfirmAccessibility}
        onCancel={handleCancelAccessibility}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
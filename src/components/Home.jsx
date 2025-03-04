import React, { useState } from "react";
import StoryList from "./StoryList.jsx";
import Magnifier from "./Magnifier.jsx";

const stories = [
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
    }
  ];
  

function Home({ isAccessibilityEnabled }) {
  const [hoveredText, setHoveredText] = useState("");

  const handleHover = (text) => setHoveredText(text);
  
  return (
    <div className="min-h-screen container mx-auto px-6 py-8">
      <StoryList
        stories={stories}
        isAccessibilityEnabled={isAccessibilityEnabled}
        handleHover={handleHover}
      />
      {isAccessibilityEnabled && hoveredText && <Magnifier hoveredText={hoveredText} />}
    </div>
  );
}

export default Home;
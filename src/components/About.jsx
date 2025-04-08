import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
          Welcome to StoryHub, the place where stories come to life. Whether you're a writer, a reader, or simply someone who enjoys a good tale, our platform is designed for you. Our mission is to connect people through stories, inspire creativity, and provide a space where everyone can explore and share their narratives.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3 sm:mb-4">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
          At StoryHub, we believe that stories have the power to change the world. Our goal is to foster a community where creativity flourishes, and voices are heard. We strive to provide an inclusive platform for writers and readers to come together, explore diverse perspectives, and create lasting connections through storytelling.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3 sm:mb-4">
          Meet Our Team
        </h2>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://avatars.githubusercontent.com/u/121934648?v=4"
              alt="ankit image"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-orange-500 dark:text-orange-400 mb-1 sm:mb-2">
              Ankit Kumar
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Ankit is a passionate full-stack developer who loves coding and storytelling. He is the brains behind the technical aspects of StoryHub.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Ankit3060" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/535853263/display_1500/stock-vector-profile-photo-vector-placeholder-pic-male-person-default-profile-gray-photo-picture-avatar-535853263.jpg"
              alt="yash image"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-orange-500 dark:text-orange-400 mb-1 sm:mb-2">
              Yash Kandpal
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Yash is a content strategist with a love for reading and writing. He's passionate about creating engaging content that resonates with StoryHub's community.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Ankit3060" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/535853263/display_1500/stock-vector-profile-photo-vector-placeholder-pic-male-person-default-profile-gray-photo-picture-avatar-535853263.jpg"
              alt="Dhanush image"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-orange-500 dark:text-orange-400 mb-1 sm:mb-2">
              Dhanush 
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
            Dhanush is a designer with a keen eye for aesthetics. He ensures that StoryHub's design is sleek and user-friendly, making the experience enjoyable for all.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Ankit3060" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/535853263/display_1500/stock-vector-profile-photo-vector-placeholder-pic-male-person-default-profile-gray-photo-picture-avatar-535853263.jpg"
              alt="Arnav image"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-orange-500 dark:text-orange-400 mb-1 sm:mb-2">
              Arnav
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Arnav is a project manager who ensures everything runs smoothly at StoryHub. She loves organizing tasks and bringing ideas to life.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Ankit3060" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg sm:text-xl text-gray-700 hover:text-orange-500" />
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3 sm:mb-4">
          Our Story
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
          StoryHub was founded by a group of passionate individuals who saw the potential of bringing people together through stories. From humble beginnings, we have grown into a thriving community of creators, writers, and readers. Our team is dedicated to providing the best experience possible, constantly improving and adding features that empower both our writers and readers.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3 sm:mb-4">
          Join Us
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
          Whether you're an aspiring author or a reader looking for your next great story, StoryHub is the place for you. Sign up today and become part of a vibrant, growing community that shares your passion for storytelling.
        </p>
      </div>
    </div>
  );
}
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 sm:py-6 mt-6 sm:mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1Bfvo7zxMG/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-500" />
            </a>
            <a href="https://x.com/ankit330660" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/ankit_ak33/?igsh=MnRzcWs4ZmpheWRt#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-700" />
            </a>
          </div>

          {/* Info Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center gap-2 sm:gap-4">
            <p className="text-center text-xs sm:text-sm">
              Made with ❤️ by <span className="font-semibold">Ankit</span>
            </p>
            
            <p className="text-center text-xs sm:text-sm">
              © 2025 StoryHub. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Chandigarh, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
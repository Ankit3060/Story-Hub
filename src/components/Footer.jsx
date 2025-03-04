import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Social Media Links */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/share/1Bfvo7zxMG/" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-blue-500" />
          </a>
          <a href="https://x.com/ankit330660" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com/ankit_ak33/?igsh=MnRzcWs4ZmpheWRt#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-511b31229/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-700" />
          </a>
        </div>

        <p className="text-center text-sm">
            Made with ❤️ by <span className="font-semibold">Ankit</span>
        </p>
        <p className="text-center text-sm">
            © 2025 StoryHub. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>Chandigarh, India</span>
        </div>
      </div>
    </footer>
  );
}

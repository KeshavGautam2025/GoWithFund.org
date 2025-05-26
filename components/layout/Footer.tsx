import Link from "next/link";
import { Heart, Twitter, Linkedin, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">GoWithFund.org</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Organized exclusively for charitable and educational purposes. Connecting resources to global needs and
              empowering positive change worldwide.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about-us" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300">contact@gowithfund.org</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoWithFund Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

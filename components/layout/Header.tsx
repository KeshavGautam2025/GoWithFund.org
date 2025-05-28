import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">GoWithFund.org</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/contribute-as-a-developer" className="text-gray-700 hover:text-blue-600 font-medium">
              Contribute as a Developer
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Browse Projects
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              For Nonprofits
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

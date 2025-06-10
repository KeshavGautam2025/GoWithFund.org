'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    // { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image
                src="/GoWithFund.org_Logo_Big_Size.png" 
                alt="GoWithFund Logo" 
                width={5000}
                height={5000}
                className="h-8 w-auto mr-2" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[var(--color-dark)] hover:text-black">
              {link.label}
            </Link>
          ))}
          <Link href="/volunteer">
            <button className="bg-[var(--color-primary)] hover:bg-teal-800 text-white text-sm px-4 py-2 rounded-md">
              Join Us
            </button>
          </Link>
        </nav>

        {/* Mobile toggle button */}
        <button onClick={toggleMenu} className="md:hidden text-[var(--color-dark)] focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-dark)] hover:text-black">
              {link.label}
            </Link>
          ))}
          <Link href="/volunteer" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[var(--color-primary)] hover:bg-teal-800 text-white text-sm px-4 py-2 rounded-md">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

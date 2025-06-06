import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

function Footer() {
  return (
    <div className='text-[var(--color-dark)] bg-gray-100 border-t border-gray-200 mt-3'>
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center space-y-3">
            <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-2xl space-y-2 md:space-y-0 md:space-x-4'>
                <Link href="/about" className="text-sm text-[var(--color-dark)] hover:text-black">
                    About
                </Link>
                <Link href="/blog" className="text-sm text-[var(--color-dark)] hover:text-black">
                    Blog
                </Link>
                <Link href="/careers" className="text-sm text-[var(--color-dark)] hover:text-black">
                    Careers
                </Link>
                <Link href="/press" className="text-sm text-[var(--color-dark)] hover:text-black">
                    Press
                </Link>
                <Link href="/github" className="text-sm text-[var(--color-dark)] hover:text-black">
                    GitHub
                </Link>
                <Link href="/contact" className="text-sm text-[var(--color-dark)] hover:text-black">
                    Contact
                </Link>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between max-w-2xl space-y-2 md:space-y-0 md:space-x-4'>
                <Link href="/twitter" className="text-sm text-[var(--color-dark)] hover:text-black">
                    <Twitter size={16} className="inline mr-1" />
                </Link>
                <Link href="/twitter" className="text-sm text-[var(--color-dark)] hover:text-black">
                    <Linkedin size={16} className="inline mr-1" />
                </Link>
                <Link href="/twitter" className="text-sm text-[var(--color-dark)] hover:text-black">
                    <Github size={16} className="inline mr-1" />
                </Link>
            </div>
            <div className="text-center text-sm">
                © {new Date().getFullYear()} GoWithFund.org. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer
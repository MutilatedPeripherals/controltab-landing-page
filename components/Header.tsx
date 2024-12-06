import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-600">Control</span>
          <span className="text-indigo-600">Tab</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Sign Up
        </Button>
      </div>
    </header>
  )
}


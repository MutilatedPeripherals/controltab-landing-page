import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-purple-500">Control</span><span className="text-pink-500">Tab</span>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2024 ControlTab. All rights reserved.
      </div>
    </footer>
  )
}


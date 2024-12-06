'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'

export function Hero() {
  const scrollToWaitlist = useCallback(() => {
    const waitlistSection = document.getElementById('join-waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-600 opacity-30 mix-blend-multiply"></div>
        <div 
          className="absolute inset-0 bg-[url('https://i.ibb.co/X8pmpJ3/tabcapture.jpg')] bg-cover bg-center opacity-40"
          style={{ filter: 'blur(5px)' }}
        ></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Control</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400">Tab</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-100">
          Collaborate, Organize, Perform – All in One Place
        </h2>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          From guitar tabs to stage setup, ControlTab streamlines every aspect of your band's workflow. Elevate your music, your way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={scrollToWaitlist}>
            Join the Waitlist
          </Button>
          <Link href="https://dashboard.controltab.app/#/login">
            <Button variant="link" className="text-gray-300 hover:text-white">
              Login for Beta Users
            </Button>
          </Link>
        </div>
        <p className="text-gray-300 text-sm mt-4">
          ControlTab is currently in closed beta. Sign up to be notified when we open registrations!
        </p>
      </div>
    </section>
  )
}


import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    title: "Sign Up",
    description: "Create your band profile and get your unique access code."
  },
  {
    title: "Build Your Library",
    description: "Upload Guitar Pro files, lyrics, and create stage plots to prepare for your next gig."
  },
  {
    title: "Collaborate & Perform",
    description: "Work with your bandmates, finalize setlists, and bring your best to every performance."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get Started in 3 Easy Steps</h2>
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-white">
              <span className="font-bold">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="https://dashboard.controltab.app/#/login">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Start Now
          </Button>
        </Link>
      </div>
    </section>
  )
}


import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800 to-pink-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Take Your Band to the Next Level?</h2>
        <Link href="https://dashboard.controltab.app/#/login">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started for Free Today!
          </Button>
        </Link>
      </div>
    </section>
  )
}


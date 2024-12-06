'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

export function JoinWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demonstration, we'll randomly succeed or fail
    if (Math.random() > 0.5) {
      setStatus('success')
    } else {
      setStatus('error')
    }
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setStatus('idle')
      setEmail('')
    }, 3000)
  }

  return (
    <section id="join-waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Be the First to Experience ControlTab
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Join Our Exclusive Waitlist</h3>
                <p className="text-gray-300 mb-6">
                  ControlTab is revolutionizing how bands collaborate. Sign up now to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Get early access to our closed beta</li>
                  <li>Receive exclusive updates on new features</li>
                  <li>Shape the future of band collaboration tools</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600 text-gray-100"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        You're on the list!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <XCircle className="mr-2 h-4 w-4" />
                        Please try again
                      </>
                    ) : (
                      'Join the Waitlist'
                    )}
                  </Button>
                </form>
                <p className="mt-4 text-sm text-gray-400 text-center">
                  No spam, we promise!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


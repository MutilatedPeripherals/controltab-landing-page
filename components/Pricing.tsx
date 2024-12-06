import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: "Free Plan",
    description: "Collaborate, create, and organize your music seamlessly.",
    price: "Join the Waitlist",
    features: [
      "Collaborate on tabs and lyrics in real time.",
      "Track changes with version control.",
      "Add comments and approve updates.",
      "Visualize and play back tabs online.",
      "Export setlists and tabs in multiple formats."
    ]
  },
  {
    name: "Pro Plan",
    description: "Elevate your band's process and performances.",
    price: "Coming Soon",
    features: [
      "Enjoy unlimited file storage.",
      "Use advanced collaboration tools for feedback and approvals.",
      "Create detailed stage plots for every performance.",
      "Analyze concert data with powerful analytics."
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto h-full">
        {plans.map((plan) => (
          <Card key={plan.name} className="bg-gray-800 border-gray-700 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-100">{plan.name}</CardTitle>
              <CardDescription className="text-gray-300">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                disabled={plan.name === "Pro Plan"}
              >
                {plan.price}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center text-gray-300">
        <p>ControlTab is currently in closed beta. Join the waitlist to be notified when we open registrations!</p>
      </div>
    </section>
  )
}


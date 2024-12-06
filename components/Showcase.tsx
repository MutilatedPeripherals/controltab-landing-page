'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { GuitarIcon, GitBranchIcon, MessageSquareIcon, CheckCircleIcon } from 'lucide-react'
import Image from 'next/image'

const subFeatures = [
  {
    title: "Version Control",
    description: "Track changes and manage different versions of your tabs effortlessly.",
    icon: GitBranchIcon
  },
  {
    title: "Collaboration",
    description: "Work together in real-time, leaving comments and suggestions for your bandmates.",
    icon: MessageSquareIcon
  },
  {
    title: "Approval Process",
    description: "Review and approve changes to ensure everyone's on the same page.",
    icon: CheckCircleIcon
  }
]

export function Showcase() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Powerful Version Control for Musicians
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GuitarIcon className="w-8 h-8 mr-4 text-purple-500" />
                  <h3 className="text-2xl font-semibold text-white">Guitar Pro Version Control</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Collaborate on tabs with powerful version control. Comment, approve changes, and track edit history seamlessly.
                </p>
                <div className="space-y-4">
                  {subFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start">
                      <feature.icon className="w-5 h-5 mr-3 text-purple-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="https://i.ibb.co/t8MZpsK/Image-6-12-24-at-11-10.jpg"
                alt="Version Control Showcase"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Headphones, Users, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Headphones className="h-6 w-6" />
              <span className="font-bold">Scribber</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Scribber
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionizing audio transcription with cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Our Team</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A diverse group of experts in AI, linguistics, and software engineering, dedicated to making transcription accessible to all.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Globe className="h-10 w-10 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To break down language barriers and make information more accessible through accurate and efficient transcription technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <Award className="h-10 w-10 text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Our Achievements</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Recognized for our innovative approach to AI-driven transcription, with multiple industry awards and satisfied customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Scribber Community
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience the future of audio transcription today.
              </p>
              <Link href="/transcribe">
                <Button size="lg" className="mt-4">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Scribber. All rights reserved.
      </footer>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Headphones, FileAudio, Type, Zap, Clock, Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Headphones className="h-6 w-6" />
              <span className="font-bold">Scriber</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Transform Audio to Text with Scriber
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Accurate, fast, and secure audio transcription powered by cutting-edge AI technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/transcribe">
                  <Button size="lg" className="px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="outline" size="lg" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How Scriber Works</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <FileAudio className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Upload Audio</h3>
                <p className="text-gray-500 dark:text-gray-400">Simply upload your audio file or record directly in your browser.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Zap className="h-10 w-10 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">AI Processing</h3>
                <p className="text-gray-500 dark:text-gray-400">Our advanced AI quickly and accurately transcribes your audio.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <Type className="h-10 w-10 text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Get Transcript</h3>
                <p className="text-gray-500 dark:text-gray-400">Download your transcript in various formats or edit directly in the browser.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Scriber</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex items-start space-x-4">
                <Clock className="mt-1 h-6 w-6 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Fast Turnaround</h3>
                  <p className="text-gray-500 dark:text-gray-400">Get your transcripts in minutes, not hours.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="mt-1 h-6 w-6 text-green-500 dark:text-green-400" />
                <div>
                  <h3 className="text-xl font-bold">High Accuracy</h3>
                  <p className="text-gray-500 dark:text-gray-400">Our AI ensures precise transcriptions across various accents and industries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="mt-1 h-6 w-6 text-purple-500 dark:text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold">Secure & Confidential</h3>
                  <p className="text-gray-500 dark:text-gray-400">Your data is encrypted and never shared or stored.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Scriber. All rights reserved.
      </footer>
    </div>
  )
}

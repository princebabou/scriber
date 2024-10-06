import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Headphones, Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that fits your needs. No hidden fees, cancel anytime.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {/* Basic Plan */}
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">Perfect for individuals and small projects</p>
                <p className="text-4xl font-bold text-center mb-6">$9.99<span className="text-base font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Up to 5 hours of transcription per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Standard accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col p-6 bg-blue-600 text-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center text-blue-100 mb-4">Ideal for professionals and growing businesses</p>
                <p className="text-4xl font-bold text-center mb-6">$24.99<span className="text-base font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Up to 20 hours of transcription per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>High accuracy with AI enhancement</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Priority email and chat support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Advanced editing tools</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-blue-50">Choose Plan</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">Custom solutions for large organizations</p>
                <p className="text-4xl font-bold text-center mb-6">Custom</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited transcription</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Highest accuracy with custom AI models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>API access and integrations</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
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

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Headphones, FileText, Code, Settings } from 'lucide-react';

// Header Component
function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Headphones className="h-6 w-6" />
          <span className="font-bold">Scribber</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
        </nav>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      © 2024 Scribber. All rights reserved.
    </footer>
  );
}
// Card Component for Reuse
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card({ icon: Icon, title, description, buttonText }: { icon: React.ComponentType<any>, title: string, description: string, buttonText: string }) {
  return (
    <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <Icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">{description}</p>
      <Button className="mt-auto mx-auto">{buttonText}</Button>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Scribber Documentation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Everything you need to know about using Scribber for your transcription needs.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card
                icon={FileText}
                title="Getting Started"
                description="Learn the basics of Scribber and how to set up your account."
                buttonText="Read Guide"
              />
              <Card
                icon={Code}
                title="API Reference"
                description="Detailed documentation for integrating Scribber into your applications."
                buttonText="Explore API"
              />
              <Card
                icon={Settings}
                title="Advanced Features"
                description="Discover advanced techniques and customization options."
                buttonText="Learn More"
              />
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need Help?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our support team is always ready to assist you with any questions or issues.
              </p>
              <Button size="lg" className="mt-4">
              <Link href="mailto:baboumanzi69@gmail.com">Contact Support</Link>

              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

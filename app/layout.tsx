import './globals.css'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

// Import Nunito font from Google
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Scriber',
  description: 'Transcribe your audio files with ease using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Cambitas - Construction Managament with Sustainibility in Mind</title>
        <meta name="title" content="Cambitas - Construction Managament with Sustainibility in Mind" />
        <meta
          name="description"
          content="Cambitas is a construction management platform that helps you manage your construction projects with sustainibility in mind."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cambitascompany.es" />
        <meta property="og:title" content="Cambitas - Construction Managament with Sustainibility in Mind" />
        <meta
          property="og:description"
          content="Cambitas is a construction management platform that helps you manage your construction projects with sustainibility in mind."
        />
        <meta
          property="og:image"
          content='/cambitas-og.png'
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.cambitascompany.es"
        />
        <meta property="twitter:title" content="Cambitas - Construction Managament with Sustainibility in Mind" />
        <meta
          property="twitter:description"
          content="Cambitas is a construction management platform that helps you manage your construction projects with sustainibility in mind."
        />
        <meta
          property="twitter:image"
          content="/cambitas-og.png"
        />
      </head>
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}

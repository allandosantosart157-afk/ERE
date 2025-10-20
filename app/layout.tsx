import type React from "react"
import type { Metadata } from "next"
import "../css/bootstrap.min.css"
import "../css/bootstrap-icons.min.css"
import "../css/main.css"

export const metadata: Metadata = {
  title: "Ereforce",
  description: "Vitality Supplement",
  keywords: "weight loss, fat burn, diet, supplement, slim, natural, health",
  openGraph: {
    url: "https://getEreforce.com/cb/vsl/vb",
    images: ["https://getEreforce.com/assets/main/img/social-share.webp"],
  },
  twitter: {
    images: ["https://getEreforce.com/assets/main/img/social-share.webp"],
  },
  icons: {
    icon: "/images/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GoogleFonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Patua+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Patua+One&family=Oswald:wght@200..700&family=Cabin:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* VTurb preload links */}
        <link
          rel="preload"
          href="https://scripts.converteai.net/bb9a016c-cd8e-4f00-8ae2-e0cd82fad682/ab-test/68eabdecd24a61add3545a37/player.js"
          as="script"
        />
        <link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.min.js" as="script" />
        <link
          rel="preload"
          href="https://images.converteai.net/bb9a016c-cd8e-4f00-8ae2-e0cd82fad682/players/68eabdecd24a61add3545a37/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/bb9a016c-cd8e-4f00-8ae2-e0cd82fad682/68eabdecd24a61add3545a37/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body id="vsl" className="clickbank" data-funnel="vslblack">
        {children}
      </body>
    </html>
  )
}

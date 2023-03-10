import { ComingSoon } from '@/components/ComingSoon'
import { Footer } from '@/components/Footer'
import { Grants } from '@/components/Grants'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { WhoIsItFor } from '@/components/WhoIsItFor'
import classnames from 'classnames'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Unlock 2023</title>

        <meta
          name="description"
          content="Unlock is a civic summit showcasing the latest trends at the nexus of activism, media and technology in Eastern Europe and Central Asia. It all happens in Prague May 25-26, 2023."
        />
        <meta name="pinterest" content="nopin" />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Unlock 2023" />
        <meta
          property="og:description"
          content="Unlock is a civic summit showcasing the latest trends at the nexus of activism, media and technology in Eastern Europe and Central Asia. It all happens in Prague May 25-26, 2023."
        />
        <meta property="og:url" content="https://www.unlockprague.com" />
        <meta property="og:image" content="/og.jpg" />
        <meta name="twitter:title" content="Unlock 2023" />
        <meta
          name="twitter:description"
          content="Unlock is a civic summit showcasing the latest trends at the nexus of activism, media and technology in Eastern Europe and Central Asia. It all happens in Prague May 25-26, 2023."
        />
        <meta name="twitter:image" content=" og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#ff0041"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main>
        <Hero />

        <WhoIsItFor />
        <Schedule />
        <Speakers />

        {/* <ComingSoon /> */}

        <div className="space-y-16 bg-gradient-to-tl from-slate-800 to-black pt-20 lg:pt-24">
          <Grants />
          <Sponsors />

          <Footer />
          <div className="fixed bottom-6 right-6">
            <a
              onClick={() => goToTop()}
              className={classnames(
                'flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-white text-3xl shadow-lg shadow-zinc-300/10 ring-1 ring-zinc-200 transition-all hover:bg-rose-500 hover:text-white',
                showBackToTop ? 'opacity-100' : 'opacity-0'
              )}
            >
              <span>
                <BsArrowUpShort />
              </span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

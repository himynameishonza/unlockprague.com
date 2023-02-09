import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Unlock - Claim goes here</title>
        <meta
          name="description"
          content="Unlock is a civic tech summit showcasing cutting-edge campaigns and featuring expert masterclasses that'll reboot your mindset and inspire you to upgrade your civic projects."
        />
        <meta name="pinterest" content="nopin" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

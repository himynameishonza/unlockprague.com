import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Logo from '@/components/Logo'
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
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

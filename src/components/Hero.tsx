import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative isolate pb-20 pt-36 sm:py-24 lg:pt-10">
      <Container className="relative isolate z-20">
        <div className="mx-auto max-w-2xl px-4 pt-12 sm:pt-32 lg:max-w-4xl lg:px-12">
          <h1 className="hidden text-center font-display text-4xl font-bold tracking-tighter text-slate-800 sm:block lg:text-left lg:text-5xl">
            Welcome to Unlock 2023
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-slate-600 md:text-2xl ">
            <p>
              Unlock is a civic tech summit showcasing cutting-edge campaigns
              and featuring expert masterclasses that&apos;ll reboot your
              mindset and inspire you to upgrade your civic projects. Think new
              media & activism, online privacy & security, smart cities & urban
              development, ecological crisis & green tech, monetisation
              &community-building, technologies for transparency & investigative
              journalism and much more!
            </p>
            <p>
              Apply for a chance to join us and 200+ leading campaigners,
              activists, journalists, tech experts, marketers and entrepreneurs.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full text-white sm:hidden">
            Registration
          </Button>
          <p className="text-centerfont-medium py-4 text-base text-rose-600 sm:text-left">
            We welcome applicants from Armenia, Azerbaijan, Belarus, Georgia,
            Kazakhstan, Kyrgyzstan, Moldova, Russia, Tajikistan, Turkmenistan,
            Ukraine, and Uzbekistan.
          </p>
          <dl className="mt-10 grid gap-y-6 gap-x-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-16 lg:justify-start lg:text-left">
            {[
              ['Speakers', '30'],
              ['People attending', '200+'],
              ['Venue', 'Kasárna Karlín'],
              ['Location', 'Prague, CZE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-base text-slate-600 sm:text-lg">
                  {name}
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-rose-500 sm:text-3xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <div className="absolute top-0 right-0 bottom-0 left-0 isolate z-10 bg-white/90 backdrop-blur-xl" />
      <Image
        src="https://images.unsplash.com/photo-1484626753559-5fa3ea273ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt={''}
        fill
        className="top-0 left-0 right-0 bottom-0 isolate z-0"
      />
    </div>
  )
}

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-[#85EBD9] sm:text-6xl">
            Welcome to Unlock 2023
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-white">
            <p>
              Unlock is a civic tech summit showcasing cutting-edge campaigns
              and featuring expert masterclasses that&apos;ll reboot your
              mindset and inspire you to upgrade your civic projects. Think new
              media &amp; activism, online privacy &amp; security, smart cities
              &amp; urban development, ecological crisis &amp; green tech,
              monetisation &amp; community-building, technologies for
              transparency &amp; investigative journalism and much more!
            </p>
            <p>
              Apply for a chance to join us and 200+ leading campaigners,
              activists, journalists, tech experts, marketers and entrepreneurs.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Registration
          </Button>
          <p className="py-4 text-center text-base text-cyan-600 sm:text-left">
            We welcome applicants from Armenia, Azerbaijan, Belarus, Georgia,
            Kazakhstan, Kyrgyzstan, Moldova, Russia, Tajikistan, Turkmenistan,
            Ukraine, and Uzbekistan.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '10'],
              ['People Attending', '250+'],
              ['Venue', 'Kasárna Karlín'],
              ['Location', 'Prague, CZE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-cyan-400">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-200">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}

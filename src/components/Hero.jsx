import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Unlock 2023 - </span>Claim goes here
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Unlock is a civic tech summit showcasing cutting-edge campaigns
              and featuring expert masterclasses that'll reboot your mindset and
              inspire you to upgrade your civic projects. Think new media &
              activism, online privacy & security, smart cities & urban
              development, ecological crisis & green tech, monetisation &
              community-building, technologies for transparency & investigative
              journalism and much more!
            </p>
            <p>
              Apply for a chance to join us and 200+ leading campaigners,
              activists, journalists, tech experts, marketers and entrepreneurs.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Registration
          </Button>
          <p className="my-5 text-blue-800">
            We welcome applicants from Armenia, Azerbaijan, Belarus, Georgia,
            Kazakhstan, Kyrgyzstan, Moldova, Russia, Tajikistan, Turkmenistan,
            Ukraine, and Uzbekistan.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '18'],
              ['People Attending', '250'],
              ['Venue', 'Kasárna Karlín'],
              ['Location', 'Prague'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
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

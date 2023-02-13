import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { dataHero } from './data'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <Container className="relative isolate z-20">
        <div className="mx-auto max-w-2xl px-4 pt-32 lg:max-w-4xl lg:px-12 lg:pt-24">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-slate-800 sm:text-6xl">
            {dataHero.title}
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-slate-600 sm:text-2xl">
            <p>{dataHero.intro}</p>
            <p>{dataHero.paragraph}</p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            {dataHero.registration}
          </Button>
          <p className="py-4 text-center text-base font-medium text-rose-600 sm:text-left">
            {dataHero.applicants}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              [dataHero.speakers, '10'],
              [dataHero.attendance, '200+'],
              [dataHero.venue, 'Kasárna Karlín'],
              [dataHero.location, 'Prague, CZE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-slate-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-slate-600">
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

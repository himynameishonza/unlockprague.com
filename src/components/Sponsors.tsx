import Image from 'next/image'

import { Container } from '@/components/Container'
import Logo from './Logo'

const sponsors = [
  { name: 'Company logo 1' },
  { name: 'Company logo 2' },
  { name: 'Company logo 3' },
]

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="sm:b-32 bg-white pb-20"
    >
      <Container className="space-y-10">
        <h2 className="mx-auto max-w-2xl text-center font-display text-xl tracking-tighter text-slate-500">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="mx-auto grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Logo mono className="h-8" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

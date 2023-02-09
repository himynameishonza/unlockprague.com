import Image from 'next/image'

import { Container } from '@/components/Container'

const sponsors = [
  { name: 'Company logo 1' },
  { name: 'Company logo 2' },
  { name: 'Company logo 3' },
  { name: 'Company logo 4' },
  { name: 'Company logo 5' },
  { name: 'Company logo 6' },
]

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-cyan-900 sm:text-5xl">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              {sponsor.name}
              {/* <Image src={sponsor.logo} alt={sponsor.name} unoptimized /> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

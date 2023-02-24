import { Container } from '@/components/Container'
import { DiamondIcon } from './DiamondIcon'

const points = [
  'Civil activists',
  'Creative minds in technology',
  'Social business entrepreneurs',
  'Journalists',
  'Content creators',
  'Innovators',
  'Artists',
]
export function WhoIsItFor() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-white py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-rose-1600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
            Who is Unlock for?
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-slate-600">
            Unlock is for anyone trying to make a positive change in their
            community, society, country or region. This includes but isn’t
            limited to:
          </p>
        </div>
      </Container>

      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-slate-100">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>

        <Container className="relative max-w-5xl">
          <ul className="flex flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
            {points.map((item, i) => {
              return (
                <>
                  <li className="text-xl font-bold text-rose-500" key={i}>
                    {item}
                  </li>
                  <li className="hidden last:hidden sm:block">
                    <DiamondIcon className="h-2 fill-rose-500" />
                  </li>
                </>
              )
            })}
          </ul>
        </Container>
      </div>
    </section>
  )
}

import { Container } from '@/components/Container'
import { Button } from './Button'

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="Schedule"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-slate-800 sm:text-5xl"
          >
            Schedule
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight text-slate-600 lg:text-2xl">
            Wa are finishing our planning and will announce this year&apos;s
            event schedule soon. Keep in touch!
          </p>

          <Button className="mt-8">Save Schedule to Your Calendar</Button>
        </div>
      </Container>
    </section>
  )
}

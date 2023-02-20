import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const schedule = [
  {
    date: 'May 25',
    dateTime: '2023-03-01',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'Steven McHail',
        description: 'Not so one-time payments',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Jaquelin Isch',
        description: 'The finer print',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Dianne Guilianelli',
        description: 'Post-purchase blackmail',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Ronni Cantadore',
        description: 'Buy or die',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Erhart Cockrin',
        description: 'In-person cancellation',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Parker Johnson',
        description: 'The pay/cancel switcheroo',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'May 26',
    dateTime: '2023-03-02',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'Damaris Kimura',
        description: 'The invisible card reader',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Ibrahim Frasch',
        description: 'Stealing fingerprints',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Cathlene Burrage',
        description: 'Voting machines',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Rinaldo Beynon',
        description: 'Blackhat SEO that works',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Waylon Hyden',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Giordano Sagucio',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
]

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-rose-500">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-slate-800">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/90 py-14 px-10 text-center shadow-xl shadow-rose-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-slate-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-slate-400">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime} className="mb-8">
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-white py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-rose-1600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
            Our three day schedule is jam-packed with brilliant, creative, evil
            geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-slate-600">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-slate-100">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>

        <Container className="relative max-w-5xl">asd</Container>

        {/* <Container className="relative max-w-5xl">
          <ScheduleStatic />

          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-rose-500">
              Accompanying program
            </h3>
            <p className="mt-1.5 max-w-xl text-base tracking-tight text-slate-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatibus quo, ut distinctio ad harum deleniti quidem molestias
              optio ex perferendis, dolorum ullam rerum consectetur sit dolores,
              iusto enim velit.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <section className="mt-8 space-y-8 bg-white/90 py-14 px-10 text-center shadow-xl shadow-rose-900/5 backdrop-blur">
                <h4 className="text-lg font-semibold tracking-tight text-slate-900">
                  Mediathon
                </h4>

                <p className="mt-1 tracking-tight text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  sapiente, quod provident maiores laudantium nihil molestiae
                  vel velit pariatur aut nobis ad ipsa necessitatibus ipsum
                  magnam dolorem! Illum, at blanditiis.
                </p>
                <p className="mt-1 font-mono text-sm text-slate-500">
                  Info about time and place
                </p>
              </section>

              <section className="mt-8 space-y-8 bg-white/90 py-14 px-10 text-center shadow-xl shadow-rose-900/5 backdrop-blur">
                <h4 className="text-lg font-semibold tracking-tight text-slate-900">
                  Artivism
                </h4>

                <p className="mt-1 tracking-tight text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  sapiente, quod provident maiores laudantium nihil molestiae
                  vel velit pariatur aut nobis ad ipsa necessitatibus ipsum
                  magnam dolorem! Illum, at blanditiis.
                </p>
                <p className="mt-1 font-mono text-sm text-slate-500">
                  Info about time and place
                </p>
              </section>
            </div>
          </div>
        </Container> */}
      </div>
    </section>
  )
}

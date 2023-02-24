import { Container } from '@/components/Container'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Button } from './Button'

export function Grants() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded bg-white px-8 py-10 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute top-3 right-3 inline-flex justify-center rounded-full bg-transparent p-2 text-base font-semibold text-slate-500 transition-all hover:bg-rose-600 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoMdClose size={24} />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="bg-gradient-to-b from-[#FF00A2] to-[#FF0000] bg-clip-text text-2xl font-medium leading-6 text-transparent"
                  >
                    Partnership Travel Grants Conditions
                  </Dialog.Title>
                  <div className="mt-4 space-y-4 text-slate-800">
                    <p>
                      Your collaboration could be in the form of an
                      investigation, an art exhibition, a public event, a
                      training programme—anything which involved working with
                      somebody you met at a Prague Civil Society Centre event.
                    </p>

                    <p>
                      We have 6 travel grants to award people who have already
                      attended a Prague Civil Society Centre event and can tell
                      us about a great project launched with somebody they met
                      there.
                    </p>

                    <p>
                      Please fill in the form to tell us about the project you
                      launched. If you have more than one partnership or project
                      you want to tell us about, please submit information about
                      each one in different forms. You can make as many
                      submissions as you like.
                    </p>
                    <p>
                      <b>The deadline is March 10, 2023.</b>
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded bg-rose-500 p-4 text-base font-semibold text-white transition-all hover:bg-rose-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <section id="partnership-grants" aria-label="Partnership grants">
        <Container className="relative z-10 pt-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
            <h2 className="bg-gradient-to-b from-[#FF00A2] to-[#FF0000] bg-clip-text font-display text-4xl font-medium tracking-tighter text-transparent sm:text-5xl">
              Financial support
            </h2>
            <p className="mt-4 font-display text-xl tracking-tight text-slate-200 lg:text-2xl">
              Good news! We are able to cover the costs of attending Unlock for
              a limited number of attendees (flights, visas, accommodation).
              Need some help to cover the costs? Indicate it in the application
              form in section III. If you are eligible we will contact you
              individually.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-start">
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLScFhvgWvccPhezwteI33EVsPggVCPIEWRLcZpRJs-rOhGBqLg/viewform?usp=sf_link">
                Registration
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

import { Container } from '@/components/Container'
import { dataSpeakers } from '@/utils/data'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import { Transition, Dialog } from '@headlessui/react'
export function Speakers() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [detailOpened, setDetailOpened] = useState(false)
  const [originalLang, setOriginalLang] = useState(false)
  const [data, setData] = useState({
    nameEN: '',
    roleEN: '',
    nameORIGINAL: '',
    roleORIGINAL: '',
    bioEN: '',
    bioORIGINAL: '',
    image: '',
    langSwitch: '',
  })

  const setSpeaker = (speaker) => {
    setDetailOpened(true)
    setData(speaker)
  }

  const closeBio = (speaker) => {
    setDetailOpened(false)
    setOriginalLang(false)
  }

  return (
    <>
      <Transition appear show={detailOpened} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeBio}>
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-8 p-6">
                    <div className="space-y-4">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-rose-500"
                      >
                        {originalLang ? data.nameORIGINAL : data.nameEN}
                      </Dialog.Title>
                      <h4 className=" font-medium text-slate-700">
                        {originalLang ? data.roleORIGINAL : data.roleEN}
                      </h4>
                      <div className="space-y-4 text-slate-600">
                        <p className="text-left">
                          {originalLang ? data.bioORIGINAL : data.bioEN}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4 border-t border-slate-100 p-4">
                    <a
                      className="inline-flex cursor-pointer rounded bg-slate-50 px-3 py-2 font-medium text-slate-500 transition-all hover:bg-slate-200"
                      onClick={() => setOriginalLang(!originalLang)}
                    >
                      {originalLang ? 'Show in English' : data.langSwitch}
                    </a>
                    <a
                      className="inline-flex cursor-pointer rounded bg-rose-500 px-3 py-2 font-medium text-white transition-all hover:bg-slate-200"
                      onClick={closeBio}
                    >
                      Close
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <section
        id="speakers"
        aria-labelledby="Speakers"
        className="bg-white py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-slate-800 sm:text-5xl"
            >
              Speakers
            </h2>
            <p className="mt-4 font-display text-xl tracking-tight text-slate-600 lg:text-2xl">
              This year we will host over 30 speakers from many different
              countries. We will announce lists of speakers as soon as possible!
            </p>
          </div>

          <div className="mt-10 flex gap-4 border-b pb-4 pr-8">
            <a
              onClick={() => setSelectedDay(0)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 0 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              May 25
            </a>
            <a
              onClick={() => setSelectedDay(1)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 1 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              May 26
            </a>
            <a
              onClick={() => setSelectedDay(2)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 2 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              Artists
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
            {dataSpeakers[selectedDay].speakers.map((speaker, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="relative aspect-square w-24 rounded-2xl rounded-bl-3xl rounded-tr-3xl border-2 border-rose-300 ring-4 ring-rose-50">
                    <Image
                      src={speaker.image}
                      fill
                      alt=""
                      className="rounded-2xl rounded-tr-3xl rounded-bl-3xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900">
                      {speaker.nameEN}
                    </h3>
                    <h4 className=" text-slate-700">{speaker.roleEN}</h4>
                    <a
                      onClick={() => setSpeaker(speaker)}
                      className="mt-1 inline-flex cursor-pointer rounded bg-transparent px-2 py-1 pl-0 text-sm text-rose-500 transition-all hover:bg-rose-500 hover:pl-2 hover:text-white"
                    >
                      About this speaker
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

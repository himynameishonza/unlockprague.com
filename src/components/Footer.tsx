import { Container } from '@/components/Container'
import Logo from '@/components/Logo'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
export function Footer() {
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
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded bg-white px-8 pb-10 pt-10 text-left align-middle shadow-xl transition-all">
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
                    Personal Data Protection Policy
                  </Dialog.Title>
                  <div className="mt-4 space-y-4 text-slate-800">
                    <p>
                      We treat personal data in compliance with the legislation
                      in force. In particular, we assure the protection of
                      personal data in accordance with Regulation (EU) 2016/679
                      – General Data Protection Regulation (GDPR). GDPR is
                      uniformly applicable in the whole EU since 25 May 2018.
                    </p>
                    <p>
                      The principles stated below provide a summary of the basic
                      rules that we follow when gathering personal data and
                      ensuring that it is kept confidential and secure.
                    </p>
                    <p>
                      Since we work on a number of projects that have separate
                      webpages (within which specific cases of personal data
                      processing may occur), this text provides a basic
                      framework. You will always find specific information on
                      processing on the site where we are requesting some
                      personal data from you.
                    </p>
                    <h3 className="font-bold text-slate-500">
                      Basic principles
                    </h3>
                    <p>
                      In general, we always process your personal data only to
                      the extent necessary for the given purpose. Personal data
                      may be divided into two groups – personal data we are
                      allowed to process without your consent, and personal data
                      that we may not process without your consent.
                    </p>
                    <p>
                      We process personal data without your consent in cases
                      when:
                    </p>
                    <ul className="list-outside list-disc space-y-4 pl-8">
                      <li>
                        the data is necessary for us to fulfill a legal
                        obligation (e.g. the Accounting Act – zákon o
                        účetnictví),
                      </li>
                      <li>
                        the data is needed in order to fulfill a contract we are
                        entering into with you,
                      </li>
                      <li>
                        we have a legitimate interest in the data processing
                        (typically record-keeping and informing about our
                        activities). In the remaining cases, we process data
                        based on your consent.
                      </li>
                    </ul>
                    <p>
                      We process personal data in such a way that it is
                      appropriately secured against unauthorized access,
                      accidental loss, destruction, or damage.
                    </p>
                    <p>
                      We store personal data only for the necessary period of
                      time and we archive the data according to the legal time
                      limits provided for in the legislation.
                    </p>
                    <h3 className="font-bold text-slate-500">
                      What kind of personal data we process most frequently
                      through our webpage
                    </h3>
                    <ol className="list-decimal space-y-4 pl-8">
                      <li>
                        Cookies – Cookies are a tool enabling web functionality
                        for a specific user. You can find information on
                        cookies, which ones we collect and for what purposes,
                        including instructions how to prevent them to be stored,
                        here.
                      </li>

                      <li>
                        Data on persons who sign up for a programme, activity
                        etc. – If you decide to sign up for a programme,
                        activity etc. through one of the webpages we operate, we
                        process your data you provide to us as part of the
                        sign-up.
                      </li>

                      <li>
                        {' '}
                        Newsletters – If you decide to subscribe to a newsletter
                        or another information material through one of the
                        webpages we operate, we require your consent to the
                        processing of the contact details provided (e-mail).
                      </li>
                    </ol>
                    <h3 className="font-bold text-slate-500">
                      List of processors
                    </h3>
                    <p>
                      We do not sell your data, nor do we hand it over to other
                      parties in another way, except for our contractual
                      partners who enable us to communicate with you, and except
                      for situations when we have a legal obligation to hand
                      your data over to another person.
                    </p>
                    <p>
                      We publish an up-to-date list of processors or other
                      recipients. The notice on processing of your data for a
                      specific purpose always refers to a specific list.
                    </p>
                    <h3 className="font-bold text-slate-500">
                      Information on your fundamental rights
                    </h3>
                    <p>
                      As a data subject, you have the following fundamental
                      rights:
                    </p>
                    <ol className="list-inside list-decimal pl-8">
                      <li>
                        right to request information on which personal data of
                        yours we are processing,
                      </li>
                      <li>
                        right to request explanation from us regarding the
                        processing of personal data,
                      </li>
                      <li>
                        right to request access to such data from us, right to
                        have the data updated, corrected or restricted, as the
                        case may be, and right to object to processing,
                      </li>
                      <li>
                        in the case of automated processing of personal data,
                        you have a right to data portability,
                      </li>
                      <li>
                        right to withdraw the consent anytime (where the
                        processing is based on consent), for example by sending
                        an e-mail or letter to the contact details below,
                      </li>
                      <li>
                        right to request the deletion of personal data from us
                        (we are obliged to comply, unless we are required to
                        process the data in order to fulfil a legal obligation),
                      </li>
                      <li>
                        right to address us or the Office for Personal Data
                        Protection in case of doubt regarding the compliance
                        with the obligations related to the processing of
                        personal data.
                      </li>
                    </ol>
                    <h3 className="font-bold text-slate-500">
                      Details about the Personal Data Controller
                    </h3>
                    <p>
                      Prague Civil Society Centre, nadační fond
                      <br />
                      Lazarská 11/6 120 00 Prague 2<br />
                      Czech Republic
                      <br />
                      <br />
                      ID No. 04190815
                      <br />
                      registered registered in the Register of Endowments
                      maintained by the Municipal Court in Prague, Section N,
                      File 1251.
                    </p>
                    <h3 className="font-bold text-slate-500">
                      Contact details
                    </h3>{' '}
                    <p>
                      info@praguecivilsociety.org, contact details of the Data
                      Protection Officer: anthony@praguecivilsociety.org
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded bg-rose-500 p-4 text-base font-semibold text-white transition-all hover:bg-rose-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <footer className="py-24">
        <Container className="flex flex-col items-center justify-between lg:flex-row">
          <div>
            <Logo className="h-8 w-auto" mono />
          </div>
          <div className="space-y-1 text-center lg:text-right">
            <p className="mt-6 text-rose-500 lg:mt-0">
              Questions? Contact us at{' '}
              <a
                className="text-white underline-offset-2 hover:underline"
                href="mailto:unlockfest2023@gmail.com"
              >
                unlockfest2023@gmail.com
              </a>
            </p>
            <p className="mt-6 text-sm text-slate-400 lg:mt-0">
              <a
                onClick={() => setIsOpen(true)}
                className="cursor-pointer underline transition-all hover:text-white"
              >
                Personal data protection
              </a>
              <span className="mx-2 opacity-20">|</span>Copyright &copy;{' '}
              {new Date().getFullYear()} Prague Civil Society Centre, All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Logo from '@/components/Logo'
import { ReactNode } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ icon, link }: { icon: ReactNode; link: string }) => {
  return (
    <a
      href={link}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 hover:text-rose-500"
    >
      {icon}
    </a>
  )
}
export function Header() {
  return (
    <header className="absolute right-0 left-0 top-0 isolate z-40 pb-4">
      <Container className="mt-2 flex flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-between  lg:mt-10">
        <div className="mt-8 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-8 w-auto" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-rose-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-2 px-4">
            <p>
              <time dateTime="2022-04-04">25</time>-
              <time dateTime="2022-04-06">26 of May, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Kasárna Karlín, Prague</p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-8 lg:mt-0">
          <div className="flex items-center gap-2">
            <SocialButton
              link="https://www.facebook.com/praguecivilsociety"
              icon={<FaFacebookF />}
            />
            <SocialButton
              link="https://www.instagram.com/prague_civil_society_centre/"
              icon={<FaInstagram />}
            />
            <SocialButton
              link="https://www.youtube.com/@PragueCivilSocietyCentre"
              icon={<FaYoutube />}
            />
          </div>
          <Button href="#" className="hidden  sm:flex">
            Registration
          </Button>
        </div>
      </Container>
    </header>
  )
}

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Logo from '@/components/Logo'

export function Header() {
  return (
    <header className="absolute right-0 left-0 top-0 z-50 pb-4 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-8 w-auto " shapeClassName="fill-rose-500" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-rose-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">01</time>-
              <time dateTime="2022-04-06">03 of March, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Kasárna Karlín, Prague</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <a className="text-bold cursor-pointer whitespace-nowrap rounded-full bg-rose-50 py-2 px-3 text-sm font-medium hover:bg-rose-500 hover:text-white">
            EN -
          </a>
          <Button href="#">Registration</Button>
        </div>
      </Container>
    </header>
  )
}

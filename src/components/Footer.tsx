import { Container } from '@/components/Container'
import Logo from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-8 w-auto" shapeClassName="fill-slate-500" />
        <p className="mt-6 text-base text-slate-400 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Prague Civil Society, All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}

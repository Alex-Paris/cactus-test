import { useMemo } from 'react'

import logoImg from '../assets/logo.svg'
import { Button } from './Button'

export function Navbar() {
  const menu = useMemo(() => ['Templates', 'Pricing', 'Blog', 'Jobs'], [])

  return (
    <nav className="absolute flex w-full items-center justify-between px-11 py-12 font-bold text-white">
      <img src={logoImg} alt="Mind the Graph Logo" />

      <div className="flex items-center gap-10">
        {menu.map((item) => (
          <a key={item} href="#" className="transition hover:text-gray">
            {item}
          </a>
        ))}

        <div className="space-x-4">
          <Button styleColor="transparent">Login</Button>
          <Button>Sign up free</Button>
        </div>
      </div>
    </nav>
  )
}

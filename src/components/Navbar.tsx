import { useMemo } from 'react'

import listIcon from '../assets/icons/ico_list.svg'
import logoImg from '../assets/logo.svg'
import { Button } from './Button'

export function Navbar() {
  const menu = useMemo(() => ['Templates', 'Pricing', 'Blog', 'Jobs'], [])

  return (
    <nav className="absolute left-1/2 flex w-full max-w-[90rem] -translate-x-1/2 items-center justify-between px-11 py-12 font-bold text-white">
      <img src={logoImg} alt="Mind the Graph Logo" />

      <div className="hidden items-center gap-6 md:flex lg:gap-10">
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

      <img src={listIcon} alt="Icon of the menu" className="block md:hidden" />
    </nav>
  )
}

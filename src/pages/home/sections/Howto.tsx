import { useMemo } from 'react'

import dragIcon from '../../../assets/icons/ico_drag.svg'
import multipleIcon from '../../../assets/icons/ico_multiple.svg'
import odemandIcon from '../../../assets/icons/ico_odemand.svg'
import platformIcon from '../../../assets/icons/ico_platform.svg'
import premadeIcon from '../../../assets/icons/ico_premade.svg'
import shareIcon from '../../../assets/icons/ico_share.svg'
import { Button } from '../../../components/Button'

export function HowTo() {
  const items = useMemo(
    () => [
      {
        title: 'Drag and Drop',
        text: 'Easily select and manage illustrations, text and templates',
        icon: dragIcon,
      },
      {
        title: 'Pre-Made Resources',
        text: 'Don’t waste time! Use our templates and just customize colors, text etc',
        icon: premadeIcon,
      },
      {
        title: 'Online Platform',
        text: 'Access your creations at any time and from anywhere',
        icon: platformIcon,
      },
      {
        title: 'On-demand Illustrations',
        text: 'Don’t find exactly what you need? We will design it for you!',
        icon: odemandIcon,
      },
      {
        title: 'Multiple Sizing Options',
        text: 'Ready-to-go templates in all popular sizes',
        icon: multipleIcon,
      },
      {
        title: 'Share creations',
        text: 'Share your creations with your team or other users',
        icon: shareIcon,
      },
    ],
    [],
  )

  return (
    <section>
      <div className="rounded-3xl bg-purple-dark px-24 pb-16 pt-20 text-center text-white">
        <p className="text-4xl font-bold">
          Create effective science figures in minutes
        </p>
        <p className="mt-14 text-xl leading-8">
          We built Mind the Graph for simplicity. The platform is easy to use
          and just about anybody can use it to create great infographics and
          presentations - from beginners to professionals, individuals to groups
          and small labs to large organizations
        </p>

        <div className="mt-24 grid grid-cols-3 gap-32">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <img src={item.icon} alt="" height={84} />
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-xl">{item.text}</p>
            </div>
          ))}
        </div>

        <Button styleColor="transparent" className="mt-14 uppercase">
          Explore Mind the Graph
        </Button>
      </div>
    </section>
  )
}

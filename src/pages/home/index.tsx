import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { HowTo } from './sections/Howto'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowTo />
    </>
  )
}

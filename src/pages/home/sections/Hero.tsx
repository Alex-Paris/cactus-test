import heroImg from '../../../assets/hero.webp'
import { Button } from '../../../components/Button'

export function Hero() {
  return (
    <div className="h-[544px] bg-gradient-to-r from-orange to-pink">
      <section className="flex h-[544px] justify-between px-28 pt-36">
        <div className="flex h-full w-1/3 flex-col">
          <p className="my-auto text-4xl font-black text-white">
            Discover all possibilities of using this powerfull tool and create
            science figures, posters and infographics.
          </p>

          <Button className="mt-auto w-fit px-10">Start creating now</Button>
        </div>

        <img src={heroImg} alt="Hero image" className="-mb-20" />
      </section>
    </div>
  )
}

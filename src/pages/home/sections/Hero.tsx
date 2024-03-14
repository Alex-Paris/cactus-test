import heroImg from '../../../assets/hero.webp'
import { Button } from '../../../components/Button'

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange to-pink lg:h-[544px]">
      <section className="flex flex-col items-center  pt-36 lg:h-[544px] lg:flex-row lg:justify-between lg:px-28">
        <div className="flex h-full w-full flex-col md:w-1/2 lg:w-1/3">
          <p className="my-auto text-center text-2xl font-black text-white lg:text-left xl:text-4xl">
            Discover all possibilities of using this powerfull tool and create
            science figures, posters and infographics.
          </p>

          <Button className="mx-auto mt-4 w-fit px-10 lg:mt-auto">
            Start creating now
          </Button>
        </div>

        <img
          src={heroImg}
          alt="Hero image"
          className="-mb-20 mt-4 w-full md:w-[90%] lg:mt-0 lg:w-[60%]"
        />
      </section>
    </div>
  )
}

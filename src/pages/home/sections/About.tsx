import { useMemo } from 'react'

import caretRightIcon from '../../../assets/caret-right.svg'
import ideaImg from '../../../assets/icon-idea.svg'
import posterImg from '../../../assets/icon-poster.svg'
import presentationImg from '../../../assets/icon-presentation.svg'

export function About() {
  const cards = useMemo(
    () => [
      {
        title: 'Graphical Abstracts and Infographics',
        text: 'Improve your paper`s impact and visibility through quality visual communication',
        image: ideaImg,
      },
      {
        title: 'Scientific Poster in a few clicks',
        text: 'Add visual impact to your posters with scientific illustrations and graphics',
        image: posterImg,
      },
      {
        title: 'Make better Slide Presentation',
        text: 'Transform your lectures, meetings and classes into high-impact visual experiences',
        image: presentationImg,
      },
    ],
    [],
  )

  return (
    <section className="pt-24 text-center">
      <p className="text-4xl font-bold text-purple">
        Visualize what Mind the Graph can do for you
      </p>

      <div className="mt-20 flex gap-20">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group flex cursor-pointer flex-col items-center gap-3 rounded-lg py-4 text-xl transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <img src={card.image} alt="" width={214} />
            <p className="font-bold text-purple">
              Graphical Abstracts and Infographics
            </p>
            <p className="font-medium">
              Improve your paper`s impact and visibility through quality visual
              communication
            </p>
            <a
              href="#"
              className="mt-16 flex gap-1 text-lg font-bold uppercase text-purple"
            >
              <img
                src={caretRightIcon}
                alt=""
                className="transition-transform group-hover:translate-x-1"
              />{' '}
              Learn More
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

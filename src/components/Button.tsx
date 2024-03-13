import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const style = tv({
  base: 'font-bold text-white border rounded-full px-6 py-2 transition-colors',
  variants: {
    styleColor: {
      default: 'bg-purple border-transparent hover:bg-purple-dark',
      transparent: 'bg-transparent border-white hover:bg-[#fff3]',
    },
  },
  defaultVariants: {
    styleColor: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof style>

export function Button({ children, className, styleColor }: ButtonProps) {
  return (
    <button className={style({ styleColor, className })}>{children}</button>
  )
}

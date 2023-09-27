import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
const typographyVariants = tv({
  variants: {
    typography: {
      subtitleLarge: ['font-rubik', 'not-italic', 'text-subtitleLarge'],
      subtitleSmall: ['font-rubik', 'not-italic', 'text-subtitleSmall'],
      body2: ['font-rubik', 'not-italic', 'text-body2'],
      body1: ['font-rubik', 'not-italic', 'text-body1'],
      button: ['font-rubik', 'not-italic', 'text-buton1'],
      caption: ['font-rubik', 'not-italic', 'text-caption'],
      h1: ['font-rubik', 'not-italic', 'text-h1'],
      h2: ['font-rubik', 'not-italic', 'text-h2'],
      h3: ['font-rubik', 'not-italic', 'text-h3'],
      h4: ['font-rubik', 'not-italic', 'text-h4'],
      h5: ['font-rubik', 'not-italic', 'text-h5'],
      h6: ['font-rubik', 'not-italic', 'text-h6'],
    },
  },
  defaultVariants: {
    typography: 'subtitleLarge',
  },
})

export type TextProps = ComponentProps<'span'> &
  VariantProps<typeof typographyVariants>

type TextElement = React.ElementRef<'span'>

const Text = forwardRef<TextElement, TextProps>(
  (
    { typography = 'subtitleLarge', className, children, ...textProps },
    forwardedRef,
  ) => {
    return (
      <span
        ref={forwardedRef}
        className={typographyVariants({ typography, className })}
      >
        {children}
      </span>
    )
  },
)
Text.displayName = 'Text'

export default Text

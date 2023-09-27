import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { BaseButton } from '../base-button'
import { twMerge } from 'tailwind-merge'
type IconButtonElement = React.ElementRef<typeof BaseButton>

export type IconButtonProps = ComponentPropsWithoutRef<typeof BaseButton>
const IconButton = forwardRef<IconButtonElement, IconButtonProps>(
  ({ className, children, ...iconButtonProps }, forwardedRef) => {
    return (
      <BaseButton
        ref={forwardedRef}
        className={twMerge(className, ' px-1 py-1 h-auto')}
        {...iconButtonProps}
      >
        {children}
      </BaseButton>
    )
  },
)

IconButton.displayName = 'BaseButton'

export default IconButton

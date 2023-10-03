import * as React from 'react'
import { IconProps } from './types'

const ArrowBackIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = '1.5rem', ...props }, forwardedRef) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
        data-testid="Svg-ArrowBackIcon"
      >
        <path
          d="M19.0005 10.9997H7.83047L12.7105 6.11973C13.1005 5.72973 13.1005 5.08973 12.7105 4.69973C12.3205 4.30973 11.6905 4.30973 11.3005 4.69973L4.71047 11.2897C4.32047 11.6797 4.32047 12.3097 4.71047 12.6997L11.3005 19.2897C11.6905 19.6797 12.3205 19.6797 12.7105 19.2897C13.1005 18.8997 13.1005 18.2697 12.7105 17.8797L7.83047 12.9997H19.0005C19.5505 12.9997 20.0005 12.5497 20.0005 11.9997C20.0005 11.4497 19.5505 10.9997 19.0005 10.9997Z"
          fill={color}
          data-testid="Svg-ArrowBackIcon-Path"
        />
      </svg>
    )
  },
)
ArrowBackIcon.displayName = 'ArrowBackIcon'
export default ArrowBackIcon

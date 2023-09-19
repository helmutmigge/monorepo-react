import React from "react";
import { IconProps } from './types';

const Logo = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, forwardedRef) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="41"
      fill="none"
      viewBox="0 0 150 41"
      {...props}
      ref={forwardedRef}
    >
      <g clipPath="url(#clip0_241_4849)">
        <path          
          fill="#7A7A7A"
          d="M70.661 12.372h-2.363v19.399h2.363V12.372zM91.588 12.372h-2.606l-5.949 7.652-6.085-7.652h-2.62l7.421 9.63-7.414 9.769h2.616l6.086-7.835 6.13 7.835h2.613l-7.414-9.772 7.222-9.627zM101.57 12.06c-2.623 0-4.778.965-6.403 2.866-1.612 1.843-2.429 4.249-2.429 7.154 0 2.905.81 5.397 2.476 7.25 1.656 1.84 3.853 2.772 6.53 2.772 3.33 0 5.773-.938 7.466-2.869l.216-.243-1.564-1.668-.258.307c-.594.704-1.527 1.29-2.697 1.691a9.698 9.698 0 01-3.163.55c-3.708 0-6.172-2.62-6.498-6.863h14.973l.053-.294c.046-.25.092-.553.092-.915 0-2.797-.833-5.142-2.476-6.966-1.652-1.84-3.776-2.773-6.314-2.773h-.004zm-6.27 8.665c.445-4.008 2.823-6.482 6.27-6.482 3.448 0 5.805 2.472 6.252 6.482H95.298h.001zM122.237 12.038c-2.619 0-4.767.968-6.386 2.872-1.61 1.845-2.426 4.254-2.426 7.16 0 2.908.816 5.317 2.426 7.209 1.635 1.874 3.783 2.824 6.386 2.824 2.602 0 4.752-.95 6.389-2.823l.003-.003c1.607-1.89 2.421-4.315 2.421-7.204 0-2.89-.8-5.295-2.379-7.156-1.621-1.908-3.786-2.875-6.434-2.875v-.004zm4.777 15.59c-1.21 1.485-2.817 2.239-4.777 2.239-1.961 0-3.62-.717-4.819-2.19-1.06-1.307-1.513-2.999-1.513-5.655s.467-4.315 1.513-5.605c1.199-1.474 2.776-2.191 4.82-2.191 2.044 0 3.624.717 4.824 2.191 1.057 1.304 1.508 2.98 1.508 5.605 0 2.625-.479 4.285-1.555 5.607h-.001zM148.025 14.65c-1.421-1.717-3.42-2.59-5.938-2.59h-.046c-2.523 0-4.522.873-5.938 2.587-1.312 1.51-1.977 3.596-1.977 6.202V31.77h2.32V20.368c.002-1.775.497-3.24 1.474-4.356a4.736 4.736 0 012.517-1.577l.144-.032a6.969 6.969 0 012.966 0l.128.028a4.759 4.759 0 012.537 1.584c.975 1.114 1.47 2.578 1.47 4.353v11.403h2.32V20.849c0-2.606-.665-4.691-1.975-6.199h-.002zM57.437 12.372h-5.22A2.22 2.22 0 0050 14.597V31.77h2.363v-7.293h4.014c2.755 0 4.574-.461 6.08-1.539 1.872-1.321 2.126-3.046 2.126-4.558 0-3.875-2.539-6.009-7.148-6.009h.002zm3.398 8.89l-.007.003c-1.02.719-2.211 1.027-3.98 1.027h-4.485v-6.84a.92.92 0 01.92-.923h4.152c1.663 0 2.667.304 3.594 1.091.828.675 1.248 1.615 1.248 2.79 0 1.246-.486 2.206-1.442 2.851z"
        ></path>
        <path
          fill="url(#paint0_linear_241_4849)"
          d="M30.95 40.127H10.778a4.572 4.572 0 01-4.052-2.443 3.17 3.17 0 01-.265-.603h.002a2.962 2.962 0 01-.045-.132L.225 17.836a4.596 4.596 0 011.066-4.621c.146-.162.309-.31.487-.44l.111-.083L18.1.881A4.559 4.559 0 0122.812.47c.198.089.389.198.567.329.038.028.077.054.113.082L39.7 12.694a4.593 4.593 0 011.846 4.367c-.023.218-.07.432-.137.644h-.002a2.29 2.29 0 01-.042.133l-6.19 19.113a4.578 4.578 0 01-3.57 3.11 3.13 3.13 0 01-.653.068l-.001-.002zm-18.708-1.91h18.57c.146 0 .29-.013.43-.035a1.25 1.25 0 00.661-.406 1.23 1.23 0 00.285-1.004c-.457-2.949-1.381-7.316-3.195-11.37a26.462 26.462 0 00-1.603-3.06c-1.652 7.535-10.174 13.168-15.15 15.873l.002.001zm-3.849-1.46c.137.225.342.403.588.506.342.142.71.128 1.04-.039 2.654-1.347 6.51-3.577 9.793-6.56a26.165 26.165 0 002.405-2.475c-.418.042-.838.06-1.258.06-7.258 0-14.595-5.91-18.473-9.607l5.738 17.715c.046.14.101.274.165.4h.002zm15.051-21.154c6.634 3.906 9.34 13.775 10.368 19.357l5.738-17.716c.046-.14.078-.28.101-.421.02-.263-.04-.528-.18-.756a1.228 1.228 0 00-.865-.583c-2.937-.477-7.362-.943-11.766-.466a26.194 26.194 0 00-3.396.583v.002zm-5.723 10.333c2.22.545 4.273.545 6.143 0 1.2-1.949 1.838-3.907 1.898-5.86-1.476-1.75-3.137-2.96-4.97-3.622-2.113.868-3.775 2.078-4.969 3.62.17 2.286.803 4.245 1.898 5.86v.002zM2.682 14.522c-.17.2-.275.45-.296.717-.03.369.097.717.357.98 2.098 2.116 5.404 5.105 9.247 7.316 1.059.609 2.09 1.119 3.09 1.53-3.078-7.07.516-16.653 2.955-21.773L3.01 14.24a2.69 2.69 0 00-.328.282zm18.84-12.418c-.098 0-.195.013-.292.035-.36.086-.65.315-.819.644-1.359 2.655-3.17 6.733-4.078 11.08a26.536 26.536 0 00-.496 3.421c5.752-5.122 15.947-4.654 21.557-3.91L22.37 2.427a2.787 2.787 0 00-.368-.226 1.234 1.234 0 00-.48-.096z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_241_4849"
          x1="0"
          x2="41.589"
          y1="20.064"
          y2="20.064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22BC9F"></stop>
          <stop offset="1" stopColor="#4FC8EB"></stop>
        </linearGradient>
        <clipPath id="clip0_241_4849">
          <path fill="#fff" d="M0 0H150V40.127H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
})
Logo.displayName = "Logo"
export default Logo
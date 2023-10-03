import React from 'react'

const HelpLogo = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGElement>
>((props, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="283"
      height="288"
      fill="none"
      {...props}
      ref={forwardedRef}
      viewBox="0 0 283 288"
    >
      <g clipPath="url(#clip0_156_3708)">
        <path
          fill="#090751"
          d="M250.196 247.926c-5.81 6.13-11.309 10.083-15.653 13.207-51.066 36.715-111.491 26.012-124.333 23.399-18.963-3.86-55.62-11.32-82.121-42.548-40.094-47.247-33.85-121.682-2.75-170.817 5.689-8.988 35.738-58.871 96.813-66.872 36.962-4.841 80.048 4.923 111.25 31.118 65.495 54.983 60.833 166.058 16.796 212.514l-.002-.001z"
          opacity="0.1"
        ></path>
        <path
          fill="#BDBDE5"
          d="M193.465 278.374a1.83 1.83 0 01-1.227-.727c-4.31-5.82-35.651-51.371 6.059-93.007 39.596-39.526 57.544-47.643 59.932-70.866.279-2.712 3.937-3.363 5.141-.918 8.998 18.272 23.015 60.911-23.374 88.897-51.171 30.872-46.978 64.714-44.503 74.331a1.841 1.841 0 01-2.028 2.29z"
        ></path>
        <path
          fill="#BDBDE5"
          d="M199.812 279.24a2.65 2.65 0 01-2.266-2.222c-1.222-7.921-4.221-37.518 17.539-45.367 23.956-8.64 43.296 13.715 60.905-3.782.927-.921 2.484-.119 2.264 1.17-1.569 9.14-8.549 30.311-39.609 34.571-33.243 4.56-36.985 8.381-36.314 13.122.208 1.462-1.059 2.708-2.519 2.509v-.001z"
        ></path>
        <path
          fill="#fff"
          d="M257.07 137.452c-.406 1.723-.947 3.34-1.59 4.944a49.753 49.753 0 01-2.156 4.696c-1.572 3.069-3.46 5.973-5.526 8.739-4.161 5.518-9.195 10.366-14.743 14.477-2.767 2.044-5.726 3.922-8.65 5.619a78.541 78.541 0 00-8.211 5.511c-5.251 4.009-10.013 8.662-14.219 13.762-8.378 10.21-14.324 22.532-16.281 35.651-.999 6.543-1.011 13.244-.111 19.844.889 6.607 2.769 13.077 5.248 19.315a.652.652 0 01-.359.846.654.654 0 01-.829-.325c-2.898-6.164-5.064-12.719-6.263-19.487a69.21 69.21 0 01-1.079-10.259c-.082-3.445.063-6.905.496-10.334.833-6.864 2.766-13.588 5.548-19.918 2.791-6.333 6.479-12.248 10.786-17.643 4.305-5.403 9.301-10.237 14.763-14.461a82.446 82.446 0 018.584-5.807c2.924-1.682 5.699-3.389 8.389-5.333 5.366-3.841 10.325-8.275 14.591-13.334 2.16-2.508 4.115-5.193 5.903-7.99 1.751-2.804 3.388-5.763 4.566-8.821l.016-.041a.591.591 0 011.127.35v-.001zM198.432 273.867c.101-.287.069-.553.06-.827l-.025-.816-.02-1.633a78.8 78.8 0 01.073-3.261 72.73 72.73 0 01.572-6.504c.591-4.313 1.566-8.612 3.304-12.663 1.718-4.021 4.319-7.865 8.096-10.377a17.825 17.825 0 016.202-2.557c2.197-.464 4.455-.533 6.663-.338 8.653 1.006 17.136 2.668 25.641 4.018 4.236.633 8.532 1.199 12.691.629a18.805 18.805 0 003.041-.697c.979-.342 1.941-.743 2.839-1.271 1.808-1.035 3.399-2.449 4.82-4.019l.004-.005a.528.528 0 01.79.703c-1.44 1.661-3.086 3.197-5.009 4.354-.954.588-1.985 1.046-3.035 1.437-1.06.367-2.15.633-3.25.818-4.429.651-8.82.098-13.105-.491-4.297-.613-8.54-1.411-12.798-2.102-4.245-.692-8.54-1.361-12.767-1.858-2.087-.203-4.196-.153-6.23.258a16.398 16.398 0 00-5.729 2.301c-3.514 2.242-6.063 5.809-7.794 9.671-1.752 3.88-2.792 8.082-3.453 12.322a72.05 72.05 0 00-.681 6.414 75.476 75.476 0 00-.131 3.226l-.012 1.613.01.807c.008.266-.005.541.127.794a.49.49 0 11-.896.063l.003-.01-.001.001z"
          opacity="0.47"
        ></path>
        <path
          fill="url(#paint0_linear_156_3708)"
          d="M153.217 3.27c-13.039-.102-26.19 1.97-37.825 6.807C88.307 21.337 65.32 51.134 74.316 81.57c2.922 9.887 1.387 20.794 11.216 25.091 5.319 2.324 19.802 3.709 25.309 1.876 14.637-4.869 24.257-18.197 16.297-32.975-2.549-4.733-5.849-9.057-8.05-13.96-2.201-4.906-3.205-10.728-.961-15.613 4.406-9.59 19.041-12.64 28.531-12.352 11.201.34 21.351 5.891 27.378 15.416 7.513 11.87 9.416 26.306 8.317 40.084-1.177 14.743-7.381 26.001-16.678 37.31-8.004 9.738-16.819 19.084-22.138 30.517-4.884 10.497-6.48 22.127-6.701 33.61-.043 2.226-11.089 23.2-11.042 29.608.007.905 12.529 3.905 13.432 3.915l22.982.257a1.834 1.834 0 001.855-1.811c.35-31.175 9.92-60.898 34.145-81.835 8.814-7.619 18.307-13.823 25.162-23.44 9.769-13.705 14.589-27.194 13.198-44.109-1.271-15.449-6.347-30.905-16.396-42.892-10.802-12.883-26.611-20.929-43.041-24.4a120.96 120.96 0 00-23.915-2.597h.001z"
        ></path>
        <path
          fill="url(#paint1_linear_156_3708)"
          d="M177.26 259.302c0 14.336-7.93 27.018-22.237 27.018-3.09 0-13.602.029-16.349-.966-9.974-3.61-10.01-11.288-10.01-22.526 0-14.337 4.831-28.435 19.138-28.435 14.307 0 29.459 10.574 29.459 24.909h-.001z"
        ></path>
        <path
          fill="url(#paint2_linear_156_3708)"
          d="M140.828.004c-13.038-.103-26.19 1.969-37.825 6.806-27.085 11.261-50.072 41.058-41.076 71.493 2.923 9.887 9.679 22.332 19.509 26.629 5.318 2.324 11.51 2.17 17.017.338 14.636-4.869 24.257-18.196 16.296-32.975-2.549-4.732-5.849-9.056-8.05-13.96-2.2-4.905-3.204-10.728-.96-15.613 4.405-9.59 19.04-12.64 28.53-12.351 11.201.34 21.351 5.89 27.378 15.415 7.513 11.87 9.416 26.307 8.317 40.084-1.176 14.743-7.38 26.002-16.677 37.311-8.005 9.737-16.819 19.083-22.139 30.516-4.884 10.497-6.48 22.127-6.701 33.61-.043 2.226.706 25.467.753 31.875a1.656 1.656 0 001.637 1.647l22.982.257a1.833 1.833 0 001.855-1.811c.35-31.175 9.92-60.898 34.145-81.835 8.815-7.619 18.308-13.823 25.163-23.439 9.769-13.706 14.588-27.195 13.197-44.11-1.271-15.449-6.347-30.905-16.396-42.892-10.802-12.883-26.611-20.928-43.041-24.4A121.087 121.087 0 00140.828.004z"
        ></path>
        <path
          fill="url(#paint3_linear_156_3708)"
          d="M142.18 285.518c14.307 0 25.905-11.621 25.905-25.957s-11.598-25.957-25.905-25.957-25.904 11.621-25.904 25.957 11.597 25.957 25.904 25.957z"
        ></path>
        <path
          fill="#fff"
          d="M70.501 75.321a.332.332 0 01-.324-.261c-1.816-8.213-2.082-21.075 6.957-35.708 8.823-14.28 21.2-23.837 36.785-28.402 16.661-4.88 36.44-3.834 58.793 3.105a.334.334 0 01-.196.637C129.574 1.36 95.901 10.242 77.7 39.704c-8.922 14.441-8.662 27.12-6.873 35.213a.333.333 0 01-.325.405zM75.951 88.536a.332.332 0 01-.269-.136c-.079-.109-1.945-2.693-3.682-7.245a.333.333 0 01.621-.237c1.702 4.462 3.578 7.063 3.597 7.089a.333.333 0 01-.27.528l.003.001zM150.848 242.737a.334.334 0 01-.15-.036 18.62 18.62 0 00-8.518-2.034.333.333 0 110-.666c3.103 0 6.07.708 8.819 2.105a.333.333 0 01-.151.63v.001zM131.451 275.836a.333.333 0 01-.186-.057 19.564 19.564 0 01-8.606-16.219 19.557 19.557 0 0110.291-17.24.333.333 0 01.315.588 18.888 18.888 0 00-9.942 16.652 18.9 18.9 0 008.314 15.667.334.334 0 01-.187.61l.001-.001z"
          opacity="0.63"
        ></path>
        <g fill="#91B3FA" opacity="0.3">
          <path d="M56.007 48.562a.783.783 0 01-1.102.116c-.654-.53-1.34-1.04-2.04-1.515a.787.787 0 01-.218-1.078l.008-.012a.784.784 0 011.089-.21c.737.5 1.46 1.037 2.147 1.595a.785.785 0 01.116 1.105v-.001zm-6.709-3.478a29.685 29.685 0 00-2.322-1.028.787.787 0 01-.443-1.019.783.783 0 011.016-.444 31.86 31.86 0 012.444 1.082.787.787 0 01.31 1.134.783.783 0 01-1.004.275zm-6.256-2.265a30.11 30.11 0 00-2.493-.483.786.786 0 01.231-1.554c.88.131 1.762.302 2.625.509a.787.787 0 01.476 1.192.784.784 0 01-.84.336zm-6.605-.806a29.407 29.407 0 00-2.538.087.786.786 0 01-.12-1.567 31.755 31.755 0 012.672-.09.785.785 0 01-.014 1.57zm-6.62.688c-.822.18-1.648.398-2.456.648a.785.785 0 01-.463-1.5c.85-.264 1.72-.493 2.585-.683a.784.784 0 01.824 1.196.782.782 0 01-.49.339zm-6.302 2.14c-.764.358-1.521.753-2.251 1.176a.786.786 0 01-.783-1.36 31.589 31.589 0 012.37-1.239.784.784 0 01.99 1.14.786.786 0 01-.325.284l-.001-.002zM5.847 68.025a.785.785 0 01-.658-.894 31.13 31.13 0 01.513-2.63.784.784 0 111.525.367 29.69 29.69 0 00-.487 2.497.785.785 0 01-.892.66h-.001zm12-19.7a29.761 29.761 0 00-1.932 1.65.782.782 0 01-1.108-.042.787.787 0 01.041-1.11 31.198 31.198 0 012.035-1.736.786.786 0 01.964 1.24v-.002zM7.45 61.37a.786.786 0 01-.441-1.02c.325-.827.69-1.65 1.085-2.448a.783.783 0 011.051-.355.787.787 0 01.354 1.054 30.3 30.3 0 00-1.031 2.326.784.784 0 01-1.017.442zm5.647-8.38a29.722 29.722 0 00-1.516 2.04.783.783 0 01-1.09.208.786.786 0 01-.216-1.077l.01-.013c.5-.736 1.036-1.46 1.595-2.149a.784.784 0 111.217.99zM6.296 73.182a.783.783 0 00.127-.452 30.382 30.382 0 01-.014-1.224.785.785 0 10-1.567-.014c-.004.429 0 .862.014 1.288a.784.784 0 001.442.402h-.002z"></path>
        </g>
        <g fill="#91B3FA" opacity="0.3">
          <path d="M16.315 94.925a.787.787 0 00-.132-1.01c-.3-.272-.6-.555-.89-.84a.785.785 0 00-1.098 1.121c.306.3.62.598.937.884a.783.783 0 001.183-.155zM61.523 90.22a.782.782 0 01-1.095.177.786.786 0 01-.176-1.097c.482-.67.944-1.37 1.377-2.09a.784.784 0 111.343.811 32.347 32.347 0 01-1.45 2.198v.001zm2.37-5.595a.786.786 0 01-.409-1.032c.329-.765.63-1.552.892-2.339a.783.783 0 01.993-.496c.41.138.631.584.495.995a31.692 31.692 0 01-.94 2.462.782.782 0 01-1.03.41zM58.79 93.51a31.532 31.532 0 01-1.896 1.828.783.783 0 01-1.106-.068.787.787 0 01.068-1.108 29.282 29.282 0 001.8-1.736.783.783 0 011.224.97.874.874 0 01-.09.116v-.002zm7.233-15.276a.786.786 0 01-.626-.916c.153-.818.273-1.651.357-2.478a.784.784 0 111.56.158 31.483 31.483 0 01-.376 2.61.785.785 0 01-.916.627zm-12.514 19.71c-.726.483-1.482.942-2.25 1.365a.783.783 0 01-1.064-.31.787.787 0 01.31-1.067 29.94 29.94 0 002.135-1.296.784.784 0 11.868 1.308zm-6.123 3.165c-.816.313-1.655.596-2.492.84a.784.784 0 11-.439-1.508 30.32 30.32 0 002.368-.798.785.785 0 11.562 1.467v-.001zm-6.666 1.752a31.54 31.54 0 01-2.616.277.785.785 0 01-.1-1.568 30.112 30.112 0 002.486-.262.784.784 0 01.772 1.206.784.784 0 01-.543.349v-.002zm-6.889.254a30.963 30.963 0 01-2.613-.304.786.786 0 01.247-1.552c.818.13 1.654.228 2.482.289a.784.784 0 01-.116 1.566v.001zm-6.78-1.269a30.81 30.81 0 01-2.48-.874.786.786 0 01.582-1.46c.771.309 1.563.589 2.356.83a.787.787 0 01.429 1.18.785.785 0 01-.886.323v.001zm-6.33-2.728a32.392 32.392 0 01-2.232-1.391.778.778 0 01-.206-1.092.782.782 0 011.089-.206 29.77 29.77 0 002.122 1.324.786.786 0 01.27 1.111.783.783 0 01-1.043.255zM67.325 71.154a.786.786 0 00.127-.455c-.016-.425-.04-.858-.074-1.286a.784.784 0 10-1.564.123c.032.407.056.817.07 1.221a.784.784 0 001.441.398z"></path>
        </g>
        <path
          fill="#604CCD"
          d="M57.493 61.974a.367.367 0 00-.341-.255l-4.458-.097a19.464 19.464 0 00-4.066-4.814l.636-4.42a.366.366 0 00-.195-.378l-4.755-2.454a.366.366 0 00-.421.061l-3.22 3.088a19.385 19.385 0 00-6.272-.518l-2.671-3.579a.365.365 0 00-.406-.13l-5.093 1.636a.366.366 0 00-.255.341l-.097 4.468a19.447 19.447 0 00-4.804 4.074l-4.41-.638a.364.364 0 00-.379.195l-2.448 4.766a.366.366 0 00.062.422l3.081 3.226a19.501 19.501 0 00-.517 6.285l-3.571 2.676a.367.367 0 00-.13.406l1.633 5.104c.047.15.184.252.34.255l4.458.098a19.468 19.468 0 004.066 4.814l-.636 4.42a.365.365 0 00.195.378l4.756 2.453a.364.364 0 00.42-.062l3.22-3.088c2.08.522 4.197.686 6.272.519l2.671 3.578a.365.365 0 00.406.13l5.093-1.635a.366.366 0 00.255-.342l.097-4.467a19.447 19.447 0 004.804-4.074l4.411.638a.365.365 0 00.378-.196l2.448-4.765a.366.366 0 00-.061-.422l-3.082-3.227c.52-2.082.684-4.204.517-6.284l3.571-2.677a.367.367 0 00.13-.406l-1.632-5.104v.001z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M39.976 75.27a5.376 5.376 0 01-9.4-3.224 5.357 5.357 0 011.334-3.901 5.376 5.376 0 017.588-.478 5.403 5.403 0 01.478 7.604zm-8.148-3.303a4.121 4.121 0 007.206 2.472 4.14 4.14 0 00-.366-5.83 4.121 4.121 0 00-6.84 3.358z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M46.906 78.973a13.466 13.466 0 001.625-3.548l.009-.028.022-.079.042-.153a.316.316 0 00-.221-.386.313.313 0 00-.384.222 12.715 12.715 0 01-.97 2.506c-2.041 3.976-5.913 6.405-10.058 6.79a12.498 12.498 0 01-6.902-1.344c-.387-.2-.762-.417-1.12-.652a12.521 12.521 0 01-5.11-6.718 12.557 12.557 0 01.796-9.625c3.18-6.189 10.786-8.63 16.96-5.445a12.582 12.582 0 014.933 4.556.314.314 0 10.533-.332 13.203 13.203 0 00-5.178-4.784c-6.482-3.343-14.47-.776-17.806 5.717a13.185 13.185 0 00-.834 10.105 13.14 13.14 0 006.54 7.736 13.11 13.11 0 0010.084.836 13.117 13.117 0 007.039-5.376v.002z"
        ></path>
        <g fill="#91B3FA" opacity="0.3">
          <path d="M87.956 37.298a.486.486 0 00-.04-.58 20.754 20.754 0 00-.834-.918.484.484 0 10-.696.675c.273.282.54.577.796.875a.484.484 0 00.773-.051v-.001zM85.252 34.741a.483.483 0 01-.68.073 19.965 19.965 0 00-1.646-1.194c-.12-.078-.24-.154-.361-.23a.486.486 0 01-.156-.668.501.501 0 01.667-.156 20.793 20.793 0 012.103 1.493.486.486 0 01.103.642l-.029.04h-.001zm-4.852-2.52a20.002 20.002 0 00-2.29-.896.485.485 0 01.295-.924c.814.262 1.622.578 2.401.94a.486.486 0 01.203.704.484.484 0 01-.61.176zm-4.674-1.5a20.035 20.035 0 00-2.44-.304.485.485 0 01.06-.969c.856.052 1.717.16 2.559.319a.486.486 0 01-.179.954zm-4.9-.303c-.816.05-1.637.153-2.44.303a.485.485 0 01-.179-.954c.84-.159 1.702-.266 2.558-.318a.485.485 0 01.06.969h.002zm-4.824.904c-.779.248-1.55.547-2.293.888a.484.484 0 01-.404-.881c.779-.359 1.587-.671 2.404-.932a.484.484 0 01.552.728.48.48 0 01-.259.197zm-4.459 2.05c-.695.43-1.37.908-2.006 1.42a.484.484 0 11-.606-.756 20.776 20.776 0 012.103-1.489.484.484 0 11.508.825h.001zm-3.821 3.08a19.874 19.874 0 00-1.598 1.872.485.485 0 11-.774-.585 21.08 21.08 0 011.676-1.962.484.484 0 11.694.675h.002zm-4.684 6.39a.485.485 0 01-.257-.636 20.949 20.949 0 011.15-2.312.48.48 0 01.662-.177c.232.134.31.431.176.664-.053.091-.105.185-.158.28a20.164 20.164 0 00-.938 1.925.484.484 0 01-.634.258l-.001-.002z"></path>
        </g>
        <g fill="#91B3FA" opacity="0.3">
          <path d="M89.418 62.028c-.47.702-.986 1.383-1.534 2.022a.484.484 0 11-.734-.633 19.967 19.967 0 001.463-1.928.483.483 0 01.671-.134c.22.148.281.446.138.668l-.004.005zm.629-1.981a.486.486 0 01-.213-.652c.364-.72.688-1.467.963-2.224a.485.485 0 01.91.331 21.173 21.173 0 01-1.009 2.33.485.485 0 01-.652.213v.002zm-3.932 5.825a20.916 20.916 0 01-1.976 1.59.484.484 0 11-.56-.791c.655-.465 1.29-.975 1.886-1.518a.483.483 0 01.683.033.487.487 0 01-.033.685zm5.73-10.443a.486.486 0 01-.363-.583c.18-.785.314-1.589.398-2.39a.485.485 0 11.963.1c-.087.841-.228 1.685-.418 2.509a.486.486 0 01-.58.364zM81.985 68.8c-.742.401-1.515.76-2.3 1.069a.484.484 0 11-.354-.903 19.987 19.987 0 002.194-1.02.485.485 0 01.46.855v-.001zm-4.712 1.852a21.01 21.01 0 01-2.488.486.485.485 0 01-.128-.962 20.174 20.174 0 002.374-.464.485.485 0 01.243.94zm-5.018.668c-.845.01-1.697-.033-2.534-.126a.485.485 0 01.107-.965c.797.09 1.61.13 2.415.12a.485.485 0 01.012.971zM92.876 50.27a.478.478 0 00.078-.273 20.48 20.48 0 00-.06-1.24.484.484 0 10-.966.075c.03.388.05.786.057 1.182a.485.485 0 00.89.255z"></path>
        </g>
        <path
          fill="#604CCD"
          d="M86.32 43.777a.245.245 0 00-.228-.17l-2.983-.067a12.998 12.998 0 00-2.721-3.22l.425-2.957a.245.245 0 00-.13-.253l-3.182-1.642a.243.243 0 00-.281.041l-2.155 2.067a12.962 12.962 0 00-4.197-.347l-1.787-2.395a.244.244 0 00-.271-.086l-3.41 1.095a.245.245 0 00-.17.228l-.065 2.989a12.987 12.987 0 00-3.214 2.727l-2.952-.427a.243.243 0 00-.252.13l-1.638 3.189a.244.244 0 00.04.282l2.063 2.159a13.041 13.041 0 00-.346 4.206l-2.39 1.79a.243.243 0 00-.086.272l1.092 3.416c.032.1.124.168.228.17l2.983.066a12.998 12.998 0 002.721 3.22l-.425 2.958a.243.243 0 00.13.253l3.182 1.642a.242.242 0 00.281-.041l2.155-2.067c1.39.349 2.808.459 4.197.347l1.787 2.394a.244.244 0 00.271.087l3.41-1.095a.245.245 0 00.17-.228l.065-2.99a12.983 12.983 0 003.214-2.726l2.951.427a.244.244 0 00.253-.13l1.638-3.19a.244.244 0 00-.04-.281l-2.063-2.16a13.04 13.04 0 00.346-4.205l2.39-1.79a.245.245 0 00.086-.272l-1.093-3.416z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M74.647 52.716a3.636 3.636 0 01-2.518 1.237 3.63 3.63 0 01-2.651-.91 3.68 3.68 0 01-.325-5.18 3.663 3.663 0 016.403 2.195 3.643 3.643 0 01-.909 2.657v.001zm-4.529-.402c.54.477 1.233.715 1.952.67a2.677 2.677 0 001.852-.91 2.69 2.69 0 00.668-1.955 2.693 2.693 0 00-4.949-1.3 2.708 2.708 0 00.478 3.495z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M79.47 55.293a9.26 9.26 0 001.144-2.537l.022-.08a.485.485 0 10-.935-.253 8.192 8.192 0 01-.627 1.622l-.045.086a8.087 8.087 0 01-4.647 3.934l-.017.006a8.085 8.085 0 01-6.27-.499 8.105 8.105 0 01-4.033-4.77 8.131 8.131 0 01.514-6.231 8.108 8.108 0 014.761-4.042 8.085 8.085 0 016.219.517 8.156 8.156 0 013.193 2.949.484.484 0 10.823-.513 9.107 9.107 0 00-3.573-3.3 9.048 9.048 0 00-6.957-.576 9.054 9.054 0 00-5.327 4.521 9.094 9.094 0 00-.576 6.972 9.06 9.06 0 004.513 5.337c4.194 2.163 9.302.74 11.819-3.14l-.001-.003z"
        ></path>
        <path
          fill="#604CCD"
          d="M186.017 88.229l-14.08 14.432 16.89-4.52-2.81-9.912z"
        ></path>
        <path
          fill="#604CCD"
          d="M269.799 94.203l-80.006 3.89a3.605 3.605 0 01-3.776-3.603V61.509a6.63 6.63 0 016.418-6.633l72.107-2.236c5.369 0 9.723 4.362 9.723 9.743v27.124a4.698 4.698 0 01-4.466 4.697v-.001z"
        ></path>
        <path
          fill="#fff"
          d="M192.185 96.77a4.894 4.894 0 01-3.406-1.371 4.915 4.915 0 01-1.533-3.588V62.086c0-3.504 2.803-6.332 6.382-6.44l69.815-2.113c5.292 0 9.593 4.208 9.593 9.379V88.54c0 2.466-1.972 4.491-4.489 4.61l-76.12 3.613a4.767 4.767 0 01-.242.006zm71.263-42.89l-69.81 2.113c-3.39.103-6.045 2.78-6.045 6.094v29.725c0 1.273.506 2.458 1.425 3.336a4.544 4.544 0 003.392 1.268l76.121-3.612c2.331-.11 4.158-1.983 4.158-4.264V62.913c0-4.98-4.145-9.031-9.241-9.031v-.001z"
          opacity="0.85"
        ></path>
        <path
          fill="url(#paint4_linear_156_3708)"
          d="M263.214 59.894l-63.973 2.4c-.629.023-1.123.44-1.102.93l.024.563c.02.483.539.856 1.16.833l63.977-2.34c.629-.024 1.124-.441 1.103-.93l-.027-.622c-.02-.485-.538-.856-1.162-.832v-.002z"
        ></path>
        <path
          fill="url(#paint5_linear_156_3708)"
          d="M257.49 76.123l-63.975 2.387c-.628.023-1.122.454-1.101.96l.025.584c.022.5.54.886 1.162.864l63.977-2.327c.629-.022 1.124-.454 1.101-.962l-.027-.644c-.022-.501-.541-.887-1.163-.864l.001.002z"
        ></path>
        <path
          fill="url(#paint6_linear_156_3708)"
          d="M264.964 82.911l-71.319 2.698c-.7.027-1.252.465-1.231.976l.026.59c.022.506.597.892 1.291.868l71.321-2.638c.701-.025 1.254-.463 1.233-.976l-.028-.65c-.022-.506-.599-.894-1.292-.867h-.001z"
        ></path>
        <path
          fill="url(#paint7_linear_156_3708)"
          d="M228.139 69.462L193.27 70.48c-.342.01-.598.481-.57 1.049l.032.655c.027.563.323 1.008.662.999l34.872-.95c.342-.01.599-.48.57-1.05l-.036-.723c-.027-.562-.323-1.009-.663-.998h.002z"
        ></path>
        <path
          fill="url(#paint8_linear_156_3708)"
          d="M266.56 68.254l-32.958.946c-.323.01-.564.48-.536 1.048l.033.656c.028.562.309 1.009.63 1l32.961-.879c.324-.008.565-.48.537-1.048l-.036-.723c-.028-.563-.309-1.01-.629-1.001l-.002.001z"
        ></path>
        <path
          fill="url(#paint9_linear_156_3708)"
          d="M64.536 276.115s-.659 3.741-.982 7.444a2.55 2.55 0 002.436 2.764c4.92.206 15.449.605 19.226.436a.83.83 0 00.729-1.137 1.866 1.866 0 00-.949-1.002l-17.388-8.008-3.07-.498-.002.001z"
        ></path>
        <path
          fill="url(#paint10_linear_156_3708)"
          d="M63.995 273.917l.53 4.474s3.047 1.421 5.126-.179l-1.261-4.986-4.395.691z"
        ></path>
        <path
          fill="url(#paint11_linear_156_3708)"
          d="M64.394 189.792c-.23 1.168-1.229 58.313 4.867 83.921a.87.87 0 01-.509 1.011c-.935.383-2.767.937-4.964 1.011a1.493 1.493 0 01-1.482-1.075c-1.743-5.941-10.093-35.71-11.182-64.147-1.217-31.775 0-1.082 0-1.082l.714-19.641 12.556.002z"
        ></path>
        <path
          fill="url(#paint12_linear_156_3708)"
          d="M44.533 278.066s-1.05 1.888-2.066 6.907a1.556 1.556 0 001.367 1.864c1.625.16 4.127.366 6.131.351a1.55 1.55 0 001.534-1.731c-.222-1.832-.914-4.837-3.05-7.179l-3.915-.213v.001z"
        ></path>
        <path
          fill="url(#paint13_linear_156_3708)"
          d="M43.61 272.311l1.238 6.767s1.225.912 3.645.251l-.59-7.28-4.294.263.001-.001z"
        ></path>
        <path
          fill="url(#paint14_linear_156_3708)"
          d="M40.266 191.546c-4.986 30.149 1.082 74.517 3.128 83.201.125.532.553.939 1.091 1.028.914.152 2.417.276 3.9-.156.51-.148.869-.61.89-1.143.274-7.021-.22-50.12 4.426-67.153a3.866 3.866 0 011.49-2.134l9.016-6.424.69-10.382-24.63 3.163z"
        ></path>
        <path
          fill="#604CCD"
          d="M72.035 134.418c-14.94-.247-31.427 3.931-31.427 3.931-4.454 26.039-.78 56.074-.78 56.074 11.567 3.039 24.616-1.859 24.616-1.859 1.923-10.884 10.892-41.514 10.892-41.514 7.3-.908 13.314-3.018 18.267-5.809-3.778-4.387-5.559-9.971-6.332-13.27-5.282 1.645-10.628 2.524-15.236 2.447z"
        ></path>
        <path
          fill="url(#paint15_linear_156_3708)"
          d="M116.168 112.365c-1.468-1.776-3.326-.936-3.326-.936-2.199 9.307-13.727 16.852-25.57 20.541.773 3.3 2.553 8.884 6.33 13.27 19.657-11.074 22.565-32.875 22.565-32.875h.001z"
        ></path>
        <path
          fill="url(#paint16_linear_156_3708)"
          d="M115.812 112.817c.154.489-1.625 1.234-2.672-.767-.037-.958-.619-5.066-.048-5.848 3.046-4.161 8.95-9.376 8.95-9.376.998.986.176 1.956.176 1.956l-2.865 2.99c.599 1.085 1.33 2.001 1.672 3.313.26.994.101 2.056-.4 2.96-.503.907-1.189 2.088-1.838 3.011-1.227 1.747-2.977 1.761-2.977 1.761h.002z"
        ></path>
        <path
          fill="url(#paint17_linear_156_3708)"
          d="M118.102 103.712l-2.611 2.217-.819 2.208 2.327 2.587s.782-4.381 1.364-5.328c.582-.949.281-1.406-.261-1.684z"
        ></path>
        <path
          fill="#604CCD"
          d="M46.339 152.845l-5.731-14.497s-13.956 9.502-16.25 21.549c2.637.194 7.434.881 12.132 3.258 1.031-5.688 9.849-10.31 9.849-10.31z"
        ></path>
        <path
          fill="url(#paint18_linear_156_3708)"
          d="M58.535 166.486s-15.669 8.873-20.956 1.297c-1.098-1.574-1.36-3.138-1.09-4.628-4.698-2.376-9.495-3.064-12.132-3.259-.692 3.632-.327 7.495 1.803 11.399 9.261 16.975 34.447-.938 34.447-.938l-2.074-3.871h.002z"
        ></path>
        <path
          fill="#8989C6"
          d="M56.652 177.711l8.552-29.924a.871.871 0 01.737-.628 378.54 378.54 0 0111.222-1.13c6.244-.529 13.495-.957 17.827-.593a.875.875 0 01.715 1.26c-2.464 4.995-12.6 25.313-17.674 31.969a.872.872 0 01-.706.346l-19.84-.185a.875.875 0 01-.832-1.117l-.001.002z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M78.05 143.435l6.2-1.034c.33-.056.6.261.495.579l-.614 1.863a.446.446 0 01-.363.303l-5.966.798a.445.445 0 01-.492-.543l.38-1.627a.447.447 0 01.36-.339z"
        ></path>
        <path
          fill="#BDD0FB"
          d="M73.407 148.695l.511-2.666a.615.615 0 01.542-.496l12.523-1.274a.616.616 0 01.66.757l-.797 3.322a.616.616 0 01-.567.472l-12.236.617a.616.616 0 01-.635-.732z"
        ></path>
        <path
          fill="url(#paint19_linear_156_3708)"
          d="M58.718 170.482s-1.19-4.909-.71-6.65c.48-1.741 1.411-3.981 4.514-3.483 3.104.498 6.764 1.807 6.764 1.807s-.185 2.268-2.544 1.537l1.463 1.134s-.21 1.816-2.2.845l1.36 1.504s-.856 1.491-2.322.535c-1.465-.957-2.167 3.361-6.325 2.77v.001z"
        ></path>
        <path
          fill="url(#paint20_linear_156_3708)"
          d="M56.901 122.263l-4.753 13.776a.495.495 0 00.225.597c1.296.718 5.966 2.794 11.592-.781.586-.373.985-.98 1.073-1.67l1.54-11.923h-9.677v.001z"
        ></path>
        <path
          fill="url(#paint21_linear_156_3708)"
          d="M67.245 109.506s5.221 9.846 4.552 13.824c-.67 3.977-7.14 3.691-12.79.462l-3.947-10.633 12.185-3.653z"
        ></path>
        <path
          fill="url(#paint22_linear_156_3708)"
          d="M59.257 118.571a.406.406 0 00.177-.594c-.42-.64-1.202-1.946-1.453-3.09 0 0-.938-.603 2.389-1.4 3.327-.798 8.289-2.036 9.332-4.874 1.017-2.767-1.655-9.724-5.917-4.18a.404.404 0 01-.641.004c-.7-.911-2.536-2.803-5.087-1.656-2.386 1.073-2.655 2.825-2.623 3.709a.403.403 0 01-.477.413c-1.206-.23-4.102-.428-5.453 2.548-1.114 2.452-.39 3.84.268 4.519.214.22.12.582-.172.671-.794.244-1.817.918-1.714 2.78.141 2.573 3.014 2.347 3.83 2.23a.4.4 0 01.36.127c.701.778 3.86 4.078 7.278 4.476a.409.409 0 00.428-.541l-1.48-4.309a.407.407 0 01.22-.505l.734-.326.001-.002z"
        ></path>
        <path
          fill="url(#paint23_linear_156_3708)"
          d="M59.852 119.182s-3.717-2.555-3.99-.404c-.271 2.152 3.348 3.117 5.14 2.315l-1.15-1.911z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_156_3708"
          x1="502.252"
          x2="-27.355"
          y1="-195.251"
          y2="255.252"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1473D"></stop>
          <stop offset="1" stopColor="#E9605A"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_156_3708"
          x1="579.365"
          x2="49.757"
          y1="-104.597"
          y2="345.906"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1473D"></stop>
          <stop offset="1" stopColor="#E9605A"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_156_3708"
          x1="8.682"
          x2="468.64"
          y1="234.582"
          y2="-251.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF928E"></stop>
          <stop offset="1" stopColor="#FE7062"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_156_3708"
          x1="195.321"
          x2="91.029"
          y1="200.72"
          y2="315.729"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF928E"></stop>
          <stop offset="1" stopColor="#FE7062"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_156_3708"
          x1="198.138"
          x2="264.403"
          y1="62.255"
          y2="62.255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE"></stop>
          <stop offset="1" stopColor="#E9EFFD"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_156_3708"
          x1="192.413"
          x2="258.68"
          y1="78.52"
          y2="78.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE"></stop>
          <stop offset="1" stopColor="#E9EFFD"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_156_3708"
          x1="192.414"
          x2="266.285"
          y1="85.476"
          y2="85.476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE"></stop>
          <stop offset="1" stopColor="#E9EFFD"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_156_3708"
          x1="192.698"
          x2="228.84"
          y1="71.322"
          y2="71.322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE"></stop>
          <stop offset="1" stopColor="#E9EFFD"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_156_3708"
          x1="233.064"
          x2="267.228"
          y1="70.079"
          y2="70.079"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE"></stop>
          <stop offset="1" stopColor="#E9EFFD"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_156_3708"
          x1="84.665"
          x2="20.847"
          y1="270.944"
          y2="340.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D"></stop>
          <stop offset="1" stopColor="#1A0F91"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_156_3708"
          x1="63.996"
          x2="69.652"
          y1="276.099"
          y2="276.099"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_156_3708"
          x1="89.679"
          x2="35.353"
          y1="192.455"
          y2="265.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D"></stop>
          <stop offset="1" stopColor="#1A0F91"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_156_3708"
          x1="70.38"
          x2="6.561"
          y1="257.785"
          y2="327.061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D"></stop>
          <stop offset="1" stopColor="#1A0F91"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_156_3708"
          x1="43.611"
          x2="48.494"
          y1="275.808"
          y2="275.808"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_156_3708"
          x1="80.022"
          x2="25.695"
          y1="185.316"
          y2="258.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D"></stop>
          <stop offset="1" stopColor="#1A0F91"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_156_3708"
          x1="111.712"
          x2="101.696"
          y1="94.5"
          y2="123.059"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_156_3708"
          x1="120.241"
          x2="110.225"
          y1="97.491"
          y2="126.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_156_3708"
          x1="112.575"
          x2="120.117"
          y1="115.745"
          y2="100.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_156_3708"
          x1="24.039"
          x2="60.608"
          y1="169.25"
          y2="169.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear_156_3708"
          x1="57.893"
          x2="69.286"
          y1="165.409"
          y2="165.409"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear_156_3708"
          x1="52.119"
          x2="66.577"
          y1="130.076"
          y2="130.076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint21_linear_156_3708"
          x1="70.01"
          x2="54.095"
          y1="120.877"
          y2="111.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear_156_3708"
          x1="45.698"
          x2="66.267"
          y1="100.918"
          y2="117.132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D"></stop>
          <stop offset="1" stopColor="#1A0F91"></stop>
        </linearGradient>
        <linearGradient
          id="paint23_linear_156_3708"
          x1="65.833"
          x2="51.516"
          y1="124.5"
          y2="115.783"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBBBA"></stop>
          <stop offset="1" stopColor="#FF928E"></stop>
        </linearGradient>
        <clipPath id="clip0_156_3708">
          <path fill="#fff" d="M0 0H283V288H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
})
HelpLogo.displayName = 'HelpLogo'
export default HelpLogo

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily:{
      'rubik': ['Rubik']
    },
    fontSize:{
      'subtitleLarge': [
        '1.25rem',{
          lineHeight: '1.5rem',
          fontWeight: '700'
        }
      ],
      'subtitleSmall': [
        '1rem',{
          lineHeight: '1.25rem',
          fontWeight: '500'
        }
      ],
      'body2': [
        '1rem',{
          lineHeight: '1.5rem',
          fontWeight: '400'
        }
      ],
      'body1': [
        '0.875rem',{
          lineHeight: '1.25rem',
          fontWeight: '400'
        }
      ],
      'button': [
        '0.875rem',{
          lineHeight: '1rem',
          fontWeight: '700'
        }
      ],
      'caption': [
        '0.75rem',{
          lineHeight: '1rem',
          fontWeight: '400'
        }
      ],
      'h1': [
        '3.5rem',{
          lineHeight: '4.25rem',
          fontWeight: '700'
        }
      ],
      'h2': [
        '3rem',{
          lineHeight: '3.875rem',
          fontWeight: '700'
        }
      ],
      'h3': [
        '2.5rem',{
          lineHeight: '3.375rem',
          fontWeight: '700'
        }
      ],
      'h4': [
        '2rem',{
          lineHeight: '2.875rem',
          fontWeight: '500'
        }
      ],
      'h5': [
        '1.5rem',{
          lineHeight: '2.125rem',
          fontWeight: '500'
        }
      ],
      'h6': [
        '1.25rem',{
          lineHeight: '2rem',
          fontWeight: '500'
        }
      ]
    },
    colors: {
      neutral: {
        pure: "rgba(26, 26, 26, 1)",
        "1": "rgba(255, 255, 255, 1)",
        "2": "rgba(250, 250, 250, 1)",
        "3": "rgba(232, 232, 232, 1)",
        "4": "rgba(209, 209, 209, 1)",
        "5": "rgba(186, 186, 186, 1)",
        "6": "rgba(163, 163, 163, 1)",
        "7": "rgba(141, 141, 141, 1)",
        "8": "rgba(118, 118, 118, 1)",
        "9": "rgba(95, 95, 95, 1)",
        "10": "rgba(72, 72, 72, 1)",
        "11": "rgba(49, 49, 49, 1)",
        a05: "rgba(26, 26, 26, 0.05)",
        a10: "rgba(26, 26, 26, 0.1)",
        a20: "rgba(26, 26, 26, 0.2)",
        a30: "rgba(26, 26, 26, 0.3)",
        a40: "rgba(26, 26, 26, 0.4)",
        a50: "rgba(26, 26, 26, 0.5)",
        a60: "rgba(26, 26, 26, 0.6)",
        a70: "rgba(26, 26, 26, 0.7)",
        a80: "rgba(26, 26, 26, 0.8)",
        a90: "rgba(26, 26, 26, 0.9)",
      },
      primary: {
        pure: "rgba(82, 61, 199, 1)",
        "1": "rgba(246, 245, 252, 1)",
        "2": "rgba(238, 236, 249, 1)",
        "3": "rgba(220, 216, 244, 1)",
        "4": "rgba(203, 197, 238, 1)",
        "5": "rgba(186, 177, 233, 1)",
        "6": "rgba(169, 158, 227, 1)",
        "7": "rgba(151, 139, 221, 1)",
        "8": "rgba(134, 119, 216, 1)",
        "9": "rgba(117, 100, 210, 1)",
        "10": "rgba(99, 80, 205, 1)",
        "11": "rgba(74, 55, 179, 1)",
        "12": "rgba(66, 49, 159, 1)",
        "13": "rgba(57, 43, 139, 1)",
        "14": "rgba(49, 37, 119, 1)",
        "15": "rgba(41, 31, 100, 1)",
        "16": "rgba(33, 24, 80, 1)",
        "17": "rgba(25, 18, 60, 1)",
        "18": "rgba(16, 12, 40, 1)",
        "19": "rgba(8, 6, 20, 1)",
        a5: "rgba(82, 61, 199, 0.05)",
        a10: "rgba(82, 61, 199, 0.1)",
        a20: "rgba(82, 61, 199, 0.2)",
        a30: "rgba(82, 61, 199, 0.3)",
        a40: "rgba(82, 61, 199, 0.4)",
        a50: "rgba(82, 61, 199, 0.5)",
        a60: "rgba(82, 61, 199, 0.6)",
        a70: "rgba(82, 61, 199, 0.7)",
        a80: "rgba(82, 61, 199, 0.8)",
        a90: "rgba(82, 61, 199, 0.9)",
      },
      secondary:{
        'pure': 'rgba(9, 7, 81, 1)',
        '1': 'rgba(243, 243, 246, 1)',
        '2': 'rgba(230, 230, 238, 1)',
        '3': 'rgba(206, 205, 220, 1)',
        '4': 'rgba(181, 181, 203, 1)',
        '5': 'rgba(157, 156, 185, 1)',
        '6': 'rgba(132, 131, 168, 1)',
        '7': 'rgba(107, 106, 151, 1)',
        '8': 'rgba(83, 81, 133, 1)',
        '9': 'rgba(58, 57, 116, 1)',
        '10': 'rgba(34, 32, 98, 1)',
        '11': 'rgba(8, 6, 73, 1)',
        '12': 'rgba(7, 6, 65, 1)',
        '13': 'rgba(6, 5, 57, 1)',
        '14': 'rgba(5, 4, 49, 1)',
        '15': 'rgba(5, 4, 41, 1)',
        '16': 'rgba(4, 3, 32, 1)',
        '17': 'rgba(3, 2, 24, 1)',
        '18': 'rgba(2, 1, 16, 1)',
        '19': 'rgba(1, 1, 8, 1)',
        a5: 'rgba(9, 7, 81, 0.05)',
        a10: 'rgba(9, 7, 81, 0.1)',
        a20: 'rgba(9, 7, 81, 0.2)',
        a30: 'rgba(9, 7, 81, 0.3)',
        a40: 'rgba(9, 7, 81, 0.4)',
        a50: 'rgba(9, 7, 81, 0.5)',
        a60: 'rgba(9, 7, 81, 0.6)',
        a70: 'rgba(9, 7, 81, 0.7)',
        a80: 'rgba(9, 7, 81, 0.8)',
        a90: 'rgba(9, 7, 81, 0.9)'
      }
    },
    animation: {
      slideUpAndFade: 'slideUpAndFade',
      slideRightAndFade: 'slideRightAndFade',      
      slideDownAndFade: 'slideDownAndFade',
      slideLeftAndFade: 'slideLeftAndFade'
    },
    
    extend: {
      keyframes: {
        slideUpAndFade: {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideDownAndFade: {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }      
        },
        slideLeftAndFade: {
          '0%': { opacity:'0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      boxShadow: {
        DEFAULT: '0 .25rem .5rem rgba(9, 7, 81, 0.1)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }    
  },
  plugins: [],
}


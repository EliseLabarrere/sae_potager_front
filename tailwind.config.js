/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        potagertheme: {
          //PRIMARY
          "primary": "#EC7245",
          "primary-focus":"#6171ff",
          "primary-content":'#ffffff',
          //SECONDARY
          "secondary": "#F3B3B3",
          "secondary-focus":"#86d7c8",
          "secondary-content":'#1A1A1A',
          //ALERT
          "accent": "#FF5372",
          "accent-focus":"#FF3257",
          "accent-content":'#ffffff',
          //NEUTRAL
          "neutral": "#1A1A1A",
          "neutral-content":'#FFFFFF',
          //BASE
          "base-100": "#FBFBFF",
          "base-200": "#d0e8e1",
          "base-300": "#C6C6E1",
          "base-content": '#1A1A1A',

          "info": "#EFECEC",
          "success": "#87BDAF",
          "warning": "#ffc838",
          "error": "#ff3257",

          "--rounded-box": "0.75rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
          "--btn-text-case": "uppercase", // set default text transform for buttons
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}


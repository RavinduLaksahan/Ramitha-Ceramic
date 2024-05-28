module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
  theme: {
    extend: {
      colors: {
        navy: {
          '50': '#ebedf4',
          '100': '#d6d8e9',
          '200': '#afb3d1',
          '300': '#888fba',
          '400': '#616b9f',
          '500': '#3b447e',
          '600': '#323c6b',
          '700': '#282e57',
          '800': '#1e2343',
          '900': '#14182e',
        },
      },
    },
  },
}


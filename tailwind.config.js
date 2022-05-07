module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
// 'tw-elements/dist/plugin',
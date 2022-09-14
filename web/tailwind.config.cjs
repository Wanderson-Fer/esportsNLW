/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      // configurar breakpoints aqui
      // configurando imagem para background
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        // customizando gradiente linear como uma nova variavel de bg
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 33.08%, #43E7AD 43.94%, #E1D55D 24.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },

    },
  },
  plugins: [],
}

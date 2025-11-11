/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  safelist: [
    // Clases del H1 (CursorHighlight)
    'text-white',
    'from-purple-500',
    'via-fuchsia-500',
    'to-purple-500',
    'text-fuchsia-500',

    // Clases para mover el puntero
    '-translate-y-5',
    'translate-x-2',

    // Clases del H2 (Texto estático)
    'text-purple-600',
    'text-purple-400',

    // Clases base del componente
    'dark:border-white/20',
    'rounded-lg',
  ],
  // ------------------------------------

  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

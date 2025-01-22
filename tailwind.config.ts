import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'bg-pink-500', 'bg-pink-700', 'bg-pink-900',
    'hover:bg-pink-500', 'hover:bg-pink-700', 'hover:bg-pink-900',
    'from-pink-500', 'from-pink-700', 'from-pink-900',
    'border-pink-500', 'border-pink-700', 'border-pink-900',
    'hover:border-pink-500', 'hover:border-pink-700', 'hover:border-pink-900',
    'outline-pink-500', 'outline-pink-700', 'outline-pink-900',
    'focus:outline-pink-500', 'focus:outline-pink-700', 'focus:outline-pink-900',

    'bg-red-500', 'bg-red-700', 'bg-red-900',
    'hover:bg-red-500', 'hover:bg-red-700', 'hover:bg-red-900',
    'from-red-500', 'from-red-700', 'from-red-900',
    'border-red-500', 'border-red-700', 'border-red-900',
    'hover:border-red-500', 'hover:border-red-700', 'hover:border-red-900',
    'outline-red-500', 'outline-red-700', 'outline-red-900',
    'focus:outline-red-500', 'focus:outline-red-700', 'focus:outline-red-900',

    'bg-blue-500', 'bg-blue-700', 'bg-blue-900',
    'hover:bg-blue-500', 'hover:bg-blue-700', 'hover:bg-blue-900',
    'from-blue-500', 'from-blue-700', 'from-blue-900',
    'border-blue-500', 'border-blue-700', 'border-blue-900',
    'hover:border-blue-500', 'hover:border-blue-700', 'hover:border-blue-900',
    'outline-blue-500', 'outline-blue-700', 'outline-blue-900',
    'focus:outline-blue-500', 'focus:outline-blue-700', 'focus:outline-blue-900',

    'bg-sky-500', 'bg-sky-700', 'bg-sky-900',
    'hover:bg-sky-500', 'hover:bg-sky-700', 'hover:bg-sky-900',
    'from-sky-500', 'from-sky-700', 'from-sky-900',
    'border-sky-500', 'border-sky-700', 'border-sky-900',
    'hover:border-sky-500', 'hover:border-sky-700', 'hover:border-sky-900',
    'outline-sky-500', 'outline-sky-700', 'outline-sky-900',
    'focus:outline-sky-500', 'focus:outline-sky-700', 'focus:outline-sky-900',

    'bg-cyan-500', 'bg-cyan-700', 'bg-cyan-900',
    'hover:bg-cyan-500', 'hover:bg-cyan-700', 'hover:bg-cyan-900',
    'from-cyan-500', 'from-cyan-700', 'from-cyan-900',
    'border-cyan-500', 'border-cyan-700', 'border-cyan-900',
    'hover:border-cyan-500', 'hover:border-cyan-700', 'hover:border-cyan-900',
    'outline-cyan-500', 'outline-cyan-700', 'outline-cyan-900',
    'focus:outline-cyan-500', 'focus:outline-cyan-700', 'focus:outline-cyan-900',

    'bg-green-500', 'bg-green-700', 'bg-green-900',
    'hover:bg-green-500', 'hover:bg-green-700', 'hover:bg-green-900',
    'from-green-500', 'from-green-700', 'from-green-900',
    'border-green-500', 'border-green-700', 'border-green-900',
    'hover:border-green-500', 'hover:border-green-700', 'hover:border-green-900',
    'outline-green-500', 'outline-green-700', 'outline-green-900',
    'focus:outline-green-500', 'focus:outline-green-700', 'focus:outline-green-900',

    'bg-yellow-500', 'bg-yellow-700', 'bg-yellow-900',
    'hover:bg-yellow-500', 'hover:bg-yellow-700', 'hover:bg-yellow-900',
    'from-yellow-500', 'from-yellow-700', 'from-yellow-900',
    'border-yellow-500', 'border-yellow-700', 'border-yellow-900',
    'hover:border-yellow-500', 'hover:border-yellow-700', 'hover:border-yellow-900',
    'outline-yellow-500', 'outline-yellow-700', 'outline-yellow-900',
    'focus:outline-yellow-500', 'focus:outline-yellow-700', 'focus:outline-yellow-900',

    'bg-stone-100', 'bg-stone-200', 'bg-stone-300', 'bg-stone-400', 'bg-stone-500', 'bg-stone-600', 'bg-stone-700', 'bg-stone-800', 'bg-stone-900',
    'hover:bg-stone-100', 'hover:bg-stone-200', 'hover:bg-stone-300', 'hover:bg-stone-400', 'hover:bg-stone-500', 'hover:bg-stone-600', 'hover:bg-stone-700', 'hover:bg-stone-800', 'hover:bg-stone-900',

    'bg-stone-200/80', 'dark:bg-stone-900/80',
    'shadow-stone-700', 'hover:shadow-stone-700',
    'fill-stone-200', 'fill-stone-900',

    // 'bg-white-500', 'bg-white-700', 'bg-white-900',
    // 'hover:bg-white-500', 'hover:bg-white-700', 'hover:bg-white-900',
    // 'from-white-500', 'from-white-700', 'from-white-900',
    // 'border-white-500', 'border-white-700', 'border-white-900',
    // 'hover:border-white-500', 'hover:border-white-700', 'hover:border-white-900',
    // 'outline-white-500', 'outline-white-700', 'outline-white-900',
    // 'focus:outline-white-500', 'focus:outline-white-700', 'focus:outline-white-900',

    // 'bg-black-500', 'bg-black-700', 'bg-black-900',
    // 'hover:bg-black-500', 'hover:bg-black-700', 'hover:bg-black-900',
    // 'from-black-500', 'from-black-700', 'from-black-900',
    // 'border-black-500', 'border-black-700', 'border-black-900',
    // 'hover:border-black-500', 'hover:border-black-700', 'hover:border-black-900',
    // 'outline-black-500', 'outline-black-700', 'outline-black-900',
    // 'focus:outline-black-500', 'focus:outline-black-700', 'focus:outline-black-900',
    'group-link-title',
    'group-link-title-hover:text-stone-200'
  ],
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        bigDesktop: { max: "3200px" }, //Big desktop
        semiBigDesktop: { max: "1920px" },
        bigScreen:{max: "1539"},
        bSemiBig: { max: "1440px" }, //1440
        bSemismall: { max: "1366px" }, //
        lgDesktop: { max: "1280px" }, //large desktop
        smDesktop: { max: "1024px" }, // small desktop
        smDesk: { max: "917px" }, // small desktop
        tabletAir: { max: "820px" }, // big tablet
        tablet: { max: "768px" },
        surfDuo:{max:"540"},
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
    },
  },
  plugins: [],
}

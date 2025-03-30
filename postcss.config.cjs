// import { defineConfig } from 'vite';
// import postcss from './postcss.config.cjs';
// import './index.css';

// export default defineConfig({
//   css: {
//     postcss,
//   },
// });

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

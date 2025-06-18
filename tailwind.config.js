import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx}', // Vite + React에 맞게 설정
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [lineClamp],
};

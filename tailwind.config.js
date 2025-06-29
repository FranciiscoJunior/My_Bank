/**@type {import ('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js, ts, jsx, tsx, mdx}',
        './src/components/**/*.{js, ts, jsx, tsx, mdx}',
        './src/app/**/*.{js, ts, jsx, tsx, mdx}',
    ],

    theme: {

        backgroundImage: {
            'img_bg_hero': "url('./src/assets/bg-hero.jpg')",
        },

        extend: {
            colors: {
            'primary-blue': '#106EB0',
            'primary-orange': '#EC7000',
            'second-gray': '#4E4B59',
            'gray-phone': '#F4F4F4',
            'txt-gray': '#7A7786',
            'opacity-gray': 'rgba(100, 80, 57, 0.1)'
            }
        },
    },

    plugins: [],
}
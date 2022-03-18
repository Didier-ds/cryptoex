// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ["./index.html", "./resources/js/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    // prefix: "c-",
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            // },
            colors: {
                cyan: {
                    DEFAULT: "#00C2FF",
                }
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                custom: '4px 12px 25px rgba(0, 0, 0, 0.1)',
                wide: '0px 7px 25px rgba(213, 213, 213, 0.5);',
                DEFAULT: '6px 8px 20px rgba(30, 30, 30, 0.04)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
            },
        },
    },

    //plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
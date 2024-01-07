/** @type {import('tailwindcss').Config} */
const size = {
    '1/20': '5%',
    '1/10': '10%',
    '3/20': '15%',
    '2/10': '20%',
    '3/10': '30%',
    '7/20': '35%',
    '4/10': '40%',
    '9/20': '45%',
    '11/20': '55%',
    '6/10': '60%',
    '13/20': '65%',
    '7/10': '70%',
    '8/10': '80%',
    '17/20': '85%',
    '9/10': '90%',
    '19/20': '95%',
};

export default {
    content: ["./src/**/*.{html,ts,vue}"],
    theme: {
        extend: {
            width: size,
            height: size,
            maxWidth: size,
            maxHeight: size,
            minWidth: size,
            minHeight: size,
            flex: {
                '2': '2 2 0%',
                '3': '3 3 0%',
                '4': '4 4 0%',
                '5': '5 5 0%',
                '6': '6 6 0%',
                '7': '7 7 0%',
                '8': '8 8 0%',
                '9': '9 9 0%',
            }
        },
        plugins: [],
    }
}

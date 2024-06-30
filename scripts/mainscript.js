document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const main = document.getElementById('main');


    setTimeout(() => {
        main.style.height = window.innerHeight + 'px';

        setTimeout(() => {
            main.style.borderBottomLeftRadius = '0';
            main.style.borderBottomRightRadius = '0';
        }, 500);
    }, 1000);
})
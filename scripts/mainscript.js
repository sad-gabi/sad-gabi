document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const main = document.getElementById('main');
    const navBar = document.getElementById('navBar');

    body.style.height = window.innerHeight + 'px';

    setTimeout(() => {
        main.style.height = window.innerHeight + 'px';

        setTimeout(() => {
            main.style.borderBottomLeftRadius = '0';
            main.style.borderBottomRightRadius = '0';
        }, 500);

        setTimeout(() => {
            navBar.style.opacity = '1';
            navBar.style.pointerEvents = 'all';

            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = 'var(--main-color)';
        }, 1000);
    }, 1000);


    document.addEventListener('resize', () => {
        body.style.height = window.innerHeight + 'px';
        main.style.height = window.innerHeight + 'px';
    })
})
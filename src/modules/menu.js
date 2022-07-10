const menu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        } else if (e.target.closest('a[href="#service-block"]')) {
            e.preventDefault();
            menu.classList.remove('active-menu');
            document.querySelector("#service-block").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (!e.target.closest('menu')) {
            menu.classList.remove('active-menu');
        }

    });

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
            e.preventDefault();
            handleMenu();
        } else if (e.target.closest('ul>li>a')) {
            handleMenu();
            e.preventDefault();
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
};

export default menu;
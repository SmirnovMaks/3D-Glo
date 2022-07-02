const menu = () => {
    const menu = document.querySelector('menu');
    const main = document.querySelector('main');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    main.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || !e.target.closest('menu')) {
            handleMenu();
        } else if (e.target.closest('a[href="#service-block"]')) {
            e.preventDefault();
            document.querySelector("#service-block").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
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
const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    let count = 0;

    const modalAnimate = () => {
        const animate = requestAnimationFrame(modalAnimate);
        count++;
        if (count < 30) {
            modal.style.opacity = (count / 30);
        } else {
            cancelAnimationFrame(animate);
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            modalAnimate();

        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
            modal.style.opacity = '';
            count = 0;
        }
    });
};

export default modal;
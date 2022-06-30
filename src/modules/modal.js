const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
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

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.style.opacity = '';
        count = 0;
    });

    modal.addEventListener('click', (event) => {
        const isModal = event.target.closest('.popup-content');
        if (!isModal) {
            modal.style.display = 'none';
            modal.style.opacity = '';
            count = 0;
        }
    });


};

export default modal;
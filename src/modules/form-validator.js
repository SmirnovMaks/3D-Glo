const formValidator = () => {
    const inputTel = document.querySelectorAll('input[name="user_phone"]');
    const inputEmail = document.querySelectorAll('input[name="user_email"]');
    const inputName = document.querySelectorAll('input[name="user_name"]');
    const inputMessage = document.querySelector('input[name="user_message"]');

    inputMessage.classList.add('success');
    inputMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\d ,.?!-]/, "");
    });

    const validator = (items, regExp, regExp2) => {
        items.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExp, "");
            });
            item.addEventListener('blur', (e) => {
                if (regExp2.test(e.target.value) && e.target.value !== '') {
                    e.target.classList.add('success');
                    item.style.borderStyle = 'none';
                } else {
                    e.target.classList.remove('success');
                    item.style.borderColor = 'red';
                    item.style.borderStyle = 'solid';
                }
            });
        });
    };

    validator(inputName, /[^а-яА-Я ]/, /[а-яА-Я ]{2,}/);
    validator(inputTel, /[^-+)(\d]/, /[-\+()\d]{6,16}/);
    validator(inputEmail, /[^\@\-\_\.\!\~\*\'\w]/, /[\-\.\_\w]+@\w+\.\w+/i);
};

export default formValidator;
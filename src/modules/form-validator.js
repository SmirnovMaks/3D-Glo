const formValidator = () => {
    const inputTel = document.querySelectorAll('input[name="user_phone"]');
    const inputEmail = document.querySelectorAll('input[name="user_email"]');
    const inputName = document.querySelectorAll('input[name="user_name"]');
    const inputMessage = document.querySelectorAll('input[name="user_message"]');

    console.log(inputMessage);
    const validator = (items, regExp) => {
        items.forEach(item => {
            item.addEventListener('input', (e) => {
                if (!regExp.test(e.target.value) && e.target.value !== '') {
                    e.target.classList.add('success');
                } else {
                    e.target.classList.remove('success');
                }
            });
        });
    };

    // (/[\-\.\w]+@([\w]+\.)+[\w]+/gi)

    validator(inputName, /[^а-яА-Я ]/);
    validator(inputTel, /[^-+)(\d]/);
    validator(inputEmail, /[^ @ - _ .!~*'\w]/);
    validator(inputMessage, /[^а-яА-Я\d ,.!?]/);

};

export default formValidator;
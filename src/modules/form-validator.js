const formValidator = () => {
    const calcItem = document.querySelectorAll('input.calc-item');
    const inputTel = document.querySelectorAll('input[type=tel]');
    const inputEmail = document.querySelectorAll('input[type=email]');
    const formName = document.querySelectorAll('#form2-name, .mess, .form-name');

    const validator = (item, regExp) => {
        item.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExp, "");
            });
        });
    };

    validator(formName, /[^а-яА-Я- ]/);
    validator(inputTel, /[^-)(\d]/);
    validator(inputEmail, /[^ @ - _ .!~*'\w]/);
    validator(calcItem, /\D+/);

};

export default formValidator;
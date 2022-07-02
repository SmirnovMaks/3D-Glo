const formValidator = () => {
    const calcItem = document.querySelectorAll('input.calc-item');
    const inputTel = document.querySelectorAll('input[type=tel]');
    const inputEmail = document.querySelectorAll('input[type=email]');
    const formName = document.querySelectorAll('#form2-name, .mess, .form-name');

    formName.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, "");
        });
    });

    inputTel.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^-)(\d]/, "");
        });
    });

    inputEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^ @ - _ .!~*'\w]/, "");
        });
    });

    calcItem.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });
};

export default formValidator;
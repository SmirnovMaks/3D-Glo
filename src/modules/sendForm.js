const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (val) {
                formBody[key] = val;
            }
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block' && +element.textContent !== 0) {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input' && element.value !== '') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            statusBlock.textContent = loadText;
            statusBlock.style.color = 'white';

            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;
                    statusBlock.style.color = 'white';
                    formElements.forEach(input => {
                        input.value = '';
                    });
                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 3000);
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    statusBlock.style.color = 'white';
                });
        } else {
            statusBlock.textContent = 'Ошибка! Введите данные правильно';
            statusBlock.style.color = 'white';
            setTimeout(() => {
                statusBlock.textContent = '';
            }, 3000);
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;
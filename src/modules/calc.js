import {
    animate
} from './helpers';

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    // const enumerationTotal = (num) => {
    //     const time = 1;
    //     const step = 10;
    //     let t = Math.round(time / (num / step));
    //     let interval = setInterval(() => {
    //         let n = 0;
    //         n = n + step;
    //         if (n == num) {
    //             clearInterval(interval);
    //         }
    //         total.textContent = n;
    //     }, t);


    // };


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;

        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.textContent = Math.round(totalValue * progress);

                console.log(progress);
            }

        });


    };

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
};

export default calc;
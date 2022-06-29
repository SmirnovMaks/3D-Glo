const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let interval;
    let timeRemaining;
    let days;
    let hours;
    let minutes;
    let seconds;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let datenow = new Date().getTime();
        timeRemaining = (dateStop - datenow) / 1000;
        days = Math.floor(timeRemaining / 60 / 60 / 24);
        hours = Math.floor((timeRemaining / 60 / 60)) % 24;
        minutes = Math.floor((timeRemaining / 60) % 60);
        seconds = Math.floor(timeRemaining % 60);
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerDays.textContent = addZero(getTime.days);
        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);
    };

    const stopClock = () => {
        updateClock();
        interval = setInterval(updateClock, 1000);
        if (timeRemaining <= 0) {
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";

            clearInterval(interval);
        }

    };
    stopClock();
};
export default timer;
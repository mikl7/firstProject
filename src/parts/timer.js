function timer() {
    let deadline = "2020-08-15";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            second = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            total: t,
            second: second,
            minutes: minutes,
            hours: hours,
            days: days,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            second = timer.querySelector(".seconds"),
            days = document.createElement("span"),
            colon = document.createElement("span"),
            timeInterval = setInterval(updateClock, 1000);

        colon.textContent = " : ";
        days.classList.add("days");

        timer.insertBefore(colon, hours);
        timer.insertBefore(days, colon);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent = ("0" + t.minutes).slice(-2);
            second.textContent = ("0" + t.second).slice(-2);
            days.textContent = t.days;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock("timer", deadline);
}

export default timer;
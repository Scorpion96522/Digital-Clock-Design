function clock() {
    const today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";

    // set the Time period AM/PM 
    if (hours >= 12) {
        period = "PM";
    }

    // set the 12-hour clock format 
    hours = hours > 12 ? hours % 12 : hours;

    // Add the 0 for the values Lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

}
const updateClock = setInterval(clock, 1000);

const today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".month__name").innerHTML = monthName;
document.querySelector(".day__name").innerHTML = dayName;
document.querySelector(".day__number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
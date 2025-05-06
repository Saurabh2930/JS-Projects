const endDate = "25 April 2025 10:00 AM";
const inputs = document.querySelectorAll("input");

const countdown = () => {
    const end = new Date(endDate);
    const now = new Date();
    const difference = (end - now) / 1000;

    const days = Math.floor(difference / 3600 / 24);
    const hours = Math.floor(difference / 3600) % 24;
    const minutes = Math.floor(difference / 60) % 60;
    const seconds = Math.floor(difference) % 60;
    if (difference < 0) {
        setTimeout();
    }
    else {
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
    }
}


setInterval(() => {
    countdown();
}   , 1000);
const deg = 6;
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
    minute.style.transform = `rotateZ(${minutes}deg)`;
    second.style.transform = `rotateZ(${seconds}deg)`;
})

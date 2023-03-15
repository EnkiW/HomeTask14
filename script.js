const getTimeString = (hour, minute, second, ampm) => {
    if (minute / 10 < 1) {
        minute = '0' + minute;
    }
    if (second / 10 < 1) {
        second = '0' + second;
    }
    if (hour / 10 < 1) {
        hour = '0' + hour;
    }
    return `${hour}:${minute}:${second} ${ampm}`
}

const renderTime = () => {
    let currentTime = document.querySelector('.current-time');
    const currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    if (h > 12) {
        h = h % 12;
    }
    let ampm = h >= 12 ? 'PM' : 'AM';

    const timeString = getTimeString(h, m, s, ampm);
    currentTime.innerHTML = timeString;

    setInterval(renderTime, 1000);
}
renderTime();
function currentTime() {
    let date = new Date(); // создал объект даты
    let hours = date.getHours();
    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12) : hours)
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    let midday = 'AM';
    midday = (hours >= 12) ? 'AM':'PM';

    document.getElementById('clock').innerHTML =
        hours + ':' + minutes + ':' + seconds + ' ' + midday;

    let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
        'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let curWeekDay = days[date.getDay()];
    let curMonth = month[date.getMonth()];
    let curDay = date.getDate();
    let curYear = date.getFullYear();
    let today = curWeekDay + ' ' + curDay + ' ' + curMonth + ' ' + curYear;
    document.getElementById('date').innerHTML = today;
    let t = setTimeout(function(){currentTime()}, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return '0' + k;  // чтобы было не 13:5:2, а 13:05:02
    } else return k;
}
currentTime()

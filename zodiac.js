let buttonTwo = document.querySelector('#btn-2'),
    selectMonth = document.querySelector('#select-month'),
    selectDay = document.querySelector('#select-day'),
    header = document.querySelector('.header'),
    content = document.querySelector('.content'),
    close = document.querySelector('.close'),
    modal = document.querySelector('.modal-wrap');


buttonTwo.addEventListener('click', () => {

    modal.style.display = 'block';
    let sign = document.createElement('h1');
    header.appendChild(sign);

    let info = document.createElement('p');
    content.appendChild(info);

    if (selectMonth.value == 'Декабрь' && selectDay.value >= 23) {
        sign.innerHTML = 'Козерог';
        info.innerHTML = 'Козерог (лат. Capricornus) — десятый знак зодиака, соответствующий сектору эклиптики от 270° до 300°, считая от точки весеннего равноденствия; кардинальный знак тригона Земля.\n' +
            '\n' +
            'В западной астрологии считается, что Солнце находится в знаке Козерога с 22 декабря по 20 января[1]. Не следует путать знак Козерога с созвездием Козерога, в котором Солнце находится с 18 января по 15 февраля. ';

    } else if (selectMonth.value == 'Январь' && selectDay.value <= 20) {
        sign.innerHTML = 'Козерог';
        info.innerHTML = 'Козерог (лат. Capricornus) — десятый знак зодиака, соответствующий сектору эклиптики от 270° до 300°, считая от точки весеннего равноденствия; кардинальный знак тригона Земля.\n' +
            '\n' +
            'В западной астрологии считается, что Солнце находится в знаке Козерога с 22 декабря по 20 января[1]. Не следует путать знак Козерога с созвездием Козерога, в котором Солнце находится с 18 января по 15 февраля. ';

    } else if (selectMonth.value == 'Январь' && selectDay.value >= 21) {
        sign.innerHTML = 'Водолей';
    } else if (selectMonth.value == 'Февраль' && selectDay.value <= 19) {
        sign.innerHTML = 'Водолей';
    } else if (selectMonth.value == 'Февраль' && selectDay.value >= 20) {
        sign.innerHTML = 'Рыба';
    } else if (selectMonth.value == 'Март' && selectDay.value <= 20) {
        sign.innerHTML = 'Рыба';
    } else if (selectMonth.value == 'Март' && selectDay.value >= 21) {
        sign.innerHTML = 'Овен';
    } else if (selectMonth.value == 'Апрель' && selectDay.value <= 20) {
        sign.innerHTML = 'Овен';
    } else if (selectMonth.value == 'Апрель' && selectDay.value >= 21) {
        sign.innerHTML = 'Телец';
    } else if (selectMonth.value == 'Май' && selectDay.value <= 21) {
        sign.innerHTML = 'Телец';
    } else if (selectMonth.value == 'Май' && selectDay.value >= 22) {
        sign.innerHTML = 'Близнецы';
    } else if (selectMonth.value == 'Июнь' && selectDay.value <= 21) {
        sign.innerHTML = 'Близнецы';
    } else if (selectMonth.value == 'Июнь' && selectDay.value >= 22) {
        sign.innerHTML = 'Рак';
    } else if (selectMonth.value == 'Июль' && selectDay.value <= 22) {
        sign.innerHTML = 'Рак';
    } else if (selectMonth.value == 'Июль' && selectDay.value >= 23) {
        sign.innerHTML = 'Лев';
    } else if (selectMonth.value == 'Август' && selectDay.value <= 21) {
        sign.innerHTML = 'Лев';
    } else if (selectMonth.value == 'Август' && selectDay.value >= 22) {
        sign.innerHTML = 'Дева';
    } else if (selectMonth.value == 'Сентябрь' && selectDay.value <= 23) {
        sign.innerHTML = 'Дева';
    } else if (selectMonth.value == 'Сентябрь' && selectDay.value >= 24) {
        sign.innerHTML = 'Весы';
    } else if (selectMonth.value == 'Октябрь' && selectDay.value <= 23) {
        sign.innerHTML = 'Весы';
    } else if (selectMonth.value == 'Октябрь' && selectDay.value >= 24) {
        sign.innerHTML = 'Скорпион';
    } else if (selectMonth.value == 'Ноябрь' && selectDay.value <= 22) {
        sign.innerHTML = 'Скорпион';
    } else if (selectMonth.value == 'Ноябрь' && selectDay.value >= 23) {
        sign.innerHTML = 'Стрелец';
    } else if (selectMonth.value == 'Декабрь' && selectDay.value <= 22) {
        sign.innerHTML = 'Стрелец';
    }
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    location.reload();
})


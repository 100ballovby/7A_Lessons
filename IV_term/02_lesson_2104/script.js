let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

const compare = () => Math.random() - 0.5;
const randomInt = (min, max) => Math.round(min - 0.5 +
    Math.random() * (max - min + 1));

function generate() {
    let arr = [];
    // выбираю, какие символы добавлять в пароль на основе отмеченных инпутов
    if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
    if (document.querySelector('#arr_en').checked) arr = arr.concat(arr_en);
    if (document.querySelector('#arr_EN_up').checked) arr = arr.concat(arr_EN);
    if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);

    arr.sort(compare); // сортирую массив

    let password = '';  // здесь буду хранить пароль
    let password_len = document.querySelector('#length').value;
    // длину пароля возьму из инпута с id number

    // циклом for я буду заполнять строчку с паролем случайными символами из массива arr
    for (let i = 0; i < password_len; i++) {
        password += arr[randomInt(0, arr.length - 1)];
        // пароль добавить массив[случайный_индекс]
    }

    // передаю полученный пароль в html, в тег с id res
    document.querySelector('#res').textContent = password;
}

//document.querySelector('#pass_start').addEventListener('click', generate, false);


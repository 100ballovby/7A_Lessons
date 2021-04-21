let Cars = ['Audi', 'BMW', 'Mercedes', 'Tesla'];

function addToList() {
    let question = prompt('Что добавить в массив?');
    Cars.push(question);

    let out = '';
    for (let i = 0; i < Cars.length; i++) {
        out += Cars[i] + '<br>';
    }
    document.getElementById('res').innerText = out;
}



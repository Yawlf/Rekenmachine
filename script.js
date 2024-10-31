let scherm = document.getElementById('display');
let geschiedenis = document.getElementById('geschiedenis');

function wisScherm() {
    scherm.value = '';
}

function voegNummerToe(nummer) {
    scherm.value += nummer;
}

function voegOperatorToe(operator) {
    scherm.value += ' ' + operator + ' ';
}

function bereken() {
    try {
        let resultaat = eval(scherm.value);
        geschiedenis.textContent = scherm.value + ' = ' + resultaat;
        scherm.value = resultaat;
    } catch (error) {
        alert('Ongeldige invoer');
    }
}

geschiedenis.textContent = "Laatste Berekening: Geen";

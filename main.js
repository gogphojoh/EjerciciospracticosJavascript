function invertirCadena() {
    const input = document.getElementById('invertirCadenaInput').value;
    const result = input.split('').reverse().join('');
    document.getElementById('invertirCadenaResult').innerText = result;
}

function esPrimo() {
    const num = parseInt(document.getElementById('numeroPrimoInput').value);
    if (isNaN(num) || num <= 1) {
        document.getElementById('numeroPrimoResult').innerText = "Ingresa un número válido";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('numeroPrimoResult').innerText = isPrime ? "Es primo" : "No es primo";
}

function eliminarDuplicados() {
    const input = document.getElementById('eliminarDuplicadosInput').value;
    const array = input.split(',').map(Number);
    const uniqueArray = [...new Set(array)];
    document.getElementById('eliminarDuplicadosResult').innerText = uniqueArray.join(', ');
}

function factorial() {
    const num = parseInt(document.getElementById('factorialNumeroInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('factorialNumeroResult').innerText = "Ingresa un número válido";
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    document.getElementById('factorialNumeroResult').innerText = result;
}

function contarVocales() {
    const input = document.getElementById('contarVocalesInput').value.toLowerCase();
    const count = input.match(/[aeiou]/g)?.length || 0;
    document.getElementById('contarVocalesResult').innerText = count;
}

function sumarNumeros() {
    const input = document.getElementById('sumarNumerosInput').value;
    const array = input.split(',').map(Number);
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('sumarNumerosResult').innerText = sum;
}

function buscarMaximo() {
    const input = document.getElementById('maximoArregloInput').value;
    const array = input.split(',').map(Number);
    const max = Math.max(...array);
    document.getElementById('maximoArregloResult').innerText = max;
}
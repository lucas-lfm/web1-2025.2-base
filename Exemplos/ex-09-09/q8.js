const numeros = [2, 6, 7, 24, 31, 45, 47, 86]; // 87

let somaPrimos = 0;

for (let n of numeros) {

    if (n < 2) continue;

    if (n == 2) {
        somaPrimos += n;
        continue;
    }

    if (n % 2 == 0) continue;

    let isPrimo = true;

    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) somaPrimos += n;

}

console.log(`A soma dos números primos encontrados é: ${somaPrimos}`);
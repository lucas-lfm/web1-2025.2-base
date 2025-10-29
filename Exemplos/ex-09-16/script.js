// O recurso de rest parameters (...) permite uma função tratar um número indefinido de argumentos como um array
const somatorio = (...numeros) => {
    let soma = 0;
    
    for (n of numeros) {
        soma += n;
    }
    
    return soma;
}

// Podemos passar qualquer quantidade de argumentos para a função
console.log(somatorio(3, 4));
console.log(somatorio(3, 4, 7, 12, 56));
console.log(somatorio(2, 21, 43, 36, 23, 100, 3));
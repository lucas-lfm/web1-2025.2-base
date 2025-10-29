// let idade = prompt("Informe sua idade:");

// document.writeln("Idade informada: " + idade);

// document.getElementById("p-idade").innerHTML = "Idade informada: " + idade;

let formulario = document.getElementById("formulario");
let inputIdade = document.getElementById("input-idade");
let paragrafoIdade = document.getElementById("p-idade");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let valor = inputIdade.value;
    paragrafoIdade.innerHTML = "Idade informada: " + valor;
});

// document.querySelector("#p-idade").innerHTML = "Idade informada: " + idade;
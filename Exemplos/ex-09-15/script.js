const calcularLocacao = (valorDiaria, valorFixo, qtdDias) => {
    return valorDiaria * qtdDias + valorFixo;
}

const inputVeiculo = document.querySelector("#input-veiculo");
const inputDiaria = document.querySelector("#input-diaria");
const inputFixo = document.querySelector("#input-fixo");
const inputDias = document.querySelector("#input-dias");

const btnCalcular = document.querySelector("#btn-calcular");

btnCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();

    let valorDiaria = Number(inputDiaria.value);
    let valorFixo = Number(inputFixo.value);
    let qtdDias = Number(inputDias.value);

    let valorLocacao = calcularLocacao(valorDiaria, valorFixo, qtdDias);

    document.querySelector("div#resultado").innerHTML = `<p>O valor da locação é R$ ${valorLocacao.toFixed(2)}.</p>`;
});
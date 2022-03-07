const valorHora = document.querySelector("#valor-hora");

const horasProjeto = document.querySelector("#horas-projeto");

const valorProjeto = document.querySelector("#resposta");

function calcularValorHora() {
  valorProjeto.innerHTML =
    "R$ " + parseFloat(valorHora.value * horasProjeto.value).toFixed(2);
}

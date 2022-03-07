const valorMes = document.querySelector("#ganho-mes");

const horasDia = document.querySelector("#horas-dia");

const valorHora = document.querySelector("#resposta");

function calcularValorHora() {
  const horasMes = horasDia.value * 22;

  valorHora.innerHTML =
    "R$ " + parseFloat(valorMes.value / horasMes).toFixed(2);
}

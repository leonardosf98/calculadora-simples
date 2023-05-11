let numero1;
let numero2;
let operador;

//Lista DOM
const teclas = document.querySelectorAll(".tecla");
const igual = document.querySelector(".botao__igual");
const erase = document.querySelector(".erase");
const input = document.getElementById("input__calculadora");
const operadores = document.querySelectorAll(".operadores");
const ponto = document.querySelector(".ponto");

//Lista de eventos
erase.addEventListener("click", deletar);
input.addEventListener("keypress", somenteNumeros);
input.addEventListener("input", limitaPontos);
igual.addEventListener("click", resultado);
ponto.addEventListener("click", limitaPontos);

function somenteNumeros(e) {
  if (isNaN(parseInt(e.key))) {
    e.preventDefault();
  }
}
function limitaPontos() {
  const value = input.value.replace(/^\d*\.?\d*$/g, " ");
  input.value = value;
}

teclas.forEach(function (tecla) {
  tecla.onmousedown = function () {
    input__calculadora.value += tecla.textContent;
  };
});
//Função para apagar visor

function deletar() {
  document.getElementById("input__calculadora").value = "";
  numero1 = "";
}

//Função para operadores matemáticos e armazenamento de valor

operadores.forEach(function (sinais) {
  sinais.onmousedown = function () {
    numero1 = input__calculadora.value * 1;
    input__calculadora.value = "";
    operador = sinais.innerHTML;
  };
});

function resultado() {
  if (operador == "/") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 / numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "*") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 * numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "-") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 - numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "+") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 + numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  }
}

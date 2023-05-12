let numero1;
let numero2;
let operador;
let mostraResultado = false;

//Lista DOM
const numeros = document.querySelectorAll(".numero");
const igual = document.querySelector(".igual");
const apagar = document.querySelector(".apagar");
const input = document.querySelector("#input__calculadora");
const operadores = document.querySelectorAll(".operadores");
const ponto = document.querySelector(".ponto");

//Lista de eventos
apagar.addEventListener("click", deletar);
igual.addEventListener("click", resultado);
input.addEventListener("keypress", verificar);
input.addEventListener("keypress", somenteNumeros);
numeros.forEach(function (numero) {
  numero.addEventListener("click", verificar);
});

function verificar() {
  if (mostraResultado === true) {
    input.value = "";
    numeros.forEach(function (numero) {
      numero.onmousedown = function () {
        input__calculadora.value += numero.textContent;
      };
    });
    mostraResultado = false;
  } else {
    numeros.forEach(function (numero) {
      numero.onmousedown = function () {
        input__calculadora.value += numero.textContent;
      };
    });
  }
}

//Função para receber somente números no input
function somenteNumeros(evento) {
  if (isNaN(parseInt(evento.key))) {
    evento.preventDefault();
  }
}
//Função para adicionar número ao clicar

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
    resultado = Math.round(numero1 / numero2);
    input__calculadora.value = resultado;
    mostraResultado = true;
    console.log(numero1, numero2);
  } else if (operador == "*") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 * numero2;
    input__calculadora.value = resultado;
    mostraResultado = true;
    console.log(numero1, numero2);
  } else if (operador == "-") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 - numero2;
    input__calculadora.value = resultado;
    mostraResultado = true;
    console.log(numero1, numero2);
  } else if (operador == "+") {
    numero2 = input__calculadora.value * 1;
    resultado = numero1 + numero2;
    input__calculadora.value = resultado;
    mostraResultado = true;
    console.log(numero1, numero2);
  }
}

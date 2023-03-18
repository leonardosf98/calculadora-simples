let numero1;
let numero2;
let operador;

//Função para teclas numéricas
let teclas = document.querySelectorAll(".tecla");

teclas.forEach(function (tecla) {
  tecla.onmousedown = function () {
    input__calculadora.value += tecla.textContent;
  };
});
//Função para apagar visor
let erase = document.querySelector(".erase");
erase.addEventListener("click", backspace);

function backspace() {
  document.getElementById("input__calculadora").value = "";
  numero1 = "";
}
//Função para operadores matemáticos e armazenamento de valor
let operadores = document.querySelectorAll(".operadores");
operadores.forEach(function (sinais) {
  sinais.onmousedown = function () {
    numero1 = input__calculadora.value;
    input__calculadora.value = "";
    operador = sinais.innerHTML;
  };
});

let igual = document.querySelector(".botao__igual");

igual.addEventListener("click", resultado);

function resultado() {
  if (operador == "/") {
    numero2 = input__calculadora.value;
    resultado = numero1 / numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "*") {
    numero2 = input__calculadora.value;
    resultado = numero1 * numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "-") {
    numero2 = input__calculadora.value;
    resultado = numero1 - numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  } else if (operador == "+") {
    numero2 = input__calculadora.value;
    resultado = numero1 + numero2;
    input__calculadora.value = resultado;
    console.log(numero1, numero2);
  }
}

/* Colocar números no clique
Armazenar valores
aplicar operador matemático
limpar visor

*/

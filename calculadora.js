document.addEventListener("DOMContentLoaded", function () {
  let numero1;
  let numero2;
  let operador;
  let showResult = false;

  //Lista DOM
  const igual = document.querySelector(".igual");
  const apagar = document.querySelector(".apagar");
  const input = document.querySelector("#input__calculadora");

  //Lista de eventos
  apagar.addEventListener("click", clearVisor);
  igual.addEventListener("click", resultado);
  input.addEventListener("keypress", onlyNumbers);
  input.addEventListener("paste", function (event) {
    event.preventDefault();
  });
  const numbers = document.querySelectorAll(".numero");
  numbers.forEach((number) => {
    number.addEventListener("click", onlyNumbers);
  });
  const operadores = document.querySelectorAll(".operadores");
  operadores.forEach(function () {
    operatorHandle();
  });
  const numeros = document.querySelectorAll(".numero");
  numeros.forEach(function (numero) {
    numero.onclick = function () {
      input__calculadora.value += numero.textContent;
    };
  });

  function check() {
    if (showResult === true) {
      showResult = false;
      clearVisor();
    }
  }

  //Função para receber somente números no input
  function onlyNumbers(event) {
    if (
      isNaN(parseInt(event.key)) === true &&
      isNaN(parseInt(event.target.innerHTML)) === true
    ) {
      event.preventDefault();
    }
    check();
  }

  //Função para apagar visor
  function clearVisor() {
    const input = document.getElementById("input__calculadora");
    input.value = "";
    numero1 = "";
  }

  //Função para operadores matemáticos e armazenamento de valor
  function operatorHandle() {
    operadores.forEach(
      (sinal) =>
        (sinal.onmousedown = function () {
          if (showResult === false) {
            numero1 = input__calculadora.value * 1;
            input__calculadora.value = "";
            operador = sinal.innerHTML;
            hasOperator = true;
          }
        })
    );
  }

  function resultado() {
    if (operador === "/") {
      if (showResult === true) {
        input__calculadora.value = parseInt(input__calculadora.value / numero2);
      } else {
        numero2 = input__calculadora.value * 1;
        resultado = Math.round(numero1 / numero2);
        input__calculadora.value = resultado;
        showResult = true;
      }
    } else if (operador === "*") {
      if (showResult === true) {
        input__calculadora.value = parseInt(input__calculadora.value) * numero2;
      } else {
        numero2 = input__calculadora.value * 1;
        resultado = numero1 * numero2;
        input__calculadora.value = resultado;
        showResult = true;
      }
    } else if (operador === "-") {
      if (showResult === true) {
        input__calculadora.value = parseInt(input__calculadora.value) - numero2;
      } else {
        numero2 = input__calculadora.value * 1;
        resultado = numero1 - numero2;
        input__calculadora.value = resultado;
        showResult = true;
      }
    } else if (operador === "+") {
      if (showResult === true) {
        input__calculadora.value = parseInt(input__calculadora.value) + numero2;
      } else {
        numero2 = input__calculadora.value * 1;
        resultado = numero1 + numero2;
        input__calculadora.value = resultado;
        showResult = true;
      }
    }
  }
});

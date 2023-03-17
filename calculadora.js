let teclas = document.querySelectorAll(".tecla");

teclas.forEach(function (tecla) {
  tecla.onmousedown = function () {
    input__calculadora.value += tecla.textContent;
  };
});

let erase = document.querySelector(".erase");
erase.addEventListener("click", backspace);

function backspace() {
  document.getElementById("input__calculadora").value = "";
}

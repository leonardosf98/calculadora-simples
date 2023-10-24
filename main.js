let resultado = [0];
let n = 10;
if (n !== 0) {
  for (let i = 0; i < n - 1; i++) {
    if (i === 0) {
      resultado.push(resultado[i] + 1);
    } else {
      resultado.push(resultado[i] + resultado[i - 1]);
    }
  }
}

console.log(resultado);

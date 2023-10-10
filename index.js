const prompt = require('prompt-sync')();
function ordenarNumeros(num1, num2, num3) {
  let menor;
  let centro; 
  let mayor;
  if (num1 === num2 && num1 === num3){
    return "Los números son iguales";
  } else {
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
      return a - b;
    });
    menor = numeros[0];
    centro = numeros[1];
    mayor = numeros[2];
  }
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));
const resultado = ordenarNumeros(num1, num2, num3);
console.log(resultado);

module.exports = ordenarNumeros;
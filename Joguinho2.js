// Valores
let valor1 = prompt("Insira o Primeiro Valor")
let valor2

//impedindo de Quebra o Sistema
do{
    valor2 = prompt("Insira o segundo valor")
}while(valor2 == 0);

//Seu Saque E Seu Depósito
console.log(`Seu Saldo De Depósito: ${valor1}, Sua Saque foi: ${valor2}`);
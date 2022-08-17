//Quantidade de  Produtos
let QDMorango = 8;
let QDMaca = 8;

//Preço dos Produtos
let PrecoMO;
let PrecoMA;

//Descontos
if(QDMorango <= 5){
    PrecoMO = QDMorango * 2.50;
}else {
    PrecoMO = QDMorango * 2.20;
}
if(QDMorango <= 5){
    PrecoMA = QDMaca * 1.80;
}else {
    PrecoMA = QDMaca * 1.50;
}

//Resultado
let PrecoTotal;
PrecoTotal = PrecoMA + PrecoMO;

//CONSOLEANDO MEU LOG
console.log(`Preço total do Morango: ${PrecoMO} E o preço total da Maçã: ${PrecoMA} O preço Final é: ${PrecoTotal} `);
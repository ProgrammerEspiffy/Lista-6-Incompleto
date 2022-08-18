// Quantidades
let Salario = [3459,1500, 500, 675, 358 ]
let Filhos = [1, 4]

// (Salario Médio) / (Filhos) / (Salrio mais alto)
let SalM = 0;
let Fil = 0;
let SalMA = 0;

// Contador
let Pinbolinho = 0;

// Salários
for (let i = 0; i < Salario.length; i++) {
    // Média salarial
    SalM = Salario[i] + SalM
    // Salario maior
    if(SalMA < Salario [i]) {
        SalMA = Salario[i];
    }
    // Salário abaixo de 1000
    if(Salario[i] < 1000) {
        Pinbolinho++
    }
}
//Quantidade de filhos
for (let ind = 0; ind < Filhos.length; ind++) {
    Fil = Filhos[ind] + Fil
}

//Calculo
SalM = SalM / Salario.length
Fil = Fil / Filhos.length
//Calculo Porcemtagem
let porcem = Pinbolinho / Salario.length * 100

//Consolas Do Log
console.log(`Salario médio ${SalM} 
quantidade de Filhos ${Fil} 
salario mais alto ${SalMA} 
Salários que são Menos de mil: ${porcem}`);

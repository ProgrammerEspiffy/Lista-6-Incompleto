const Maior = (N1,N2,N3) => {
    if (N1 > N2 && N1 > N3) {
        console.log(`${N1} é Maior do que ${N2} e ${N3}`);
    }else if(N2 > N1 && N2 > N3){
        console.log(`${N2} é Maior do que ${N1} e ${N3}`);
    }else {
        console.log(`${N3} é Maior do que ${N1} e ${N2}`);
    }
}
const Menor = (N1,N2,N3) => {
    if (N1 < N2 && N1 < N3) {
        console.log(`${N1} é Menor que ${N2} e ${N3}`);
    }else if(N2 < N1 && N2 < N3){
        console.log(`${N2} é Menor que ${N1} e ${N3}`);
    }else {
        console.log(`${N3} é Menor do que ${N1} e ${N2}`);
    }
}
Maior();
Menor();
console.log(`${Maior(78432,234978, 329478432)} Em comparação ${Menor(2438907, 234, 79)}`)
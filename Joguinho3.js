let NUM = [10, 23, 82, 12, 13, 32, 81, 63, 21, 42]

let CONTADOR = 0;
    
    for (let i = 0; i < NUM.length; i++) {
        if (NUM[i] >= 10 && NUM[i] <= 20) {
            CONTADOR++
        }
    }
console.log(CONTADOR);
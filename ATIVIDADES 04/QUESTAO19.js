const Numbers = [1, 2, 3, 6];

const Media = (Pares) => {
    const NumberPar = Pares.filter(Par => Par % 2 == 0);
    console.log(NumberPar)
}

Media(Numbers);




// OUTRAS FORMAS

// const NumberPar = Number.filter(Number => Number % 2 != 0);

// for (i = 0; i <= Pares.length; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }
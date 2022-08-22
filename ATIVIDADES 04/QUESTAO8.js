const Calcular = (nMenor, nMaior) => {
    var soma = 0;
    for (i = nMenor; i <= nMaior; i++){
        if (i % 2 != 0) {
            soma += i;
        }
    }
    console.log(soma);
}

Calcular(10, 30);
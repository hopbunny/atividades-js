const Numbers = [2, 4, 6, 8];

const CalcularFatorial = (Number) => {
    var Fatorial = [];
    for (i = 0; i < Number.length; i++){
        let valor = 1;
        for (j = 1; j <= Number[i]; j++) {
            valor *= j;
        }
        Fatorial[i] = valor;
    }
    console.log(Fatorial);
}

CalcularFatorial(Numbers);
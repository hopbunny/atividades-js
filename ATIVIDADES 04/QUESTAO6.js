const CalcularFatorial = (nFatorial) => {
    var res = nFatorial;
    for (let i = 1; i < nFatorial ; i++){
        res = res * i; 
    }
    console.log(res);
}

CalcularFatorial(99);
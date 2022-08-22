const PrintMultables = (nMax) => {
    var nTable = nMax;
    for (let i = 1; i <= nMax; i++) {
        for (let i = 0; i <= 10; i++) {
            console.log(nTable + " * " + i + " = " + (nTable * i));
        }
        nTable--;
        console.log("");
    }
}

PrintMultables(10);
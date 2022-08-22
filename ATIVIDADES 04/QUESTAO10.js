const ConverterTemperatura = (nTemperatura) => {
    console.log(((nTemperatura - 32) * 5 / 9).toFixed(2));
}

ConverterTemperatura(100);
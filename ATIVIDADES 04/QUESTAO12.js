const Array = [10, 20, 30, 40, 50];

const SomaArray = () => {
    let soma = Array.reduce((total, valor ) => (total + valor), 0);
    console.log(soma /=  Array.length);
} 

SomaArray();

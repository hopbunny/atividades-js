const NotaAluno = [5, 6, 8, 10];

const MediaAluno = NotaAluno.reduce((total, ValorAtual) => 
    ((total + ValorAtual) / NotaAluno.length)
, 0);

console.log(MediaAluno.toFixed(2));
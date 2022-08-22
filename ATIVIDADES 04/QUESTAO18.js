const NotaAluno = [5, 6, 8, 10];

const Media = (Nota) => {
    const MediaAluno = Nota.reduce((total, ValorAtual) => 
    ((total + ValorAtual) / Nota.length)
, 0);
    console.log(MediaAluno.toFixed(2));
}

Media(NotaAluno);
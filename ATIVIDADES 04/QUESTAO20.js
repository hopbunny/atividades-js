const People = [
    {nome: "Isabela", idade: 20}, {nome: "Matheus", idade: 62}, {nome: "Alisson", idade: 15}, {nome: "Kaiki", idade: 25}
]

const MaiorIdade = (Idoso) => {
    const FiltraIdade = Idoso.filter(Pessoa => Pessoa.idade >= 60)
    console.log(FiltraIdade);
}

MaiorIdade(People);
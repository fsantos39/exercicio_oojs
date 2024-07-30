function Pai(nome, idade, signo) {
    this.nome = nome;
    this.idade = idade;
    this.sigo = signo;
}

function Vo(nome, idade, signo, profissao) {
    Pai.call(this, nome, idade, signo);
    this.profissao = profissao;
}

function Filho(nome,idade, signo, sexo) {
    Pai.call(this, nome, idade, signo);
    this.sexo = sexo;
    
}

const mae = new Vo('Diva', '62 anos', 'Touro', 'Professora');
const pai = new Pai('Fernando', '40 anos', 'Gêmeos');
const filho = new Filho('Guilherme', '4 anos', "Aquario", "Menino");



console.log(pai);
console.log(mae);
console.log(filho);

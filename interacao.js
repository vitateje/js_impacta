window.onload = function(){
    muda_valor();
}

function muda(){
    var msg = href="HISTORY";
    var el = document.getElementById('exp');
    el.textContent = msg
}

function informacao(){

var nome = window.prompt('Digite seu Nome: ');
var idade = window.prompt('Digite sua idade: ');
window.alert(nome + '' + idade);
}

function muda_valor(){
    window.document.getElementById('nome').value='novo_nome';
}

// POO //

function aluno(nome, idade, curso)
    {   
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    var aluno1 = new aluno('vitor',30,'ADS');

    console.log(aluno1);

function tester(){
    document.write("testerman");
}

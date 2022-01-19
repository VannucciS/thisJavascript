const pessoa = {
	nome : 'joao',	idade : 22,
}

function calculaIdade(anos) {


	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/
console.log(calculaIdade.call(pessoa,10));
console.log(calculaIdade.apply(pessoa,[10]));
//Propriedades de dados
var pessoa={
    nome:'Rodrigo',
    _idade:'29',
    sexo:'Masculino',
    casado:false,
    state:'pristine',
    get idade(){//Get é para acessar
        this.state='dirty';
        return this._idade;//usa o (_) para acessar uma propriedade de dado por uma de acesso
    },
    set idade(value){//Set é para modificar
        this._idade=value
    }
};
pessoa.idade=21;//de 29 muda para 21 a idade
console.log(pessoa.idade);
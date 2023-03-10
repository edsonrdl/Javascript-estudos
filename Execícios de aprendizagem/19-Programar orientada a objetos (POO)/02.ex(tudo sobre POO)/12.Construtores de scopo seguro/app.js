//Previnir erros de não colocar o new
function Pessoa(nome,idade,sexo){
    if(this instanceof Pessoa){
        this.nome=nome;
        this.idade=idade;
        this.sexo=sexo;
    }else{
        return new Pessoa(nome,idade,sexo);//se esquecer de usar o new ,ele mesmo retorna com o new 
        
    }
}
rodrigo= new Pessoa('Rodrigo',21,'M');
console.log(rodrigo instanceof Pessoa);
console.log(rodrigo);
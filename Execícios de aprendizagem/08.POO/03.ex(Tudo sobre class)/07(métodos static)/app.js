class Pessoa{
    _nome ;
    _idade ;
    _peso ;
    _altura;
    _imc;
    static totalPessoas=0;//atritbuto estático ou de class
  
    constructor(nome,idade,peso,altura,imc){
        this._nome=nome;
        this._idade=idade ;
        this._peso=peso ;
        this._altura=altura ;
        this._imc=this._peso/(this._altura*this._altura); 
        static 
    }
    calculaImc(){
        return ( this._peso/(this._altura*this._altura)).toFixed(2)
    }
    get nome(){
        return this._nome
    };
    get idade(){
        return this._idade
    };
    set nome(novoNome){
         this._nome=novoNome
    };
    set idade(novoIdade){
        this._idade=novoIdade
   }
    };
    
    let pessoa1=new Pessoa('Edson ',25,68,1.7);
    let pessoa2=new Pessoa('Rodrigo',45,70,1.86);

    console.log("Nome" +':' + pessoa1.nome);
    console.log("Idade" +':' + pessoa1.idade);

    pessoa1.nome ='Edson Lopes';
    pessoa1.idade = 89;

    console.log("Nome" +':' + pessoa1.nome);
    console.log("Idade" +':' + pessoa1.idade);
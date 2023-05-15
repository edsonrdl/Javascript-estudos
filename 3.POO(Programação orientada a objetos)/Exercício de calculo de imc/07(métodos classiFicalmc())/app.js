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
    }
    calculaImc(){
        return ( this._peso/(this._altura*this._altura)).toFixed(2);
    }
    classificaImc(){
        let valorImc=(this.imc).toFixed(2)
        let classificaImc='';

        if(valorImc<18.5){
            classificaImc='Abaixo do peso'
        }else if(valorImc<=24.9 ){
            classificaImc='Peso normal'
        }else if(valorImc<-29.9){
            classificaImc='Sobrepeso'
        }else if(valorImc<=34.9){
            classificaImc='Obesidade grau I'
        }else if(valorImc<=39.9){
            classificaImc='Obesidade grau II'
        }else{
            classificaImc='Peso inválido'
        }
        return classificaImc;
    };
    get nome(){
        return this._nome;
    };
    get idade(){
        return this._idade;
    };
    get imc(){
        return this._imc;
    };
    set nome(novoNome){
         this._nome=novoNome;
    };
    set idade(novoIdade){
        this._idade=novoIdade;
   };
};
    
    let pessoa1=new Pessoa('Edson ',25,68,1.7,);
    let pessoa2=new Pessoa('Rodrigo',45,70,1.86);

    console.log(Pessoa.totalPessoas);

    console.log("Situação"+ pessoa1.classificaImc());
    console.log("Situação"+ pessoa2.classificaImc());

    console.log("Nome" +':' + pessoa1.nome);
    console.log("Idade" +':' + pessoa1.idade);

    pessoa1.nome ='Edson Lopes';
    pessoa1.idade = 89;

    console.log("Nome" +':' + pessoa1.nome);
    console.log("Idade" +':' + pessoa1.idade);
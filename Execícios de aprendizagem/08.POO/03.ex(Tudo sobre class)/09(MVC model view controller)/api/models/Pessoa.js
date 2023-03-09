export  class Pessoa{
    _nome ;
    _idade ;
    _peso ;
    _altura;
    _imc;
    _classificacao;
    static totalPessoas=0;

  
    constructor(nome,idade,peso,altura,imc){
        this._nome=nome;
        this._idade=idade ;
        this._peso=peso ;
        this._altura=altura ;
        this._imc=this._peso/(this._altura*this._altura).toFixed(2);
        this._classificacao=this.classificaImc();
    };
    calculaImc(){
        return this.imc;
    };
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
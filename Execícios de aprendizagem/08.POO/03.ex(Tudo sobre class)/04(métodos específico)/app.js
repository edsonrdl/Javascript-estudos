//métodos e métodos específicos
class Pessoa{
    _nome ;
    _idade ;
    _peso ;
    _altura;
    _imc;

    constructor(nome,idade,peso,altura,imc){
        this._nome=nome;
        this._idade=idade ;
        this._peso=peso ;
        this._altura=altura ;
        this._imc=this._peso/(this._altura*this._altura); 
    }
    calculaImc(){
        return ( this._peso/(this._altura*this._altura)).toFixed(2)
    }
    };
    
    let pessoa1=new Pessoa('Edson ',25,68,1.7);
    let pessoa2=new Pessoa('Rodrigo',45,70,1.86);
    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa1.calculaImc)
    console.log(pessoa2.calculaImc)
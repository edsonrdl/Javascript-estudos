//Encapsulamento public,privado e protectd
//Usar o (_propriedade)ou(#propriedade) na frente da propriedade para dizer que é privado
class Pessoa{
    _nome 
    _idade 
    _peso 
    };

    let pessoa1=new Pessoa();//novo objeto pessa1
    let pessoa2=new Pessoa();//novo objeto pessoa2
   
    pessoa1._nome='Edson';//passando dados para os atributo
    pessoa1._idade=66;
    pessoa1._peso=76;
   
    pessoa2._nome='Rodrigo';//passando dados para os atributo
     pessoa2._idade=65;
    pessoa2._peso=70;
    
   console.log(pessoa1);
   console.log(pessoa2);
import {Pessoa} from "./Pessoa.js";
    
    let pessoa1=new Pessoa('Edson ',25,68,1.7,);
    let pessoa2=new Pessoa('Rodrigo',45,70,1.86);

    console.log(`O total de Pessoas é : ${Pessoa.totalPessoas}`);

    console.log("Nome" +':' + pessoa1.nome);
    console.log("Idade" +':' + pessoa1.idade);
    console.log(`Situação de ${pessoa1._nome} ${pessoa1.classificaImc()}`);

    console.log("Nome" +':' + pessoa2.nome);
    console.log("Idade" +':' + pessoa2.idade);
    console.log(`Situação de ${pessoa2._nome} ${pessoa2.classificaImc()}`);

 
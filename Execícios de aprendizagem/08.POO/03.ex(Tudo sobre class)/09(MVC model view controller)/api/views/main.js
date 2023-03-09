import {Pessoa} from "./Pessoa.js";
    
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
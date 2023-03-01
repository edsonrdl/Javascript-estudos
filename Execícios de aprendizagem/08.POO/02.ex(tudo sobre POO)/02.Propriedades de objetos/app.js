
var pessoa ={};
pessoa.nome='Rodrigo';
pessoa.idade='29';
pessoa.sexo='Masculino';
pessoa.casado= false;

delete pessoa.idade;//verificar se existe a propriedade 

console.log(pessoa);//n vai apagar,vai dar o falso negativo 
//usar o in para não dar o falso negativo por conta do false em casado 
if("casado" in pessoa){//cuidado ,ele vai ate as heranças de proptotype
    delete pessoa.casado;
}

//ou
if (pessoa.hasOwnProperty("casado")){//vai exibir apenas do objeto que chama 
    delete pessoa.casado;
}

//exibindo propriedade
for (propriedade in pessoa){
    console.log(propriedade);

}

//exibir os índices dessas propriedades 
for (propriedade in pessoa){
    console.log(pessoa[propriedade]);
}

//ou  em forma de array
var propriedade=Object.keys(pessoa);
console.log(propriedade)

//pecorrer 
var i,size;
var propriedade=Object.keys(pessoa);
for (i=0,size = propriedade.length;1<size;1++){
    console.log(propriedade[i])
    console.log(pesssoa[propriedade[i]])
}
console.log(propriedade);

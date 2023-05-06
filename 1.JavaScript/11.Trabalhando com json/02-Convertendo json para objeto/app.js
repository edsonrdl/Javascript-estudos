
//Ex1:
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 28 },
  ];
  
const jsonData=JSON.stringify(pessoas);
//Convertendo json para objeto
var objData=JSON.parse(jsonData);
console.log(objData);
console.log(" Do tipo :"+ typeof objData);

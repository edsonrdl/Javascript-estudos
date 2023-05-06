
//Ex1:
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 28 },
  ];
  console.log("Aqui é um objeto:",pessoas);
  console.log("Do tipo :",typeof pessoas);

  const jsonData=JSON.stringify(pessoas);
  console.log("Aqui é Json:",jsonData);
  console.log(" Do tipo :"+ typeof jsonData);//typeof diz que o json é uma string ,comportamento normal
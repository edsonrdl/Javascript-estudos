//Array (Filter)
const   piratas = [
  "Monkey D. Luffy",
  "Roronoa Zoro",
  "Nami",
  "Usopp",
  "Sanji",
  "Tony Tony Chopper",
  "Nico Robin",
  "Franky",
  "Brook",
  "Jinbe",
  "Portgas D. Ace",
  "Marshall D. Teach",
  "Trafalgar D. Water Law",
  "Monkey D. Garp",
  "Monkey D. Dragon",
  "Monkey D. Luffy Jr.",
  "Jaguar D. Saul",
  "Donquixote Doflamingo",
  "Charlotte Linlin",
  "Kaido"
];
//utilizando function
const piratasSobrenomeD1 = piratas.filter(function(sobrenome) {
  return sobrenome.includes("D.");});
  console.log("Utilizando Function:" + piratasSobrenomeD1);

//utilizando arrow function
const piratasSobrenomeD2 = piratas.filter(sobrenome => sobrenome.includes("D."));
console.log("Utilizando arrow function:" + piratasSobrenomeD2);
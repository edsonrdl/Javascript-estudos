//Array (Map)

const precos = [
  "R$ 200",
  "R$ 400",
  "R$ 300",
  "R$ 400",
];

const precoNumeros = precos.map(preco =>
  Number(preco.replace("R$ ", ""))
);
console.log(precoNumeros);

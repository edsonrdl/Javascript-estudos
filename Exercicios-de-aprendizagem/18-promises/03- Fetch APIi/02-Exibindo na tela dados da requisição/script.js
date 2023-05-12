
fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((r) => r.json())
  .then((jsonBody) => {
    let nomes = '';
    for (let i = 0; i < jsonBody.length; i++) {
      nomes += jsonBody[i].nome + '<br>';
    }
    document.querySelector('#app').innerHTML = nomes;
    console.log(jsonBody);
  });
  //Ou usando o map
  // fetch('https://ranekapi.origamid.dev/json/api/produto')
  // .then((r) => r.json())
  // .then((jsonBody) => {
  //   const nomes = jsonBody.map((produto) => produto.nome);
  //   document.querySelector('#app').innerHTML = nomes.join('<br>');
  //   console.log(jsonBody);
  // });
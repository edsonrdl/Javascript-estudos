
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
 
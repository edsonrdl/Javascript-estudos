const data = {
  id: 'andrerafa',
  nome: 'Andre',
  email: 'andrerafa@origamid.com',
  senha: '123456',
  cep: '123456',
  rua: 'Ali Perto',
  numero: '230',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'Rio de Janeiro',
};

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(responseData => console.log(responseData))
.catch(error => console.error(error));

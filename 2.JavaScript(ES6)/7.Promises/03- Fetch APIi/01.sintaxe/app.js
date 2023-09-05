//ex
//Este código faz uma solicitação GET para  'https://jsonplaceholder.typicode.com/users', que retorna uma lista de usuários em formato JSON. Quando a Promise é resolvida, a resposta é transformada em um objeto JavaScript usando o método json().
//Em seguida, os dados são exibidos no console usando o método console.log(). Se houver algum erro na solicitação, o método catch() será chamado para exibir uma mensagem de erro no console.

//Observe que o método fetch() é assíncrono, então as ações a serem realizadas com a resposta precisam ser definidas dentro das funções then() ou catch() que são executadas quando a Promise é resolvida ou rejeitada, respectivamente.

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


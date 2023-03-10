// A função fetch() em JavaScript é usada para fazer solicitações de rede (HTTP) e buscar recursos (como arquivos JSON, XML, HTML, imagens etc.) de um servidor ou outra fonte de dados na web.
//  É uma API moderna para trabalhar com requisições assíncronas de recursos web e substitui a API XMLHttpRequest (XHR), que era usada anteriormente para essa finalidade.
//fetch<buscar>
// O fetch() é um método assíncrono que retorna uma Promise.
//  Ele recebe um argumento obrigatório, que é o endereço URL da fonte de dados que se deseja buscar.
//   Por padrão, o fetch() faz solicitações do tipo GET, mas também é possível especificar outros tipos de solicitação HTTP, como POST, PUT, DELETE, etc., usando as opções do método.

// Quando a Promise é resolvida, a resposta é retornada como um objeto Response.
//  O desenvolvedor pode então processar os dados da resposta usando métodos como json(), text(), blob(), entre outros, dependendo do tipo de conteúdo que foi buscado.

// O fetch() é amplamente utilizado em aplicações web modernas para buscar dados dinamicamente e atualizar a interface do usuário em tempo real sem recarregar a página inteira.

//ex
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))  //then<então>
  .catch(error => console.error(error)); //catch <capturar,pegar ou agarrar>

//   Este código faz uma solicitação GET para o endpoint https://jsonplaceholder.typicode.com/users, que retorna uma lista de usuários em formato JSON. Quando a Promise é resolvida, a resposta é transformada em um objeto JavaScript usando o método json().
//    Em seguida, os dados são exibidos no console usando o método console.log(). Se houver algum erro na solicitação, o método catch() será chamado para exibir uma mensagem de erro no console.

//   Observe que o método fetch() é assíncrono, então as ações a serem realizadas com a resposta precisam ser definidas dentro das funções then() ou catch() que são executadas quando a Promise é resolvida ou rejeitada, respectivamente.
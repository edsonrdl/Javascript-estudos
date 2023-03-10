// Em Javascript, o fetch é usado para fazer requisições HTTP para um servidor e recuperar dados. Ele retorna uma Promise, que representa uma operação assíncrona que será executada no futuro
// . O then é um método disponível em Promises para lidar com o resultado futuro dessa operação.

// Aqui está um exemplo de como usar fetch com then:

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))


// Neste exemplo, estamos enviando uma requisição HTTP para 'https://api.example.com/data'.
//  Quando a requisição é concluída, o resultado é retornado como uma resposta ('response') e, em seguida, transformado em JSON através do método json(). O resultado em formato JSON é retornado para o próximo then e, então, exibido no console. Se houver um erro em qualquer lugar nesse processo, o catch capturará a exceção e exibirá uma mensagem de erro no console.

// A tradução em português desses termos é:

// - fetch: buscar/recuperar
// - then: então
// - response: resposta
// - JSON: JavaScript Object Notation (Notação de Objetos JavaScript)
// - data: dados
// - error: erro.

// Sendo assim, o then é usado para lidar com o resultado retornado por uma Promise.
// Ele é chamado quando a Promise é resolvida e recebe um valor que foi retornado pela Promise.
// O valor pode ser manipulado ou passado adiante para um próximo then. Caso ocorra algum erro durante a execução da Promise, ele pode ser capturado pelo método catch.
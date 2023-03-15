
//  Manipulação de estilos CSS de elementos HTML:
//    // Alterando o estilo de um elemento
//    const elementToStyle = document.getElementById('style-id');
//    elementToStyle.style.backgroundColor = 'red';

//    // Acessando todas as folhas de estilo da página
//    const styleSheets = document.styleSheets;

//    // Acessando as regras de estilo de uma folha de estilo específica
//    const styleSheet = styleSheets[0];
//    const styleRules = styleSheet.cssRules || styleSheet.rules;
   

// Esse são apenas alguns exemplos de uso do document. Há muitas outras maneiras de utilizá-lo, dependendo das necessidades da aplicação.

// Aqui está um exemplo de como você pode usar document.getElementById() para selecionar um elemento HTML com o ID "exemplo" e alterar seu conteúdo:

// <!DOCTYPE html>
// <html>
//   <body>
//     <div id="exemplo">Olá, mundo!</div>
  
//     <script>
//       var elemento = document.getElementById("exemplo");
//       elemento.innerHTML = "Olá, OpenAI!";
//     </script>
//   </body>
// </html>


// Ao executar este código, o conteúdo do elemento <div> com o ID "exemplo" será alterado para "Olá, OpenAI!".

// A propriedade innerHTML é usada para obter ou modificar o conteúdo HTML de um elemento. A sintaxe para definir o valor do innerHTML é a seguinte:
 

// Onde elemento é a referência do elemento HTML que será manipulado e novoValor é o conteúdo HTML que será definido.

// Por exemplo, para adicionar um parágrafo em um elemento com o ID "conteudo", o seguinte código pode ser usado:
// let conteudoEl = document.getElementById("conteudo");
// conteudoEl.innerHTML += "<p>Novo parágrafo adicionado através do innerHTML!</p>";



// Para alterar o conteúdo de todas as tags h (como h1, h2, h3, etc.) usando querySelectorAll, você pode selecionar todos os elementos h usando o método document.querySelectorAll com um seletor CSS correspondente a h, que pode ser "h1", "h2", "h3", etc. 
//Em seguida, você pode percorrer a lista de elementos selecionados e alterar o conteúdo de cada um usando a propriedade textContent ou innerHTML.

// Por exemplo, suponha que você tenha o seguinte HTML:

// html
// Copy code
// <h1>Meu Título 1</h1>
// <h2>Meu Título 2</h2>
// <h3>Meu Título 3</h3>
// Para alterar o conteúdo de todas as tags h para "Novo Título", você pode fazer o seguinte:

// javascript
// Copy code
// const hs = document.querySelectorAll('h');
// hs.forEach(h => {
//   h.textContent = 'Novo Título';
// });
// O código acima seleciona todos os elementos h usando document.querySelectorAll com o seletor CSS "h", e então usa o método forEach para percorrer a lista de elementos selecionados e definir o conteúdo de cada um para "Novo Título" usando a propriedade textContent. O resultado será o seguinte HTML:

// html
// Copy code
// <h1>Novo Título</h1>
// <h2>Novo Título</h2>
// <h3>Novo Título</h3>



// Exemplo

let corteste=document.getElementById('teste');
console.log(corteste);
corteste.innerHTML='Edson'; //ou corteste.textContent='Edson';
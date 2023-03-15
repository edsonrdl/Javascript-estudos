// O onsubmit é um atributo de eventos HTML que é usado para atribuir uma função JavaScript que será executada quando um formulário é submetido. 
// A função atribuída é chamada quando o botão "submit" é clicado ou quando a tecla Enter é pressionada enquanto um campo de formulário está em foco.

// A principal função do onsubmit é permitir que você execute um código personalizado antes que um formulário seja submetido ao servidor. 
//Por exemplo, você pode usar essa função para validar dados de entrada do usuário, formatar dados para que eles correspondam a um formato específico, ou executar outras tarefas personalizadas antes de enviar o formulário.

// Aqui está um exemplo de como usar o onsubmit em JavaScript:

// html
// Copy code
// <form onsubmit="return validateForm()">
//   <label for="name">Nome:</label>
//   <input type="text" id="name" name="name"><br><br>
//   <input type="submit" value="Submit">
// </form>

// <script>
//   function validateForm() {
//     var name = document.getElementById("name").value;
//     if (name == "") {
//       alert("Por favor, insira um nome válido.");
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
// </script>
// Neste exemplo, a função validateForm() é chamada quando o formulário é submetido. 
// A função verifica se o campo de nome está vazio e exibe uma mensagem de alerta se estiver. Se o campo de nome tiver um valor, a função retorna true e o formulário é submetido ao servidor.

// Observe que a função validateForm() retorna false se o campo de nome estiver vazio. 
// Isso impede que o formulário seja submetido e mantém o usuário na página do formulário para corrigir o erro. Se a função retornar true, o formulário é submetido normalmente.
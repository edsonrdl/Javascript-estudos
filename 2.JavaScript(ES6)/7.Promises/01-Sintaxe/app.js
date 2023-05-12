//Exemplo:
var defer = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('Olá,Mundo !');
            } else {
                reject('Error!');
            }
        }, 2000);
    });
    
    defer
        .then((data) => {
            console.log(data);
            return 'A promessa foi resolvida';
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

//Exemplo
function gerarNumeroAleatorio(tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
        if (numeroAleatorio > 5) {
          resolve(numeroAleatorio);
        } else {
          reject('Número muito baixo');
        }
      }, tempo);
    });
  }
  
  // Utilizando a promessa criada
  gerarNumeroAleatorio(2000) // espera 2 segundos
    .then(numero => console.log(`O número gerado foi ${numero}`))
    .catch(erro => console.log(`Erro: ${erro}`));

    //Math.floor>Arredonda para baixo 
    //Math.random() gera um número aleatório 
  

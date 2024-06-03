class Calculadora {
    constructor(valor = 0) {
      this.valor = valor;
    }
  
    adicionar(n) {
      this.valor += n;
      return this; // Retorna a instância atual para permitir o encadeamento
    }
  
    subtrair(n) {
      this.valor -= n;
      return this; // Retorna a instância atual para permitir o encadeamento
    }
  
    multiplicar(n) {
      this.valor *= n;
      return this; // Retorna a instância atual para permitir o encadeamento
    }
  
    dividir(n) {
      this.valor /= n;
      return this; // Retorna a instância atual para permitir o encadeamento
    }
  
    resultado() {
      return this.valor;
    }
  }
  
  // Uso do encadeamento de métodos
  const calculo = new Calculadora(10);
  const resultado = calculo.adicionar(5).subtrair(3).multiplicar(2).dividir(4).resultado();
  
  console.log(resultado); // Resultado: 6
  

//   $('#meuElemento')
//   .addClass('classe1')
//   .css('color', 'red')
//   .html('Novo conteúdo')
//   .fadeIn(500);

// Introdução
// Em JavaScript, um objeto é uma estrutura de dados que armazena informações em pares de chave-valor. As chaves são strings e os valores podem ser de qualquer tipo de dados, como números, strings, booleanos, objetos e funções. Os objetos em JavaScript são usados para representar entidades no mundo real, como uma pessoa, um carro ou uma conta bancária. Os objetos em JavaScript têm um conjunto de características únicas que os tornam poderosos e flexíveis.

// Elementos da estrutura de um objeto
// Um objeto em JavaScript consiste em vários elementos importantes, incluindo:

// Chaves (ou Propriedades)
// Chaves são strings que representam o nome da propriedade do objeto. Cada chave é única dentro do objeto e é usada para acessar o valor da propriedade correspondente.

// Valores
// Os valores são os dados armazenados no objeto. Eles podem ser de qualquer tipo, como strings, números, booleanos, objetos e funções.

// Métodos
// Os métodos são funções que são definidas como propriedades do objeto. Eles permitem que o objeto execute ações ou comportamentos específicos.

// Protótipo
// O protótipo é um objeto que é usado como uma espécie de modelo para criar novos objetos. Ele define as propriedades e métodos que são compartilhados por todos os objetos criados a partir dele.

// Principais características dos objetos em JavaScript
// Alguns dos recursos mais importantes dos objetos em JavaScript incluem:

// Encadeamento de propriedades
// Em JavaScript, é possível encadear propriedades de objetos para acessar valores aninhados. Isso é conhecido como encadeamento de propriedades e é uma técnica poderosa que permite escrever código conciso e expressivo.

// Ex
const pessoa = {
    nome: 'João',
    endereco: {
      rua: 'Rua das Flores',
      numero: 123,
      cidade: 'São Paulo'
    }
  };

  console.log(pessoa.endereco.cidade); // São Paulo


// Construtores de objeto
// Os construtores de objetos são funções que são usadas para criar novos objetos. Eles permitem criar múltiplos objetos com as mesmas propriedades e métodos.

// Ex
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function() {
      console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new Pessoa('João', 30);
  const pessoa2 = new Pessoa('Maria', 25);
  
  pessoa1.falar(); // Oi, meu nome é João e eu tenho 30 anos.
  pessoa2.falar(); // Oi, meu nome é Maria e eu tenho 25 anos.
  

// Herança prototípica
// A herança prototípica é uma técnica usada para criar objetos que herdam propriedades e métodos de outros objetos. Em vez de criar uma cópia completa do objeto, o novo objeto é criado com uma referência ao protótipo.

// Ex
const animal = {
    fazerBarulho() {
      console.log('O animal faz barulho.');
    }
  };
  
  const cachorro = Object.create(animal);
  cachorro.fazerBarulho = function() {
    
  };
console.log('O cachorro faz au au!');
  
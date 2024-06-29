class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", event => {
      console.log(this);
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();


//Outro exemplo para filtras usando arrow function
let produtos=[
  {
    produto:'camisa',
    preco:25,
    cor:'amarelo'},
  {
    produto:'sandalia'
    ,preco:67,cor:'rox'},
  {
    produto:'bermuda',
    preco:23,
    cor:'vermelho'},
  {
    produto:'bone'
    ,preco:10,
    cor:'rosa'
  },
  {
    produto:'short',
    preco:80,
    cor:'verde'
  },
  {
    produto:'oculos'
    ,preco:45,
    cor:'azul'
  },
  {
    produto:'camiseta'
    ,preco:50,
    cor:'preto'
  },
];
let precoMenorQue50=produtos.filter((produtos)=>{
  return produtos.preco<=50;
});
console.log(precoMenorQue50);
 
//Não dar para usar
let pessoa ={
  nome :"Mateus",
  sayName(){
    console.log(this.nome);
    console.log(this)
  }
}
pessoa.sayName();

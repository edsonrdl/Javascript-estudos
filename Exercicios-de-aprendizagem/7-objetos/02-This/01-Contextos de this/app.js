 //Não vai funcionar por não ter ainda o firstName então na hora de chamar vai dar (undefined)
 const user={
    info(){
        return "My name is "+ this.firstName;

},
 } 
 console.log(user.info()) //o this é o user nesse contexto
// function infor(){
//     return  "My name is"+ this.firstName;
// };
//  infor(); //Nada esta chamando o infor para o this fazer parte do contexto
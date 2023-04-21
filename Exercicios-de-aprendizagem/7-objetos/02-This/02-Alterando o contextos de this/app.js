// const user={
//     infor(){
//         return "My name is" + this.firstName;

//     },
// };
// const person={
//     firstName:"Alexandre",
// };
// const userInfor=user.info.bind(person)
// console.log(userInfor);

// utilizando o bind,retorna uma função
// function info(){
//   return   "My name is" + this.firstName;
// }
  
// const person={
//     firstName:"Alexandre",
// };
// const userInfor=user.info.bind(person)
// console.log(userInfor());

// // utilizando o calll,não retorna uma função  
// const person={firstName:"Alexandre"};
// var user={
//     infor(age){
//         console.log("My name is" + this.firstName + "and my age is " + age);
//     },
// };
// const userInfo= user.info.call(person,38);



//utilizando o apply,como array
const person={
    firstName:"Alexandre"
};
function info(age,yearBirth){
    console.log("My name is" + this.firstName + "andy my age is" + age + yearBirth);
}
const userInfo= info.apply(person,[38,1982]);
console.log(userInfo)
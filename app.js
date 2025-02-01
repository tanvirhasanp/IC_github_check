// /*
// ? some info
// ! alert
// TODO: something i wanna write  
// */

// // TODO: Something went wrong 

// console.log('tanvir hasan nishat')
// let t= 20;
// t = 'fuck u bby' // re-assign bt not re-declare
// console.log(t);
// var tan= 'md' // re- declare
// var tan= 500 // re-assign 
// console.log(tan)

// let userInput=prompt('Enter a number');
// let number= parseInt(userInput);

// if(number % 2 == 0)
// {
//     console.log(`${number} is an even number`) 
// } else 
// {
//     console.log(`${number} is an odd  number`)
// }

// let p = 20
// let q=30
//  let x = p<q ? 'True' : 'False'
//  console.log(x)


//  let firstName = 'Tanvir' 
//  console.log(typeof firstName)
//  console.log(firstName)
//  console.log(`${firstName}`)

//  let fruits = ['apple','orange','lemon','mango']
// //  console.log(`${fruits}`)
// console.log(fruits)

// let student = {
//     firstName: `Md.Tanvir Hasan` ,
//     dateOfbirth: 2002 ,
//     age: 24 ,
// }
// console.log( student)
 // JavaScript Function 
/*
 function myFunction() {
    console.log('Hello world!')
 }
 myFunction();
*/
 // dynamic function create
//  function myFunction(fullName){
//     console.log('Hello!' + fullName)
//  }
//  let fullName = prompt('Enter ur name ')

//  myFunction(fullName);

// function isSub()
// {
//     console.log('Subscribed!')
// }
// document.getElementById('btn').addEventListener('click',isSub)

// JavaScript object

// const mobileModel = {
//     // key:'value'
//     brand: 'Oppo',
//     model: 'a11 ultra',
//     camera: ['20 Mp','12 Mp','8 Mp'],
//     'mobile processor': 'core i7 11 gen',
// }
// console.log(mobileModel)
// console.log(mobileModel.camera) // output as dot 
// console.log(mobileModel['mobile processor']) // output as bracet 

// JavaScript objet symbol

// const newSymb= Symbol('key1');
// const mobileModel = {
//     // key:'value'
//     brand: 'Oppo',
//     model: 'a11 ultra',
//     camera: ['20 Mp','12 Mp','8 Mp'],
//     'mobile processor': 'core i7 11 gen',
//     [newSymb]:'Mykey1'
// }
// console.log(mobileModel)
// console.log(mobileModel.camera) 
// console.log(mobileModel['mobile processor'])
// console.log(mobileModel[newSymb])
// //update a value 
// mobileModel.camera= ['30 mp', '20 mp', '4 mp']
// // frezze value 
// // Object.freeze(mobileModel);
// mobileModel.camera= ['80 mp', '40 mp', '24 mp']
// console.log(mobileModel.camera)
// // looking for specific key
// console.log(mobileModel.hasOwnProperty('camera'));
// //object key search 
// console.log(Object.keys(mobileModel))
// //object value search
// console.log(Object.values(mobileModel))

// method into a object

const newSymb= Symbol('key1');
const mobileModel = {
    // key:'value'
    brand: 'Oppo',
    model: 'a11 ultra',
    camera: ['20 Mp','12 Mp','8 Mp'],
    'mobile processor': 'core i7 11 gen',
    [newSymb]:'Mykey1',
    brandModel: function(){
        return `Mobile brand is ${this.brand} and mobile model is ${this.model}`
    } 
}
console.log(mobileModel.brandModel()) ; 

const obj1={
    a: 1,
    b:2,
    c:3
}

const obj2={
    p:0,
    q:9,
    r:8
}

const obj3={
    x:7,
    y:6,
    z:5
}
const objFinal= Object.assign({}, obj1,obj2,obj3)
// const objFinal= {...obj1,...obj2,...obj3}

console.log(objFinal)



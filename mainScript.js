console.log('Testing');
//decalaring variable 
var firstName = 'Anil';
var lastName='Kattamuru';
var firstName='Venkat';
console.log(firstName,'-------->firstName');
//var keyword has two scopes i.e global scope and function scope
console.log(window.firstName,'======>firstName from global scope');

//var keyword with function scope
function varScopeTest(){
    var insideFunction = 'Inside function';
    console.log('inside function ===========>', insideFunction);
}
varScopeTest();
//console.log('inside function ===========>', insideFunction);//throws an error

//var keyword in block scope will not be possible
if(2===2){
    var x=10;
}
console.log('x value ===>',x);


/*********************Let Keyword***************/
//using let keyword redclaration is not possible
let box = 'A';
//let box='B';// throws an error
//let keyword will supports block level scope, function scope but not global scope
if(2===2){
    let insideBlock= 20;
}
//console.log('insideBlock is ==>',window.insideBlock); // throws an error
//console.log('getting block value',insideBlock);

/*******const keyword*******/
//let keyword can't be  redclared / updated
//let keyword will not support global scope
//let keyword supports function scope and block level scope
const pi= 3.14;
//pi=3.15; // throws an error
//const pi =3.16; /// throws an error

/************Data  Types*********/
let num = 200;
console.log('data type of num is ===>', typeof num);

let bigNum = 200000000000000n;
console.log('Data type of bigNum is ----->',typeof bigNum); //bigint

let stringVal = 'stringValue';
console.log('Data type of stringVal is ----->',typeof stringVal); //string

let bool = true;
console.log('Data type of bool is ----->',typeof bool); //boolean

let nullish = null;
console.log('Data type of nullish is ----->',typeof nullish); //object

let undef= undefined;
console.log('Data type of undef is ----->',typeof undef); //undefined

let obj = {};
console.log('Data type of obj is ----->',typeof obj); //object

let sym= Symbol('sym');
console.log('Data type of sym is ----->',typeof sym); //symbol

let arr =[];
console.log('Data type of arr is ----->',typeof arr); //object


console.log(null == undefined); //true
console.log(null === undefined);//false



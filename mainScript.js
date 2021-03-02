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


/**************Spread Operator******** */
//1.Expanding String
let names = 'Venkat';
let nameArr = [...names];
console.log(nameArr);

//2.Combining an Array
let arr1 = ["amazon","google"];
let arr2= ["salesforce","apple"];
let arr3 = [...arr1,...arr2];
console.log(arr3);

//3.Adding values to an array
let a1= ['a','b','c'];
let a2 =[...a1,"anil"];
console.log(a2);


//4.Combining an Objects
let o1 = {name:"s",age:'24',doB:'1/01/1995'};
let o2= {name:"k",age:'26',place:'india'};
let o3={...o1,...o2};
console.log(o3);


//5.Creating shallow copy
let arrN1= ['x','y','z'];
let arrN2 = [...arrN1];
arrN1.push('a');
console.log(arrN1);
console.log(arrN2);

//6.Nested Copy
let obja= [
    {name:"super",age:20},
    {name:"zero",age:10},
];

let objb = {...obja};
console.log(objb);
objb[0].name='Venky';
console.log(objb);
console.log(obja);


//hack
let objc= JSON.parse(JSON.stringify(obja));
objc[0].name='Kumar';
console.log(obja);
console.log(objb);
console.log(objc);

/***************Destructuring**********************/

//1.Array Destructuring
let arrna= ["salesforce","paypal"];
//let comp1= arrna[0];
//let comp2= arrna[1];
let [comp1,comp2]=arrna; 
console.log('comp1===>',comp1);

//2.Object Destructuring
let options = {
    name:"ap",
    age:1
}
//let title=options.title;
let {name, age} = options;
console.log('name from object destrucing', name);

/**************String Interpolation/Template literal*************/
var a= 10;
var b= 20;
console.log(`The sum of ${a} and ${b} is ${a+b}`);


var searchString ='Hello world by Venkat conatins the search string , i think it is good and Venkat is good';

//includes() specifies whether specified string is there or not
console.log('hello status in ===>',searchString.includes("hello"));
console.log('Hello status in ===>',searchString.includes("Hello"));

//indexOf() returns the first instance of specified string
console.log('index of good in search string is ====>'+searchString.indexOf('good'));//65
console.log('index of good in search string is ====>'+searchString.indexOf('goodest'));// -1

//startsWith() returns true if specified string is at starting
console.log('start of search string is Hello====>'+searchString.startsWith('Hello'));//true
console.log('start of search string is hello====>'+searchString.startsWith('hello'));//false

//slice() extracts the part of string and returns new string
console.log('extracted part of search string is==>',searchString.slice(0,5));//Hello , includes end position

//toLowerCase() converts the specified string to lower case letters
console.log('lower the search string ===>',searchString.toLowerCase());

//toUpperCase converts the specified string to upper case
console.log('lower the search string ===>',searchString.toUpperCase());

//trim removes the whitespaces before and after the string
var srSt = '     Hello     ';
console.log(srSt);
console.log(srSt.length);
var trimmedVar = srSt.trim();
console.log(trimmedVar);
console.log(trimmedVar.length);



/*
 * 
 * Object and JSON operations
 * 
 */
var objn = {
    name:"Anil",
    lastName:"K",
    age:27,
    company:"salesforce"
}
console.log(Object.keys(objn));
console.log(Object.values(objn));
console.log(JSON.stringify(objn));
var newObjs= JSON.parse(JSON.stringify(objn));
console.log(newObjs);


/*
*
*Array Methods : map(),every(),some(),sort(),filter(),reduce(),forEach()
*
*/

var arrm= [2,3,5,6,7,8,9,2,3,20];

/*syntax:
arr.methodName(function(currentItemOfArray,IndexOfCurrentItem,ActualArray){
    logic here............
})*/

//i)map() , map always returns an array
//double the each element of an array and return new array
var newarrm = arrm.map(function(currentItem,index,actualArray){
console.log(`at index ${index} , the current item is ${currentItem} inside an array ${actualArray}`);
return currentItem*2;
});
console.log(arrm);
console.log(newarrm);

//ii) filter()
var newfilter = arrm.filter(function(item,index,array){
  if(item>5){
    return item;
  }
});
console.log(newfilter);

//iii) every()
var ages = [17,20,26,85,47,15,35];
var isAllAdults = ages.every(function(item){
    return item>18;
})
console.log(isAllAdults);

//iv) some()
var someMinors = ages.some(function(item){
    return item<18;
});
console.log(someMinors);

//v)  sort() of string
var namesto=['Venkat','Beny','Karuna','Satyavati','Michael'];
console.log(namesto.sort());

//sort() for numbers
var points =[5,50,15,87,26,97];
var sortedPoints = points.sort(function(a,b){
  return a-b; //b-a retruns in descending order
});
console.log(sortedPoints);

//reduce()
/*syntax:
reduce(function(totalVal,item,index,array){

},initialvalue); */

var numbs= [2,4,6,8,10];
var totalVal = numbs.reduce(function(total,item){
return total+=item;
},0);
console.log(totalVal);

//forEach()  return is optional
var testnums = [2,4,6];
testnums.forEach(item => {
    console.log(item);
});









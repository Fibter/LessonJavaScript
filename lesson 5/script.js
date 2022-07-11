
//function funcName = (agrs) {} - Function declaration

//const funcName = () => { } - Fanction comprehation
//const funcName = function () {}  - Fanction comprehation  


//область видимости SCOPE
let number = 10; //Глобальная область видимости

function changeNumber() {
    let number = 20; //Локальная область видимости
    console.log(number, 'LOCAL');
}

changeNumber();
console.log(number, 'GLOBAL');


//Рекурсия  
const lenght = 22;
const vallueToFill = 'hello';
const finalArr = [];

const recursionFunc = (lenght, vallueToFill) => {
    if (finalArr.length === lenght) return finalArr; //граничный случай
    finalArr.push(vallueToFill);
    return recursionFunc(lenght, vallueToFill); //рекурсивный случай
}

console.log(recursionFunc(lenght, vallueToFill));

//Замыкание (closure) вложенные функции (функции внутри себя)   

function hello(text) {
    function showMessage() {
        console.log(`${text} World`);
    }
    showMessage();
}

hello('Hello');


const getCounter = () => {
    let counter = 0; // local var   
    return function () {
        return counter++;
    }

}
// const getCounter1 = () => {     -- сокращение кода
//     let counter = 0;
//     return () => counter++;
// }
let count = getCounter(); //функция

console.log(count());
console.log(count());
console.log(count());

function sum(x) {
    return function (y) {
        return x + y
    }
}
// let dom = sum(10);
// let dom2 = sum(20);

// console.log(dom(10));
// console.log(dom2(20));   
console.log(sum(10)(20)) // - Карирование   


// Arguments    
function sum(x, y) {
    // console.log(arguments or arguments.length or Array.from(arguments));   -вся схожесть аргументов с обьектами
}
sum(10, 11);


function sum(x, ...args) {   // Остаточный оператор.Rest operator
    console.log(args)
}
sum(10, 12);

// Default params
const bus = (x, y = 5) => x + y;

console.log(bus(4));


const palindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');  // cheining.цепочка
palindrome('level');


const fizzbuzz = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(20);



















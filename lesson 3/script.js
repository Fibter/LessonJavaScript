

let userQuestion = prompt('Что вы хотите сделать?(+ - / *)');

let firstNumber = prompt('Введите первое число');

let secondNumber = prompt('Введите второе число');




if (userQuestion === '+') {
    console.log(firstNumber + userQuestion + secondNumber + '=' + (+firstNumber + +secondNumber));

} else if (userQuestion === '-') {
    console.log(firstNumber + userQuestion + secondNumber + '=' + (+firstNumber - +secondNumber));

} else if (userQuestion === '/') {
    console.log(firstNumber + userQuestion + secondNumber + '=' + (+firstNumber / +secondNumber));

} else if (userQuestion === '*') {
    console.log(firstNumber + userQuestion + secondNumber + '=' + (+firstNumber * +secondNumber));
}

//let res;

// switch (userQuestion) {
//     case '+':
//         res = Number(firstNumber) + Number(secondNumber);
//         console.log(firstNumber + userQuestion + secondNumber + "=" + res);
//         break;
//     case '-':
//         res = Number(firstNumber) - Number(secondNumber);
//         console.log(firstNumber + userQuestion + secondNumber + "=" + res);
//         break;
//     case '/':
//         res = Number(firstNumber) / Number(secondNumber);
//         console.log(firstNumber + userQuestion + secondNumber + "=" + res);
//         break;
//     case '*':
//         res = Number(firstNumber) * Number(secondNumber);
//         console.log(firstNumber + userQuestion + secondNumber + "=" + res);
//         break;
//     default:
//         return console.log('Error')
//}






















let sqrtNumbers = [3, 5, 11, 22, 55];

for (let i = 0; i < sqrtNumbers.length; i++) {
    console.log(sqrtNumbers[i] ** 2);
}



let capitalCountry = {
    kiev: 'Ukraine',
    london: 'Great Britain',
    tallinn: 'Estonia'
};

for (let key in capitalCountry) {
    console.log(`'${key} - this is ${capitalCountry[key]}'`)
}


let arr = [2, 6, 5, 9, 15, 0, 10, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 4 || arr[i] > 11) {
        continue;
    }
    console.log(arr[i]);
}



















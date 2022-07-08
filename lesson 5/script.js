
const lenght = 4;
const valueToFill = 'hello'

const fillArray = (lenght, valueToFill) => {

    return new Array(lenght).fill(valueToFill)

};

console.log(fillArray(lenght, valueToFill))


let obj = {
    width: 10,
    height: 5,
    title: 'Test Array',
    count: 4
};

if (typeof obj !== 'object') {
    console.log('Error');
}

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] **= 2;
        }
    }
    return obj;
}
console.log(multiplyNumeric(obj))






















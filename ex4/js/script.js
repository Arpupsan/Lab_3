"use strict";

let arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
]

// 1
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].value < 100 && arr[i].type == "USD") {
        sum += arr[i].value;
    }

}

alert("Сума всіх значень value у яких тип ‘USD’ - " + sum);

// 2
let someArr = arr.filter(item => item.type == "EUR")
alert("Довжина другого масиву - " + someArr.length);

for (let i = 0; i < someArr.length; i++) {

    someArr[i].value *= 2;
    alert(`${i + 1} значення = ` + someArr[i].value);

}
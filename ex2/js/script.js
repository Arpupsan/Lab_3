'use strict';

function pascalTriangle() {
    let arr = [];
    let i;
    let j;
    let size=10;
    document.write("<center> <h1>Треугольник Паскаля</h1>");

    document.write('<p>');
    for (i = 1; i <= size; i++) {
        arr[i] = 0;
    }

    arr[0] = 1;
    for (j = 1; j <= size; j++) {
        for (i = j; i >= 1; i--) {
            document.write('\n<b>' + arr[i - 1] + '</b>');
 
            arr[i] = arr[i - 1] + arr[i];
        }
        document.write('<p>');

    }
    for (i = 0; i <= size; i++) {
        document.write(' <b>' + arr[i] + '</b>');
    }

}
pascalTriangle();
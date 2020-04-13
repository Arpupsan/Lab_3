"use strict";

let size = prompt("Скільки пляшок на стіні?")

for (let i = size; i > 0; i--) {
    alert(`${i} пляшок стоїть на стіні, одна упала і залишилось ${i - 1}`);    
    if(i == 1){
        alert("Жодної!");
    }
    
}
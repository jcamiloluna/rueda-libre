
function multiply(a, b) {           

let result = 0;

for(let i = 0; i < b; i++) {
    console.log("Resultado al inicio del bucle: " + result);
    result += a;
    console.log("Resultado al final del bucle: " + result);
}

return result;
}

console.log(multiply(5, 3));


function cube(x) {
    return x * x * x;
}
console.log(cube(3));

for (i = 0; i < 10; i++) {
    for (j = 0; j < 5; j++) {
        console.log(i);
    }
}

for (i = 100; i > -1; i-=5){
    for (j = 100; j < 5; j++) 
    console.log(j);
}

function dividir(a,b){
    let c = 0;
    while (a>=b){
        a -= b;
        c++;
    }
    return [c, a];
}
console.log(dividir(25,3));



function mayor(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let numeros = [1, 2, 3, 4, 5];
console.log(mayor(numeros));



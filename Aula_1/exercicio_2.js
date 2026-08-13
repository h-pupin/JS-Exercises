let numero = prompt("Digite um número: ");
let a = 0;
let b = 1;
let seq =[];


for (let i = 0; i < numero; i++){
    seq.push(a);
    [a, b] = [b, a + b];
}


console.log(seq);
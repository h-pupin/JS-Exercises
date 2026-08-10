let a = prompt("Digite o A: ")
let b = prompt("Digite o B: ")
let c = prompt("Digite o C: ")
if(a||b||c != Number){
    alert("Caracter digitado inválido")
    break
}

let delta = (b*b) - 4 * a * c

if(delta < 0){
    console.log("A equação não possui Raizes reais.")
} else if(delta == 0){
    let x = -b / (2*a)
    console.log(`A equação possui apenas uma Raiz : ${x}.`)
} else{
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    console.log(`A equação possui duas Raizes: ${x1} e ${x2}`)
}
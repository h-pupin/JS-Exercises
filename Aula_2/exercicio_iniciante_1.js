
function isPrime(numero){
    if (numero <2){
        return false
    }

    for(let i =2; i<=Math.sqrt(numero); i++){
        if(numero % i===0) {
            return false
        }
    }
    return true
}

let num = Number(prompt("Digite o numero: "))
const primos =[]

if (num <= 0 ){
    console.log("Numero inválido.")
}else{

    let i=0
    let numero = 2

    while(i<num){
        if (isPrime(numero)){
            primos.push(numero)
            i++
            numero++
        }else{
            numero++
        }
    }
}
console.log(primos)

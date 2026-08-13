//Função normal
function cToF(celsios){
    let fahr = ((9/5)*celsios)+32
    return fahr
}
console.log(cToF(100))


//Função anônima (função associada a uma variável)
let fToC = function(fahr){
    return (fahr - 32)*(5/9)
}
console.log(fToC(212))

//Valor padrão (valo da função pré definido, mas se por alguma coisa ele sobrescreve)
function teste(msg="Nada"){
    console.log(msg)
}
teste("Olá")
teste()

//Função com numero de parametros indefinidos (por "..." na frente do parametro)
function teste2(mensagem,...parametro){
console.log(mensagem)
    for (let i = 0; i<parametro.length; i++){
        console.log(parametro[i])
    }
}
teste2("Essas são as primeiras letras","a","b","c")


//Arrow function
let soma = (a,b) => {
    let c = a+b
    return c
}
//ou
let soma2 = (a,b) => a+b

console.log(soma(1,3))
console.log(soma2(20,40))

//Array (Lista = [])
let vetor = ["IFSP","JavaScript",2019,true,["Carlos",344.4,"joseff"],1.4567]
console.log(vetor)

vetor.pop()//Retira o ULTIMO elemento da lista
vetor.shift()//Retira o PRIMEIRO elemento da lista

vetor.push("MELÃO")//Add elemento ao FINAL da lista
vetor.unshift("MACACO")//Add elemento ao INÍCIO da lista

for (let i = 0; i<vetor.length; i++){
    console.log(vetor[i])
}

/*Percorrer Array(lista)
for valor in vetor ("in" retorna índice)
for valor of vetor ("of" retorna o valor)
*/

//Tirar e add ao mesmo tempo da lista
let lista = ["a","b","c","d","e","f"]

let retorno = lista.splice(3,2,1) /*se o numero estiver fora do indice retorna um vetor vazio.
(3,2,1) = no primeiro numero(3) é o indice q ele pega pra começar a remover, segundo(2) 
é o numero de itens que ele ira tirar, apartir do terceiro(1) é o q ele add no lugar 
onde o outro foi tirado.*/

console.log("Lista", lista)
console.log("Retorno", retorno)

//gerar uma nova parte do vetor(lista)

let novaLista = lista.slice()
console.log("nova Lista",novaLista)

//separar frases ou juntar
let palavras = "Eu gosto muito de estudar".split(" ") //faz um Array
console.log(palavras)

let novaFrase = palavras.join("-") //Faz uma String
console.log(novaFrase)


//FUNÇÃO MAP

const entrada = [1,2,3,4,5];
//const saida = [];

function operar(val, index, vetor){
    return val * index;
}
//map chama a função e passa valor, indice, vetor.
const saida = entrada.map(operar) //substitui essa de baixo

//for(let i=0; i<entrada.length; i++){
//    saida.push(operar(entrada[i], i, entrada));
//}
console.log(saida);


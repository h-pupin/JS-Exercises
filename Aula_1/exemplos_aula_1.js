console.log("Olá mundo!");

// comentario

/*
    Isso é 
    um comentario
    maior
*/

/* 
//tipos de variavel: (mais aconselhavel "let")
nome = "Henrique"; (GLOBAL)
let idade = 18; (SOMENTE DENTRO DO ESCOPO)
var cidade = "São Carlos"; (QUASE GLOBAL, SO NÃO FOGE DA FUNÇÃO)
const curso = "BES"; (SOMENTE DENTRO DO ESCOPO)

//Ex:
let a_1 = 10;
let A_1 = 10;
let variávelSemNoçâo = 10;

//tipos:
let nome = "Henrique"; //String
let idade = 10; //Number
let verdade = true; //Boolean
let falso = false;
let quasePi = 3.14; // Number
let nulo = null;  //Null
let algo; //undefined
*/

let num = 10;
let nome = "Henrique";

let msg = `Seja bem vindo ${nome}. Você tem ${num+2} mensagens`;//entre Crase!!
console.log(msg);

/* 3 formas de laço 

for(i = 0; i< 12; i++){     //i cm variavel global
    console.log("interacao numero" + i);
}

var contador = 0;
while(contador < 12) {
    console.log("interacao numero " + contador);
    contador++;
}

var contagem = 0;
do{
    console.log("interacao numero " + contador);
    contagem++;
} while (contagem < 12);

*/ 

/*NÃO ABUSAR DE ALERTAS:

alert("teste de algoritimo")

//alerta de Caixa pra escrita:

var name = prompt("Qual seu nome?");
if(name != null) {
    alert("Olá" + " " + name + "!!");
}
*/



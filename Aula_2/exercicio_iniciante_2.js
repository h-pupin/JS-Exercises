let entrada = ["javascript","ovo","computador","arara","programacao","radar","onibus"]
let palindromas = []

for(i=0;i< entrada.length;i++){
    invertida = entrada[i].split('').reverse().join('')
    if (entrada[i] == invertida){
        palindromas.push(entrada[i])
    }
}

console.log(palindromas)
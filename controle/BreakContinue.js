const nums = [1 ,2 , 3,4 ,5 , 6, 7, 8, 9 , 10]


 console.log (`Recado = array sempre começa no 0.`)
 console.log ('o console.log só le expressões dentro do array se estiver usando  ` ´.  ')
 console.log ('\ndentro da expressão |X| temos:')

for (x in nums) {

    if (x == 5) {
        break
    }

console.log (`Dentro Do Array ${x} Está Armazenado o Valor  ${nums[x]}. `)
}
console.log ('\nja dentro da expressão |Y| temos: ')
for (y in nums) {

    if (y == 5) {
        continue
    }
console.log (`Dentro Do Array ${y} Está Armazenado o Valor   ${nums[y]}. `)
}

console.log ('tambem podemos criar nomes para arrays, como por exemplo :')
console.log ('')
externo: for (a in nums){
    for (b in nums) {
    if (a == 2 && b == 3) break externo
    console.log (`par ${a}, ${b}`)
    }
}
console.log (' that is all folks ! ')
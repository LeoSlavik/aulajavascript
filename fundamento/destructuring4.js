function rand ([min = 0 , max = 1000]) {
if (min > max) [min , max] = [max , min]
const valor = Math.random() * (max - min) + min
return Math.floor(valor)
}

console.log (rand ([50 , 40 ]))
console.log (rand([992])) // intervalo entre o max (denominação do minimo pois é [992,]nao [,992])

console.log (rand ([, 10]) ) // minimo 0
console.log (rand([])) //valores padroes 
const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b , c:c}
const obj2 = {a , b , c}
console.log (obj1,obj2)

const nomeAttr = 'nota'
const ValorAttr = 7.5


const obj3 = {}                      // são
obj3[nomeAttr] = ValorAttr           //  a
console.log(obj3)                    //mesma
const obj4 = {[nomeAttr]:ValorAttr} // coisa
console.log (obj4)


const obj5 = {
    funcao1:  function (){
 // ...
}, 
funcao2 () {

    //...
}
}
console.log(obj5)
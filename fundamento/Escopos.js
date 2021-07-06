let a = 3

global.c = 123

this.d = 456


this.e = 7
this.f = 8 
this.g = 9

console.log (this.a)
console.log (a)
console.log (global.c)
console.log (module.exports.d) // mesma coisa que  ou this
console.log (module.exports === this) // não é igual a global , apenas o this
console.log (module.exports)

abc = 3 

console.log (global.abc) // exstritamente perigoso de se usar em comandos
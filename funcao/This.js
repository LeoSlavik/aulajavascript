// Aula Extra


/* this é Um Window do navegador , a diferença é q ele é do javascript o teu valor pode variar 
dependendo do escopo

No escopo global
o valor de this sempre se refere ao escopo global, sendo estrito ou não
*/

this.a =37
console.log (this.a)

/* com arrow , seu valor é definido lexicamente ou seja , ira ser definido pelo contexto de onde 
está sendo executado
*/

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); 
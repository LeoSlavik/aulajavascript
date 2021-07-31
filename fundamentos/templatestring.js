const nome = 'alunos'
const template = `

sejam bem vindo 
${nome}. 
hoje estaremos apresentando o uso de Template Strings!!!`

console.log (template)


const justaposicao = 'lapis-borracha' // justaposições sempre sao a  concatenação de duas palavras 
 const aglutinacao = 'la' + 'rracha'                                      // mas não se retira nenhuma letra  delas.
 
 const JTemplates = `

eu tenho um lapis com uma borracha na ponta
e quero q seu nome seja derivado de uma justaposição.
ele será : ${justaposicao}

`
console.log (JTemplates)
const Atemplates = `

mas  e se derivar de aglutinação será : ${aglutinacao} 

`
console.log (Atemplates)


const up = texto => texto.toUpperCase()
console.log (`3 Segundos e sera o ano novo ${up(' feliz ano novo !!!')}!`) 



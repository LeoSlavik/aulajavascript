function soma1 ( a , b , c) {

    a = a || 1
    b = b || 1
    c = c || 1
return a + b + c 
}

console.log (soma1 ( 1, 3 , 5) , soma1  () , soma1 (0 , 0 , 0) , soma1 (1.5 , 3.4 , 1.4))


function soma2 ( a , b , c ) {

    a = a !== undefined ? a :1
    b = 1 in arguments ? b : 1
    c = isNaN (c) ? 1 : c
    return a + b + c 
}

console.log (soma2() , soma2( 1, 3 , 5 ) , soma2(5 , 4 , 'yeye') , soma2 (2 , 2 , ))

function soma3 ( a = 1 , b = 1 , c = 1) {

 return a + b + c 
 
}

console.log (soma3 ( 3 , 2 , ) , soma3 ( 0 , 0 , 0) , soma3(5 , 4 ,('')) , soma3 ())
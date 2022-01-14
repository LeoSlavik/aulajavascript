export class Calculos {

   AreaDoQuadrado  (Base , Altura )
 { 
    return Base * Altura

}
 VolumeDoCubo  ( Altura:number , LadoA ,LadoB  )  { 
return  this.AreaDoQuadrado( LadoA,LadoB ) * Altura
}


 VolumeCilindrico ( Pi , Altura , Raio ,  )  { 
     return  Pi * Math.pow(Raio , 2)  *  Altura           
}


}
module.exports = Calculos; 

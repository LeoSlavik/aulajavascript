

//Favor, Fazer o calculo em metros



// Calculo de Volume da Area onde será colocado o produto 
{


/*console.log('O Volume Deste produto cilindrico  é ' ,  VolumeDoProdutoCilindrico(Math.PI,2,2),'m³')
console.log('O Volume Desta area cilindrica  é ' ,  VolumeDaAreaCilindrica(3.14,10,2),'m³')
console.log('O Volume Desta area cubica  é ' ,  VolumeAreaDoCubo(5),'m³')
console.log('O Volume Deste produto  cubico  é ' ,  VolumeDoprodutoDoCubo(1),'m³')



if VolumeAreaDoCubo(6) < VolumeDoprodutoDoCubo) {
    console.log ('Tamanho insuficiente') } else {
        console.log('A quantia de produtos que cabem nessa area são ', VolumeAreaDoCubo(5) / VolumeDoprodutoDoCubo(6) ,'produtos')}
        if (VolumeAreaDoCubo < VolumeDoprodutoDoCubo) {
    console.log ('Tamanho insuficiente') } else {(
console.log('A quantia de produtos que cabem nessa area são ', VolumeDaAreaCilindrica(3.14, 10 , 2 ) / VolumeDoProdutoCilindrico(3.14 , 2 , 2) ,'produtos')}


*/
}
import * as calculos from "./Calculos";
export class Quarto { 
 private  Paredes:number ;  
   Altura: number ; 
   Largura: number; 
   Comprimento: number  ; 
   teto: number;
   piso: number; 
   janela: number ; 
   porta:number;  
getparede() 
{
return calculos.AreaDoQuadrado(this.Altura , this.Largura)   
}
getpiso()
{
return calculos.AreaDoQuadrado(this.Largura, this.Comprimento)
} 
getvolume()  { 

   return this.Altura * this.getpiso() 
}

}
















     /*   var VaC = function ( Altura:Number)  { 
                   
            return  AreadaCircunferencia(Math.PI , ) * Altura 
            
        }
        let VpC = function ( Altura:Number)  { 
               
            return  AreadaCircunferencia * Altura
            
        }*/


    
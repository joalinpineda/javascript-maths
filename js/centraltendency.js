//Promedio o Media
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        (valorAcumulado = 0, e) => valorAcumulado + e
    ) 

    const promedioLista = sumaLista /lista.length
    return promedioLista
}

 //Mediana

 const lista1 =[
    200,500,100, 400000000, 2200
 ]
 lista1.sort((a, b)=>a-b)
 
 function esPar(numero){
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }
 }

 const mitadLista1 = parseInt( lista1.length / 2)
 let mediana
 if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1] 
    const elemento2 = lista1[mitadLista1]

    const promedio = calcularMediaAritmetica([elemento1, elemento2])

    mediana = promedio

 }else{
     mediana = lista1[mitadLista1]
 }

 //Moda
 const lista2 = [
     1,2,3,1,2,3,4,2,2,1
 ]

 const listaCount = {}

 lista2.map(
     function(elemento){
         if(listaCount[elemento]){
             listaCount[elemento] += 1
         }else{

             listaCount[elemento] = 1
         }
     }
 )

 const lista2Array = Object.entries(listaCount).sort(
     (a, b)=> a[1]- b[1]
 )

 const moda = lista2Array[lista2Array.length-1]
 
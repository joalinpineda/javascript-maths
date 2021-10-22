//Cuadrado
console.group('Cuadrado')

function perimetroCuadrado(lado){
    return lado * 4
} 

function areaCuadrado(lado){
    return lado ** 2
} 


console.groupEnd()


//Triangulo
console.group('Triangulo')
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}

// function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
//     if(trianguloGrandeLadoA != trianguloGrandeLadoB){
//         console.error("los lados a y b no son iguales")
//     }else{
//         const trianguloPequenoLadoB = trianguloGrandeLadoB / 2
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA
//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB **2
//         const trianguloPequenoLadoBaseCuadrado  = trianguloPequenoLadoBase **2
//         const trianguloPequenoLadoA= Math.sqrt(
//             trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
//             )
//         const trianguloGrandeAltura = trianguloPequenoLadoA
//         return trianguloGrandeAltura

//     }
// }

function areaTriangulo(base, altura){
    return (base * altura)/2
}
console.groupEnd()

console.group('Circulo')
function diametroCirculo(radio){
    return radio * 2
}
const PI = Math.PI
function perimetroCirculo(radio){
    const diametro =  diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd()

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
   
    const perimetro = perimetroCuadrado(value)
     const result = document.getElementById("cuadradoResult")
     result.innerHTML = `El perimetro del cuadrado es de: ${perimetro}`

}
function calcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
  
    const area = areaCuadrado(value)
    const result = document.getElementById("cuadradoResult")
     result.innerHTML = `El area del cuadrado es de: ${area}`
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio")
    const value = input.value
    
    const perimetro = perimetroCirculo(value)
    const result = document.getElementById("circuloResult")
    result.innerHTML = `El perimetro del circulo es de: ${perimetro.toFixed(2)}`
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio")
    const value = input.value
    
    const area = areaCirculo(value)
    const result = document.getElementById("circuloResult")
    result.innerHTML = `El area del circulo es de: ${area.toFixed(2)}`
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1")
    const valueLado1 = parseInt( inputLado1.value)

    const inputLado2 = document.getElementById("InputLado2")
    const valueLado2 = parseInt( inputLado2.value)

    const inputLadoBase = document.getElementById("InputLadoBase")
    const valueLadoBase = parseInt(inputLadoBase.value)

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueLadoBase)
    const result = document.getElementById("trianguloResult")
    result.innerHTML = `El perimetro del triangulo es de ${perimetro}`
}
function calcularAreaTriangulo(){
   
    const inputLadoBase = document.getElementById("InputLadoBase")
    const valueLadoBase = inputLadoBase.value

    const inputAlturaTriangulo = document.getElementById("InputAlturaTriangulo")
    const valueAlturaTriangulo = inputAlturaTriangulo.value

    const area = areaTriangulo(valueLadoBase, valueAlturaTriangulo)
    const result = document.getElementById("trianguloResult")
    result.innerHTML = `El area del triangulo es de: ${area}`
}
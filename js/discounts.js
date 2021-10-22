const precioOriginal = 120
const descuento = 18

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = ( precio * porcentajePrecioConDescuento) / 100
    return precioConDescuento
}

function onClickButonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice')
    const inputDiscount = document.getElementById('InputDiscount')
    const priceValue =  inputPrice.value 
    const discountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    const result = document.getElementById("Result")
    result.innerHTML = `El precio con descuento es de: ${precioConDescuento}`

}
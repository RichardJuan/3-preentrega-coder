const agradecimiento = document.getElementById("agradecimiento");
const formCarrito = document.getElementById("formCarrito");
const compra = document.getElementById("compra");
const valor = document.getElementById("valor");

let cupon = document.getElementById("cupon");
const textCupon = document.getElementById("textCupon")
const og = localStorage.getItem("OG");
const ingresarCupon = document.getElementById("ingresarCupon");

const valorTotal = document.getElementById("valorTotal");
const articuloCompra = JSON.parse(localStorage.getItem("compra"));

const botonCompra = document.getElementById("botonC")
let valorTotalIncompleto = articuloCompra.reduce((valorinc, item) => valorinc + item.Precio, 0);
let descuento = (valorTotalIncompleto - (valorTotalIncompleto * 0.9))
valorTotal.innerText = `$${(valorTotalIncompleto)}`
compra.innerText = `${articuloCompra[0].Modelo}`;
valor.innerText = `$${articuloCompra[0].Precio}`;

ingresarCupon.addEventListener("submit", (e) => {
    e.preventDefault();
    let cuponIngresado = ingresarCupon.value
    if(cuponIngresado === og){
        cupon.innerText = `-${descuento}`;
        valorTotal.innerText = `${valorTotal - descuento}`
        ingresarCupon.remove();
        textCupon.remove();
    }else{}
});
botonCompra.addEventListener("click", () => {
    formCarrito.remove();
    agradecimiento.innerText = "GRACIAS POR SU COMPRA"
});
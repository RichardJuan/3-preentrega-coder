const agradecimiento = document.getElementById("agradecimiento");
const formCarrito = document.getElementById("formCarrito");
const compra = document.getElementById("compra");
const valor = document.getElementById("valor");

let cupon = document.getElementById("cupon");
const textCupon = document.getElementById("textCupon")
const og = localStorage.getItem("OG");
const ingresarCupon = document.getElementById("ingresarCupon");
const enviarCupon = document.getElementById("formCarrito");

const valorTotal = document.getElementById("valorTotal");
const articuloCompra = JSON.parse(localStorage.getItem("compra"));

const botonCompra = document.getElementById("botonC")
const botonEnviar = document.getElementById("botonE");

let valorTotalIncompleto = articuloCompra.reduce((valorinc, item) => valorinc + item.Precio, 0);
const descuento = (valorTotalIncompleto - (valorTotalIncompleto * 0.9))
valorTotal.innerText = `$${(valorTotalIncompleto)}`
compra.innerText = `${articuloCompra[0].Modelo}`;
valor.innerText = `$${articuloCompra[0].Precio}`;

enviarCupon.addEventListener("submit", (e) => {
    const valorTotalFinal = valorTotal.innerText.split("$")[1] - descuento;
    e.preventDefault();
    let cuponIngresado = ingresarCupon.value
    if(cuponIngresado === og){

        cupon.innerText = `-$${descuento}`;
        valorTotal.innerText = valorTotalFinal;
        ingresarCupon.remove();
        textCupon.remove();
        botonEnviar.remove()
    }else{}
});
botonCompra.addEventListener("click", () => {
    formCarrito.remove();
    agradecimiento.innerText = "GRACIAS POR SU COMPRA"
    agradecimiento.classList = "cuadro"
    let timerInterval;
    Swal.fire({
        icon: "success",
        title: "Compra concretada, FELICIDADES",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
        },
        willClose: () => {
        clearInterval(timerInterval);
        }
    }).then((result) => {
    /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        }
    });
});
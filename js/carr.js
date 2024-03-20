const agradecimiento = document.getElementById("agradecimiento");
const formCarrito = document.getElementById("formCarrito");
const compra = document.getElementById("compra");
const valor = document.getElementById("valor");

const valorTotal = document.getElementById("valorTotal");
const carrito = JSON.parse(localStorage.getItem("carrito"));

const botonCompra = document.getElementById("boton")
if(carrito !== null){
    compra.innerText = ""
}

const costo = carrito.reduce((
    (accumulator, item) => accumulator + item.Precio), 0);

carrito.forEach((item) =>{
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="" style="width: 20rem;">
    <h5 class="">${item.Modelo}</h5>
    <p class="">$${item.Precio}</p>
    </div>
    `
    compra.append(div);
})

valorTotal.innerText= `$${costo}`

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
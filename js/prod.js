const listadoDeProd = document.getElementById("listadoDeProd");
let boton = document.getElementById("boton1"); // boton extraido del HTML
function filtradoDeProd(productosFiltrado){
    // Iterar sobre la colección de elementos
    for (let i = 0; i < productosFiltrado.length; i++) {
        const elementosCard = document.getElementById(productosFiltrado[i].id);
        elementosCard.remove();
    }
} 

class Articulo { //Definicion del catalogo y sus elementos
    constructor(id, foto, Modelo, Precio) {
        this.id = id;
        this.foto = foto;
        this.Modelo = Modelo;
        this.Precio = Precio;
    }
}
//traeyendo elementos
const carrito = [] //array de carrito
let cartera = document.getElementById("cartera");//declaracion de Monto y filtrado de catalogo para opciones disponibles
cartera.addEventListener("click", () => {
    const { value: cartera } = Swal.fire({//Definicion del monto que se tiene en la cartera
        title: "Seleccione su monto disponible",
        input: "select",
        inputOptions: {
        Monto: {
            45000: 45000,
            70000: 70000,
            80000: 80000,
            220000: 220000,
            260000: 260000,
        },
        },
        inputPlaceholder: "Cuanto está dispuesto a invertir",
        showCancelButton: true,
    }).then(Monto => {
    let Filtrado = catalogo.filter ((item) => item.Precio > Monto.value); //filtrado de que elementos entrar en el rango de disponibilidad
    filtradoDeProd(Filtrado);
    });
});
const catalogo = []
const trayendoElementos = async () => {
    try{
        const response = await fetch("../data.json");
        const data = await response.json();
        data.forEach((item) => {
            const div = document.createElement("div");
            div.setAttribute("id", item.id);
            div.classList.add("prod")
            div.innerHTML = `
            <div class="card m-5 col-md-4" style="width: 20rem;">
            <img class="card-img-top" src="${item.foto}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${item.Modelo}</h5>
            <p class="card-text">$${item.Precio}</p>
            <input type="submit" class="btn btn-primary" onClick="añadirCarrito(${item.id})" >
            </div>
            </div>
            `
            listadoDeProd.append(div);
            const articulo = new Articulo (item.id, item.foto, item.Modelo, item.Precio);
            

        catalogo.push(articulo)
        });
        

    }
    catch(error){
        console.log(error);
    }
}
trayendoElementos();


function añadirCarrito(id){
    const articulo = catalogo.find((item) => item.id == id)
    carrito.push(articulo)
    console.log(articulo);
    localStorage.setItem("carrito", JSON.stringify(carrito))
        const Toast = Swal.mixin({ //Sweet Alert para cartel superior derecho indica que se cargo bien
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Añadido al Carrito con exito"
    });
}
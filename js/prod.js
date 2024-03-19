const listadoDeProd = document.getElementById("listadoDeProd");
let boton = document.getElementById("boton1"); // boton extraido del HTML
function filtradoDeProd(productosFiltrado){
    // Iterar sobre la colección de elementos
    for (let i = 0; i < productosFiltrado.length; i++) {
        const elementosCard = document.getElementById(productosFiltrado[i].id);
        elementosCard.remove();
    
}} 
function finalizarProceso(){ //Definicion del proceso final al añadir al carrito
InteraccionP.addEventListener("click", () => {
    localStorage.setItem("compra", JSON.stringify(carrito));
    console.log(carrito);
    opciones.innerText = `Graciass, DE REGALO por su primera compra obtiene un cupon del 10%, guardelo "${cuponGenerado}"`
    boton.remove();
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
    })
}
//Generacion de cupon de descuento
let cuponGenerado = `OG${(Math.round(Math.random()* 100 + 200))}`;
localStorage.setItem("OG", cuponGenerado);
class Articulo { //Definicion del catalogo y sus elementos
    constructor(id, foto, Modelo, Precio) {
        this.id = id;
        this.foto = foto;
        this.Modelo = Modelo;
        this.Precio = Precio;
    }
}
//traeyendo elementos
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
                <a href="#" class="btn btn-primary">Agregar a carrito</a>
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
let InteraccionP = document.getElementById("InteraccionP");//traemos el formulario de los productos
InteraccionP.addEventListener("submit", (e) => {//Eleccion de articulo del catalogo
    e.preventDefault();
    let inputs = e.target.children;
    let modeloSelected = (inputs[1].value).toUpperCase();
    const modeloCompleto = Catalogo.filter((item) => item.Modelo === modeloSelected); 
    localStorage.setItem("modeloSelected", JSON.stringify(modeloCompleto));

    const cuotas = []//calculo de cuotas
    for (let c = 2; c <= 6; c++){
        if (c === 3){
            continue;
        }
        if (c === 5){
            continue;
        }
        let calculoCuotas = ((modeloCompleto[0].Precio / 2) + (modeloCompleto[0].Precio * 0.21) / c);
        respuestaCuotas = `${c} de $${calculoCuotas}`;
        cuotas.push(respuestaCuotas);
    };
    if (!Catalogo.some((Item) => Item.Modelo === modeloSelected)){//Condicion para verificar la existencia del articulo
        let accesible = sessionStorage.getItem("accesible");
        opciones.innerText =`Deposite alguna de las opciones anteriores (${accesible})`;
    }else{
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
            resolve({
                Contado: "Contado",
                Cuotas: "Cuotas",
            });
            }, 1000);//Promesa con intervalo de 1 segundo (1000 mls)
        });
        const { value: metodoDePago } = Swal.fire({//Sweet Alert con seleccion en radio para metodo de pago
            title: "Seleccione metodo de pago",
            input: "radio",
            inputOptions,
        }).then(metodoDePago => {//retencion de respuesta para definir entre las opciones cuotas o contado
            if (metodoDePago.value === "Cuotas"){
                opciones.innerText = `Las opciones son ${cuotas}.
                Presione el boton para añadir al carrito.`;
                IM.remove();
                finalizarProceso();
                carrito.push(modeloCompleto[0]);
            }
            if (metodoDePago.value === "Contado"){
                opciones.innerText = `El valor de la unidad es de $${modeloCompleto[0].Precio}.
                Presione el boton para añadir al carrito`;
                IM.remove();
                finalizarProceso();
                carrito.push(modeloCompleto[0]);
            }
        })}})
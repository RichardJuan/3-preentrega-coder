let boton = document.getElementById("boton1"); // boton extraido del HTML
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
    constructor(Marca, Modelo, Precio, Talle) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
        this.Talle = Talle;
    }
}
//elementos
const NSJ = new Articulo("Nike", "STEFAN JANOSKI", 45000, 41);
const AF1 = new Articulo("Nike", "AIR FORCE 1", 70000, 41);
const AM90 = new Articulo("Nike", "AIR MAX 90", 80000, 41);
const J1 = new Articulo("Nike", "JORDAN 1", 220000, 41);
const J5 = new Articulo("Nike", "JORDAN 5", 260000, 41);
const Catalogo = [NSJ, AF1, AM90, J1, J5]; //array de los elementos
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
    let Filtrado = Catalogo.filter ((item) => item.Precio <= Monto.value); //filtrado de que elementos entrar en el rango de disponibilidad
    const accesible = Filtrado.map((elemento) => elemento.Modelo);//Se agregan a un array generado automaticamente
    sessionStorage.setItem("accesible", accesible);
    let opciones = document.getElementById("opciones");//traemos la seccion inferior del contenedor del HTML
    opciones.innerText = `Con $${Monto.value} a dispocisión, tenemos para ofrecerte: ${accesible}`;//Mostramos en el HTML los ACCESIBLES
    boton.scrollIntoView({behavior:'smooth'});//Comando para que baje el scroll al finalizar el proceso
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
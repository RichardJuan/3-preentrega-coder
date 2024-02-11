//Definicion del catalogo y sus elementos
class Articulo {
    constructor(Marca, Modelo, Precio, Talle) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
        this.Talle = Talle;
    }
}

const NSJ = new Articulo("Nike", "STEFAN JANOSKI", 45000, 41);
const AF1 = new Articulo("Nike", "AIR FORCE 1", 70000, 41);
const AM90 = new Articulo("Nike", "AIR MAX 90", 80000, 41);
const J1 = new Articulo("Nike", "JORDAN 1", 220000, 41);
const J5 = new Articulo("Nike", "JORDAN 5", 260000, 41);

const Catalogo = [NSJ, AF1, AM90, J1, J5];
const carrito = []
/*
//Calculos de cuotas respectivas a cada elemento del catalogo en funciones
function FuncionStefanJanoski(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert(`El monto a abonar será de ${NSJ.Precio}`);
    }else if (metodoDePago === "cuotas"){
        for (let c = 2; c <= 6; c++){
            if (c === 3){
                continue;
            }
            if (c === 5){
                continue;
            }
            let cuota = ((Catalogo[0].Precio / 2) + 20500 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }
};
function FuncionAirForce1(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert(`El monto a abonar será de ${AF1.Precio}`);
    }else if (metodoDePago === "cuotas"){
        for (let c = 2; c <= 6; c++){
            if (c === 3){
                continue;
            }
            if (c === 5){
                continue;
            }
            let cuota = ((Catalogo[1].Precio / 2) + 35000 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }
};
function FuncionAirMax90(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert(`El monto a abonar será de ${AM90.Precio}`);
    }else if (metodoDePago === "cuotas"){
        for (let c = 2; c <= 6; c++){
            if (c === 3){
                continue;
            }
            if (c === 5){
                continue;
            }
            let cuota = ((Catalogo[2].Precio / 2) + 40000 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }

};
function FuncionJordan1(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert(`El monto a abonar será de ${J1.Precio}`);
    }else if (metodoDePago === "cuotas"){
        for (let c = 2; c <= 6; c++){
            if (c === 3){
                continue;
            }
            if (c === 5){
                continue;
            }
            let cuota = ((Catalogo[3].Precio / 2) + 110000 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }
};
function FuncionJordan5(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert(`El monto a abonar será de ${J5.Precio}`);
    }else if (metodoDePago === "cuotas"){
        for (let c = 2; c <= 6; c++){
            if (c === 3){
                continue;
            }
            if (c === 5){
                continue;
            }
            let cuota = ((Catalogo[4].Precio / 2) + 130000 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }
};
*/

let cartera = document.getElementById("cartera");
cartera.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let Monto = inputs[0].value;
    sessionStorage.setItem("Monto", Monto);
    //Filtrado y definicion de articulos en base al monto disponible 
    let Filtrado = Catalogo.filter ((item) => item.Precio <= Monto);
    const accesible = Filtrado.map((elemento) => elemento.Modelo);
    let opciones = document.getElementById("opciones");
    opciones.innerText = `Con $${Monto} a dispocision, tenemos para ofrecerte: ${accesible}`
});
//traemos el formulario de los productos
let InteraccionP = document.getElementById("InteraccionP");
InteraccionP.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let eleccion = inputs[1].value;
    sessionStorage.setItem("eleccion", eleccion);
});

let eleccion = Catalogo.find (Item => Item.Modelo === (sessionStorage.getItem("eleccion").toUpperCase));

//calculo de cuotas, que reemplazara lo comentado al inicio.
for (let c = 2; c <= 6; c++){
    if (c === 3){
        continue;
    }
    if (c === 5){
        continue;
    }
    let cuota = ((eleccion.Precio / 2) * 0.15 / c);
}

let Monto = sessionStorage.getItem("Monto");


            /*let agregar = prompt(`¿Que articulo desea agregar? ${accesible}`)
if(accesible.includes(agregar)){
    carrito.push(agregar);
    let elementoSeleccionado = Catalogo.find((elemento) => elemento.Modelo === agregar)
    alert(`el costo de tu carrito es de $${elementoSeleccionado.Precio}`);
}

//Generacion de cupon de descuento
let cupon = Math.round(Math.random()* 100 + 200);
let cuponIngresado = prompt(`Felicidades, por ser su primer compra le regalamos un cupon del 10% OFF. INGRESE OG${cupon}`)

//Calculo del costo del articulo - el descuento

let costoTotal = carrito.reduce((total, elemento) => total + Catalogo.find((articulo) => articulo.Modelo === agregar).Precio, 0)*0.9;

if(cuponIngresado === `OG${cupon}`){
    alert(`El total a abonar sera de ${costoTotal}`)
};*/

//Definicion del catalogo y sus elementos
class Articulo {
    constructor(Marca, Modelo, Precio, Talle) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
        this.Talle = Talle;
    }
}

const NSJ = new Articulo("Nike", "Stefan Janoski", 45000, 41);
const AF1 = new Articulo("Nike", "Air Force 1", 70000, 41);
const AM90 = new Articulo("Nike", "Air Max 90", 80000, 41);
const J1 = new Articulo("Nike", "Jordan 1", 220000, 41);
const J5 = new Articulo("Nike", "Jordan 5", 260000, 41);

const Catalogo = [NSJ, AF1, AM90, J1, J5];


const carrito = []

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

let Monto = prompt("¿Cuanto esta dispuesto a invertir en su estetica? (45000, 70000, 80000, 220000 o 260000)");

//Filtrado y definicion de articulos en base al monto disponible 
let Filtrado = Catalogo.filter ((item) => item.Precio <= Monto)
const accesible = Filtrado.map((elemento) => elemento.Modelo);


if (Monto >= 260000 ){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
Catalogo.some((item) => item.Modelo === Eleccion)
if (Eleccion === "Nike Stefan Janoski"){
    FuncionStefanJanoski();
}else if (Eleccion === "Air Force 1"){
    FuncionAirForce1();
}else if (Eleccion === "Air Max 90"){
    FuncionAirMax90();
}else if (Eleccion === "Jordan 1"){
    FuncionJordan1();
}else if (Eleccion === "Jordan 5"){
    FuncionJordan5();
}else{
    alert("Debe ingresar un modelo")
}
}else if(Monto >= 220000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de los siguientes articulos del catalogo: ${accesible}.
    ¿Cual le gustaria llevar?`);
    Catalogo.some(item => item.Modelo === Eleccion)
    if (Eleccion === "Nike Stefan jJanoski"){
        FuncionStefanJanoski();
    }else if (Eleccion === "Air Force 1"){
        FuncionAirForce1();
    }else if (Eleccion === "Air Max 90"){
        FuncionAirMax90();
    }else if (Eleccion === "Jordan 1"){
        FuncionJordan1();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 80000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de los siguientes articulos del catalogo: ${accesible}.
    ¿Cual le gustaria llevar?`);
    Catalogo.some(item => item.Modelo === Eleccion)
    if (Eleccion === "Nike Stefan Janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion === "Air Force 1"){
        FuncionAirForce1();
    }else if (Eleccion === "Air Max 90"){
        FuncionAirMax90();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 70000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de los siguientes articulos del catalogo: ${accesible}.
    ¿Cual le gustaria llevar?`);
    Catalogo.some(item => item.Modelo === Eleccion)
    if (Eleccion === "Nike Stefan Janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion === "Air Force 1"){
        FuncionAirForce1();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 45000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad unicamente de: ${accesible}.
    De querer continuar con la compra ingrese "Si"`);
    if (Eleccion === "Si" || Eleccion === "si"){
        Catalogo.some(item => item.Modelo === Eleccion)
        FuncionStefanJanoski();
    }else{
        alert("Debe ingresar un modelo")
    }
}else{
    alert(`Lo sentimos, con ${Monto} pesos no tenemos disponibilidad de ningun producto.`);
};

let agregar = prompt(`¿Que articulo desea agregar? ${accesible}`)
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
};

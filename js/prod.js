/*class Articulosss{
    constructor (Marca, Modelo, Precio, Talle){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
        this.Talle = Talle;
    };
}
    const NSJ = new Articulosss ("Nike", "Stefan Janoski", 45000, 41);
    const AF1 = new Articulosss ("Nike", "Air Force 1", 70000, 41);
    const AM90 = new Articulosss ("Nike", "Air Max 90", 80000, 41);
    const J1 = new Articulosss ("Nike", "Jordan 1", 220000, 41);
    const J5 = new Articulosss ("Nike", "Jordan", 260000, 41);
*/

const Catalogo = [
    {Marca: "Nike", Modelo: "Nike Stefan Janoski", Precio: 45000, talle: 41},
    {Marca: "Nike", Modelo: "Air Force 1", Precio: 70000, talle: 41},
    {Marca: "Nike", Modelo: "Air Max 90", Precio: 80000, talle: 41},
    {Marca: "Nike", Modelo: "Jordan 1", Precio: 220000, talle: 41},
    {Marca: "Nike", Modelo: "Jordan 5", Precio: 260000, talle: 41},
]

function FuncionStefanJanoski(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert("El monto a abonar será de $45.000");
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
}
function FuncionAirForce1(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert("El monto a abonar será de $70.000");
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
}
function FuncionAirMax90(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert("El monto a abonar será de $80.000");
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
}
function FuncionJordan1(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert("El monto a abonar será de $220.000");
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
}
function FuncionJordan5(){
    let metodoDePago = prompt("¿contado o cuotas?");
    if (metodoDePago === "contado"){
        alert("El monto a abonar será de $260.000");
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
}
let Monto = prompt("¿Cuanto esta dispuesto a invertir en su estetica? (45000, 70000, 80000, 220000 o 260000)");

let Filtrado = Catalogo.filter ((item) => item.Precio <= Monto)
const accesible = [];
accesible.join();
let encontrados = Filtrado.forEach((item) => {
    accesible.push(item.Modelo);
});

if (Monto >= 260000 ){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
    Catalogo.includes(`${Eleccion}`)
    if (Eleccion == "Nike stefan janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion == "Air force 1"){
        FuncionAirForce1();
    }else if (Eleccion == "Air max 90"){
        FuncionAirMax90();
    }else if (Eleccion == "Jordan 1"){
        FuncionJordan1();
    }else if (Eleccion == "Jordan 5"){
        FuncionJordan5();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 220000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
    Catalogo.includes(`${Eleccion}`)
    if (Eleccion == "Nike stefan janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion == "Air force 1"){
        FuncionAirForce1();
    }else if (Eleccion == "Air max 90"){
        FuncionAirMax90();
    }else if (Eleccion == "Jordan 1"){
        FuncionJordan1();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 80000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
    Catalogo.includes(`${Eleccion}`)
    if (Eleccion == "Nike stefan janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion == "Air force 1"){
        FuncionAirForce1();
    }else if (Eleccion == "Air max 90"){
        FuncionAirMax90();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 70000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
    Catalogo.includes(`${Eleccion}`)
    if (Eleccion == "Nike stefan janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion == "Air force 1"){
        FuncionAirForce1();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 45000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: ${accesible}.
¿Cual le gustaria llevar?`);
    if (Eleccion == "Nike stefan janoski"){
        Catalogo.includes(`${Eleccion}`)
        FuncionStefanJanoski();
    }else{
        alert("Debe ingresar un modelo")
    }
}else{
    alert(`Lo sentimos, con ${Monto} pesos no tenemos disponibilidad de ningun producto.`);
};

const carrito = []

let agregar = prompt(`Que articulo quiere agregar? ${accesible}`)
if(accesible.find ((item) => item.Modelo === agregar)){
    carrito.push(agregar)
    alert(`Tu carrito de ${carrito}, cuesta`)
};

let cupon = Math.round(Math.random()* 100 + 200);
let cuponIngresado = prompt(`Felicidades, por ser su primer compra le regalamos un cupon del 10% OFF. INGRESE OG${cupon}`)

let costoTotal = (carrito.Precio - 0.10);

if(cuponIngresado === `OG${cupon}`){
    alert(`El total a abonar sera de ${costoTotal}`)
};

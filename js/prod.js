let boton = document.getElementById("boton1");
function finalizarProceso(){
InteraccionP.addEventListener("click", () => {
    localStorage.setItem("compra", JSON.stringify(carrito));
    console.log(carrito);
    opciones.innerText = `Graciass, DE REGALO por su primera compra obtiene un cupon del 10%, guardelo "${cuponGenerado}"`
    boton.remove();
    })
}
//Generacion de cupon de descuento
let cuponGenerado = `OG${(Math.round(Math.random()* 100 + 200))}`;
localStorage.setItem("OG", cuponGenerado);

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
//declaracion de Monto y filtrado de catalogo para opciones disponibles
let cartera = document.getElementById("cartera");
cartera.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let Monto = inputs[0].value;
    sessionStorage.setItem("Monto", Monto);
    //Filtrado y definicion de articulos en base al monto disponible 
    let Filtrado = Catalogo.filter ((item) => item.Precio <= Monto);
    const accesible = Filtrado.map((elemento) => elemento.Modelo);
    sessionStorage.setItem("accesible", accesible);
    let opciones = document.getElementById("opciones");
    //operador ternario en caso de que el monto sea menor al minimo
    Monto<45000?opciones.innerText="Lo siento, no contamos con ninguna unidad de ese monto":opciones.innerText = `Con $${Monto} a dispocisión, tenemos para ofrecerte: ${accesible}`;
    boton.scrollIntoView({behavior:'smooth'});
});
//traemos el formulario de los productos
let InteraccionP = document.getElementById("InteraccionP");
//Eleccion de articulo del catalogo
InteraccionP.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let modeloSelected = (inputs[1].value).toUpperCase();
    const modeloCompleto = Catalogo.filter((item) => item.Modelo === modeloSelected); 
    localStorage.setItem("modeloSelected", JSON.stringify(modeloCompleto));
    
    //Condicion para verificar la existencia del articulo
    if (!Catalogo.some((Item) => Item.Modelo === modeloSelected)){
        let accesible = sessionStorage.getItem("accesible");
        opciones.innerText =`Deposite alguna de las opciones anteriores (${accesible})`;
    }else{
        //Al encontrar el producto se dan las opciones de pago
        let precioContado = (Catalogo.find(item => item.Modelo === modeloSelected).Precio)
        opciones.innerText = `Para el pago de ${modeloSelected} tenemos las opciones de CONTADO o CUOTAS, ¿Que prefiere?`;
        InteraccionP.addEventListener("submit", (e) => {
            e.preventDefault;
            let IM = document.getElementById("IM");
            let metodoDePago = (IM.value).toUpperCase();
            //calculo de cuotas.
            const cuotas = []
            for (let c = 2; c <= 6; c++){
                if (c === 3){
                    continue;
                }
                if (c === 5){
                    continue;
                }
                let calculoCuotas = ((precioContado / 2) + (precioContado * 0.21) / c);
                respuestaCuotas = `${c} de $${calculoCuotas}`;
                cuotas.push(respuestaCuotas);
            };
            //eleccion entre CUOTAS o CONTADO.
            if (metodoDePago === "CUOTAS"){
                opciones.innerText = `Las opciones son ${cuotas}.
                Presione el boton para añadir al carrito.`;
                IM.remove();
                finalizarProceso();
                carrito.push(modeloCompleto[0]);
            }else if (metodoDePago === "CONTADO"){
                opciones.innerText = `El valor de la unidad es de $${precioContado}.
                Presione el boton para añadir al carrito`;
                IM.remove();
                finalizarProceso();
                carrito.push(modeloCompleto[0]);
            }else{
            opciones.innerText = "Seleccione algun metodo de pago";
        };
    });
}
});

let PrecioST = 45000;
let PrecioAF = 70000;
let PrecioAM = 80000;
let PrecioJ1 = 220000;
let PrecioJ5 = 260000;
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
            let cuota = ((PrecioST / 2) + 20500 / c);
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
            let cuota = ((PrecioAF / 2) + 35000 / c);
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
            let cuota = ((PrecioAM / 2) + 40000 / c);
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
            let cuota = ((PrecioJ1 / 2) + 110000 / c);
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
            let cuota = ((PrecioJ5 / 2) + 130000 / c);
            alert("las opciones son " + c + " de " + cuota);
        }
    }else{
        alert("Elija una opcion de las anteriores");
    }
}
let Monto = prompt("¿Cuanto esta dispuesto a invertir en su estetica? (45000, 70000, 80000, 220000 o 260000)");
if (Monto >= 260000 ){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: Nike stefan janoski, Air force 1, Air max 90, Jordan 1 o Jordan 5.
    ¿Cual le gustaria llevar?`);
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
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad del catalogo: Nike Stefan Janoski, Air force 1, Air max 90 o Jordan 1.
    ¿Cual le gustaria llevar?`);
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
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad del catalogo: Nike stefan janoski, Air force 1 o Air max 90.
    ¿Cual le gustaria llevar?`);
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
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, tiene disponibilidad de todo el catalogo: Nike stefan janoski o Air force 1.
    ¿Cual le gustaria llevar?`)
    if (Eleccion == "Nike stefan janoski"){
        FuncionStefanJanoski();
    }else if (Eleccion == "Air force 1"){
        FuncionAirForce1();
    }else{
        alert("Debe ingresar un modelo")
    }
}else if(Monto >= 45000){
    let Eleccion = prompt(`Si cuenta con ${Monto} pesos, solo tiene alcance para las Nike stefan janoski. (ingrese "ok")`)
    if (Eleccion == "ok"){
        FuncionStefanJanoski();
    }else{
        alert("Debe ingresar un modelo")
    }
}else{
    alert(`Lo sentimos, con ${Monto} pesos no tenemos disponibilidad de ningun producto.`);
}
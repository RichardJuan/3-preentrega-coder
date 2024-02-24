
let Formulario = document.getElementById("Formulario")//traemos el formulario al JS.
Formulario.addEventListener("submit", (e) => { //Aca le damos funcion al formulario del inicio.
    e.preventDefault();
    let inputs = e.target.children; //aclaramos al input como objetivo y lo dividimos por posiciones.
    let Nombre = inputs[0].value;
    /////let Nacimiento = inputs[1].value;
    
    sessionStorage.setItem("Nombre", Nombre); //cargamos el Nombre al SessionStorage.
    
    const años = Swal.fire({ //utilizamos un sweet alert para averiguar la edad del cliente.
        title: "¿Cuántos años tienes?",
        icon: "question",
        input: "range",
        inputLabel: "Selecciona tu edad",
        inputAttributes: {
            min: "8",
            max: "120",
            step: "1"
        },
        inputValue: 25
    }).then((resultado) => { //a la respuesta le ejecutamos una función que determinara si tiene la edad requerida para ingresar a la pagina.
        if (resultado.value >= 16) {
            Swal.fire({ //sweet alert para dar el OK.
                title: "Puedes pasar",
                text: "Ingrese a productos para ver nuestro catalogo",
                icon: "success",
            })
        } else {
            Swal.fire({ //Sweet alert para advertir.
                title: "Te recomendamos venir cuando cumplas los 16 años",
                icon: "warning",
            })
        }
    }).catch((error) => {
        console.log(error);
    });
});

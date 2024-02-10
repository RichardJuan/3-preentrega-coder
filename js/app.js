let Formulario = document.getElementById("Formulario")
//Aca le damos funcion al formulario del inicio
Formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children; //aclaramos al input como objetivo y lo dividimos por posiciones.
    let Nombre = inputs[0].value;
    let Nacimiento = inputs[1].value;
    
    sessionStorage.setItem("Nombre", Nombre); //cargamos el Nombre al SessionStorage.

    sessionStorage.setItem("fechaDeNacimiento", Nacimiento); //Lo mismo con la fecha de nacimiento.

    //traemos la fecha de nacimiento del formulario
    const fechaDeNacimiento = new Date (Nacimiento);

    //declaramos la fecha de hoy
    const hoy = Date.now();
    const miliSegundosXAño = 31536000000;
    const edad = Math.floor((hoy - fechaDeNacimiento) / miliSegundosXAño) //dividimos la dif entre la fecha actual y el nacimiento por la camtidad de milisegundos por año y redondeamos hacia el numero entero mas bajo 
    
    //condicion?respuesta:respuestalternativa
    let respuesta = document.getElementById("respuesta");
    
    edad >= 16?respuesta.innerText = `Bienvenido ${Nombre}, ingresa a "Productos" para que veas lo que tenemos para ofrecerte`: respuesta.innerText = "Recomenamos que seas mayor de 16 años para ingresar a nuestra pagina. Buena suerte, nos vemos pronto";
});


let Nombre = sessionStorage.getItem("Nombre")
let formCarrito = document.getElementById("formCarrito");
let compra = document.getElementById("compra");
let valor = document.getElementById("valor");
let cupon = document.getElementById("cupon");
let valorTotal = document.getElementById("valorTotal");


let articuloCompra = JSON.parse(localStorage.getItem("compra"));

console.log(articuloCompra)
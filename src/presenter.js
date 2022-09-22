import Auto from "./sumador.js";

let cad = document.querySelector("#cadena");
const button = document.querySelector("#addButton");

const res = document.querySelector("#resultado");

let auto

button.addEventListener("click", (event) => {
  event.preventDefault();
  auto = new Auto();
  let respuesta = auto.mover(cad.value)
  res.innerHTML = "<p>" + respuesta + "</p>" 
});
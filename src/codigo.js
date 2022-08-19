let boton = document.querySelector("#botonEnvio");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let producto = document.getElementById("producto");
let consulta = document.getElementById("consulta");

function verificarVacios(entrada) {
  if (
    entrada !== "" &&
    entrada.length >= 3 &&
    entrada.length <= 20 &&
    typeof entrada !== "undefined"
  ) {
    console.log("ok");
  } else console.log("ingresar de nuevo");
}

//console.log(nombre)
boton.addEventListener("click", () => {
  nombre = String(nombre.value);
  apellido = String(apellido.value);
  correo = String(correo.value);
  producto = String(producto.value);
  consulta = String(consulta.value);
  verificarVacios(nombre);
  verificarVacios(apellido);
  verificarVacios(correo);
  verificarVacios(producto);
  verificarVacios(consulta);
  console.log(nombre);
});

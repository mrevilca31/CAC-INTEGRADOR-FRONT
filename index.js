const PRECIO_TICKET = 300;

const cantidad = document.getElementById("cantidadTickets");
const total = document.getElementById("precioTotal");
const categoria = document.getElementById("select-categoria");
const nombre = document.getElementById("input-nombre");
const email = document.getElementById("input-email");
const btnComprar = document.getElementById("btn-comprar");
const emailContacto = document.getElementById("email-contacto");
const nombreContacto = document.getElementById("nombre-contacto");
const btnContacto = document.getElementById("btn-enviar-contacto");

cantidad.addEventListener("input", actualizarPrecio);
categoria.addEventListener("change", actualizarPrecio);
btnComprar.addEventListener("click", comprarTickets);
btnContacto.addEventListener("click", enviarContacto);

function actualizarPrecio() {
  const categoriaSeleccionada = categoria.value;

  if (cantidad.value <= 0) {
    cantidad.value = 0;
  }

  switch (categoriaSeleccionada) {
    case "0":
      total.textContent = cantidad.value * PRECIO_TICKET;
      break;
    case "1":
      total.textContent = cantidad.value * PRECIO_TICKET * 0.5;
      break;
    case "2":
      total.textContent = cantidad.value * PRECIO_TICKET * 0.6;
      break;
    case "3":
      total.textContent = cantidad.value * PRECIO_TICKET * 0.7;
      break;
    default:
      break;
  }
}

function esEmailValido(text) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(text);
}

function comprarTickets() {
  event.preventDefault();
  // Verificar si los inputs están vacíos o son inválidos
  if (
    nombre.value === "" ||
    email.value === "" ||
    !esEmailValido(email.value)
  ) {
    alert("Por favor, ingrese un nombre y un correo electrónico válidos.");
    return;
  }

  if (cantidad.value < 1) {
    alert("Por favor indique una cantidad de tickets.");
    return;
  }

  alert(
    `Gracias por tu compra ${nombre.value}. \nEn breve enviaremos los tickets a la siguiente dirección: ${email.value}`
  );

  nombre.value = "";
  email.value = "";
  categoria.value = "0";
  cantidad.value = "";
}

function enviarContacto() {
  event.preventDefault();
  // Verificar si los inputs están vacíos o son inválidos
  if (
    nombreContacto.value === "" ||
    emailContacto.value === "" ||
    !esEmailValido(emailContacto.value)
  ) {
    alert("Por favor, ingrese un nombre y un correo electrónico válidos.");
    return;
  }

  alert(
    `Hola ${nombreContacto.value}!! \nEn breve nos contacteremos con vos al siguiente correo: ${emailContacto.value}`
  );
  nombreContacto.value = "";
  emailContacto.value = "";
}

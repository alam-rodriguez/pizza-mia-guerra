document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "8293198834";

  let cliente = document.querySelector("#nombreYApellido").value;
  let numero = document.querySelector("#numero").value;
  let tamaño = document.querySelector("#tamañoPizza").value;
  let ingrediente = document.querySelector("#ingredientePizza").value;
  let ubicacion = document.querySelector("#ubicacion").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_MI NEGOCIO_*%0A
		*Reservas*%0A%0A
		*nombre de cliente:*%0A
		${cliente}%0A
		*numero de cliente:*%0A
		${numero}%0A
		*tamaño de pizza*%0A
		${tamaño}%0A
		*ingrediente de pizza:*%0A
		${ingrediente}%0A
		*ubicacion del cliente:*%0A
		${ubicacion}`;

  if (cliente === "" || numero === "" || tamaño === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
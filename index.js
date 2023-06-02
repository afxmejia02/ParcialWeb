

 function mostrarTabla() {
    document.getElementById('gatosRow').style.display = 'table-row';
    document.getElementById('perrosRow').style.display = 'table-row';

    var inputs = document.getElementsByClassName("editable");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    if (filaEnEdicion) {
        alert("Solo se puede editar una línea. Recargue la página para poder editar otra.");
    } else {
        // Código para mostrar la tabla
        document.getElementById("gatosRow").style.display = "table-row";
        document.getElementById("perrosRow").style.display = "table-row";
    }
  }

  function recargarPagina(){
    location.reload();
  }

  function habilitarEdicion(spanElement) {
    var inputElement = spanElement.parentNode.previousElementSibling.firstChild;

    inputElement.disabled = false;
    spanElement.innerHTML = "En edicion";
    spanElement.style.color = "gray";


    inputElement.classList.add("resaltar-input");


    inputElement.focus();

    var inputs = document.getElementsByTagName("input");
    var botonesCambios = document.getElementById("botonesCambios");
  
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
  
    botonesCambios.style.display = "block";


}

function aceptarCambios() {
    filaEnEdicion = false;

    document.getElementById("botonesCambios").style.display = "none";
    
    document.getElementById("gatos").disabled = true;
    document.getElementById("perros").disabled = true;
}

function enviarFormulario() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var gusto = document.getElementById("gustos").value;
    var gatos = document.getElementById("gatos").value;
    var perros = document.getElementById("perros").value;
    var porcentaje;

  if(perros>gatos){
    porcentaje = perros;
  }
  else if(perros= gatos){
  porcentaje = 50;
  }
  else{
  porcentaje=gatos;
  }
  
    // Construir la URL de destino con los valores
    var urlDestino =
      "get.html?" +
      "nombre=" +
      encodeURIComponent(nombre) +
      "&email=" +
      encodeURIComponent(email) +
      "&telefono=" +
      encodeURIComponent(telefono) +
      "&gusto=" +
      encodeURIComponent(gusto) +
      "&porc="; 
  
   
    window.location.href = urlDestino;
  }

  

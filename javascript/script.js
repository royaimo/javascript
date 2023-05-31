// alert("hola mundo")

function calPrecioFinal(){
    // cantidad de entradas que compran
    let canEnt = document.getElementById("cantidadEntradas").value;

    // descuento realizado segun el tipo de comprador(particular, estudiante, etc)
    let porcDescuento = document.getElementById("porcDescuento").value;

    // descuento a realizar sobre las entradas compradas
    let descuento = (canEnt*200)*porcDescuento/100;

    // precio total de las entradas con el descuento realizado
    let precioTotal = (canEnt*200)-descuento;

    // modificamos el html para sacar el precio total por pantalla
    document.getElementById("valorTotal").value=precioTotal;
}

function enviarFormulario() {
    var cantEntradas = document.getElementById("cantidadEntradas").value;
    var descuento = document.getElementById("porcDescuento").value;
    var precioTotal = document.getElementById("valorTotal").value;

    // Crear objeto FormData y agregar los datos
    var formData = new FormData();
    formData.append("cantEntradas",cantEntradas)
    formData.append("descuento",descuento);
    formData.append("precioTotal",precioTotal);
    // Crear un elemento <a> para abrir la nueva página con el resumen
    var link = document.createElement("a");
    link.href = "compraRealizada.html";
    link.target = "_blank";

    //Agregar un objeto FormData como parámetro de la URL
    var urlParams = new URLSearchParams(formData);
    link.href += "?" + urlParams.toString();

     // Hacer clic en el enlace para abrir la nueva página
     link.click();
  }




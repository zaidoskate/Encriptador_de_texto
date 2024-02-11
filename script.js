// OCULTAR ELEMENTOS

function ocultarImagenBoy() {
    document.getElementById("boyImage").style.display = "none";  // Cambiado a "display: none" para ocultar completamente
  }
  
  function ocultarHeading() {
    document.getElementById("headingResultado").style.display = "none";
  }
  
  function ocultarP() {
    document.getElementById("pResultado").style.display = "none";
  }

  //VALIDAR CARACTERES ESPECIALES
  function validarTexto(texto) {
    const regex = /[^a-z0-9 ]/gi;
    return !regex.test(texto);
  }

  //ASIGNAR TEXTO TEXTAREA RESULTADO
  function asignarTextoResultado(texto) {
    const textAreaResultado = document.getElementById("texto-resultado");
    textAreaResultado.value = texto;
  }

  //OBTENER TEXTAREA PRINCIPAL
  function getTextArea(){
    return document.getElementById("texto-encriptar");
  }

  //REESTABLECER MENU
  function reestablecerMenu(){
    ocultarHeading();
    ocultarImagenBoy();
    ocultarP();
    copiadoButton('Copiar');
  }

  // ENCRIPTAMIENTO
  function encriptar() {
    const textArea = getTextArea();
    let entrada = textArea.value.toLowerCase();
    if(entrada != ""){
      if (validarTexto(entrada)) {
        entrada = entrada.replace(/e/gi, "enter")
                          .replace(/i/gi, "imes")
                          .replace(/a/gi, "ai")
                          .replace(/o/gi, "ober")
                          .replace(/u/gi, "ufat");
        reestablecerMenu();
        asignarTextoResultado(entrada);
      } else {
          asignarTextoResultado("Error! Revisa tu texto tiene algunos caracteres especiales :(");
      }
    }
 }

 //DESENCRIPTAMIENTO
 function desencriptar() {
    const textArea = getTextArea();
    let entrada = textArea.value.toLowerCase();
    if(entrada != ""){
      if(validarTexto(entrada)) {
          entrada = entrada.replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
          reestablecerMenu();
          asignarTextoResultado(entrada);
      } else {
          asignarTextoResultado("Error, ¡revisa tu texto! tiene algunos caracteres especiales :(");
      }
    }
 }
  
 //CAMBIAR TEXTO BOTON COPIAR
 function copiadoButton(texto){
    const button = document.getElementById("copiar");
    button.textContent = `${texto}`;
 }
 //COPIA AL CLIPBOARD
 function copiarAlPortapapeles(){
    const textArea = document.getElementById("texto-resultado");
    const salida =  textArea.value;
    navigator.clipboard.writeText(salida);
    if(textArea.value  !== ""){
      copiadoButton('¡Copiado!');
    }

 }
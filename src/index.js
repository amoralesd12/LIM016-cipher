window.onload = () => {

    /*activado y desactivado de los enlaces de cada pestaña*/
  
    const linkActivar = document.getElementById("link-codificar");
    const linkDesactivar = document.getElementById("link-decodificar");
  
    linkActivar.addEventListener("click", function() {
        document.getElementById("link-codificar").classList.add("link_activar");
        document.getElementById("link-decodificar").classList.remove("link_activar");
        document.getElementById("contenedorMensajeCodificar").classList.remove("display_none");
        document.getElementById("contenedorMensajeCodificar").classList.add("display_block");
        document.getElementById("contenedorMensajeDecodificar").classList.remove("display_block");
        document.getElementById("contenedorMensajeDecodificar").classList.add("display_none");
    });
  
    linkDesactivar.addEventListener("click", function() {
       document.getElementById("link-codificar").classList.remove("link_activar");
       document.getElementById("link-decodificar").classList.add("link_activar");
       document.getElementById("contenedorMensajeDecodificar").classList.remove("display_none");
       document.getElementById("contenedorMensajeDecodificar").classList.add("display_block");
       document.getElementById("contenedorMensajeCodificar").classList.remove("display_block");
       document.getElementById("contenedorMensajeCodificar").classList.add("display_none");
   });
  
   /*rescatando el valor del texto a codificar */
  
      const botonTextoCodificar = document.getElementById("botonCodificado");
      botonTextoCodificar.addEventListener("click", function() {
          let textoCodificar = document.getElementById("cajaMensajeCodificar").value;
          // textoCodificar = textoCodificar.toUpperCase();
          let numero_offset = document.getElementById("numeroDeOffset_c").value;
          document.getElementById("mensajeCodificarChequear").innerHTML = window.cipher.encode(textoCodificar, numero_offset);
      });
  
      /*rescatando el valor del texto a decodificar*/
  
       const botonTextoDecodificar = document.getElementById("botonDecodificado");
       botonTextoDecodificar.addEventListener("click", function() {
          let textoDecodificar = document.getElementById("cajaMensajeDecodificar").value;
          //textoDecodificar = textoDecodificar.toUpperCase();
          let numero_offset = document.getElementById("numeroDeOffset_d").value;
          document.getElementById("mensajeDecodificarChequear").innerHTML = window.cipher.decode(textoDecodificar, numero_offset);
   })
  
    /*copiar mensaje Decodificado*/
     var boton = document.getElementById("copiador2");
     boton.addEventListener("click", copiarAlPortapapeles, false);
      function copiarAlPortapapeles() {
       var enlace = document.getElementById("mensajeDecodificarChequear");
       var inputFalso = document.createElement("input");
       inputFalso.setAttribute("value", enlace.innerHTML);
      document.body.appendChild(inputFalso);
      inputFalso.select();
     document.execCommand("copy");
     document.body.removeChild(inputFalso);
     alert("Mensaje Copiado!");
   }
  
  
  
  
  }
  
  

let botonCopiar = document.querySelector('.boton-copiar-invisible'); 
let avisoTextoCopiado = document.querySelector('.aviso-texto-copiado-invisible'); 
let clase1 = 'aviso-texto-copiado-invisible'; 
let clase2 = 'aviso-texto-copiado-visible'; 

botonCopiar.addEventListener('click', function (event) {
    event.preventDefault();
    let codigoACopiar = document.querySelector('.texto-salida');
    copiarAlPortapapeles(codigoACopiar); //copiar
    aparecerDesaparecerAviso(clase1, clase2); //aviso de texto copiado
    setTimeout(function () { 
        avisoTextoCopiado.classList.replace(clase2, clase1);
    }, 1300);
    
});

function aparecerDesaparecerAviso(clase1, clase2) { //visibilizar u ocultar el aviso de texto copiado
  avisoTextoCopiado.classList.replace(clase1, clase2);
}

//Declaracion de Variables
const buttonEncriptar = document.querySelector('.buttonEncriptar');
const buttonDesencriptar = document.querySelector('.buttonDesencriptar');
const buttonCopiar = document.getElementById("mostrarButtonId");
const mostrarMensaje = document.getElementById("mostrarMensaje");
const msj = document.getElementById("msj");


//captura de eventos

buttonEncriptar.addEventListener("click", ()=> {
    
    encriptar();
     
    
});

buttonDesencriptar.addEventListener("click", ()=>{
    desencriptar();
});

buttonCopiar.addEventListener("click", ()=>{
    copiarMensaje();
});



//Validacion y funcion encriptar

function encriptar() {
    
    const texto = document.getElementById("textarea").value;

    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóú']/.test(texto) || (/[0-9]/.test(texto)) ||
        (/[A-Z]/.test(texto))) {

        alert("Solo Puede Ingresar Letras Minusculas");

    } else {

        let textoSinEncriptado = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

        //document.getElementById("msj").innerHTML = textoSinEncriptado;
        document.getElementById("msj").textContent = textoSinEncriptado;
        mostrarMensaje.style.display = "block";
        buttonCopiar.style.display = "block";
        msj.style.display = "block";
       
    }
}

//validacion y funcion desencriptar
function desencriptar() {

    const texto = document.getElementById("textarea").value;
    
    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóú']/.test(texto) || (/[0-9]/.test(texto)) || (/[A-Z]/.test(texto))) {

        alert("Solo Puede Ingresar Letras Minusculas");

    } else {

        let textoEncriptado = texto
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        //document.getElementById("msj").innerHTML = textoEncriptado;
        document.getElementById("msj").textContent = textoEncriptado;
        mostrarMensaje.style.display = "block";
        buttonCopiar.style.display = "block";
        

    }
}

//funcion de boton copiar
function copiarMensaje() {
    var textoCopiado = document.getElementById("msj");
    navigator.clipboard.writeText(textoCopiado.value);
}





function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value="";
    document.getElementById('prueba').style.display = 'none';
    var andalaosa = document.getElementById('andalaosa');
    andalaosa.className = 'salida_show';
}
   
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value="";
    document.getElementById('prueba').style.display = 'none';
    var andalaosa = document.getElementById('andalaosa');
    andalaosa.className = 'salida_show';
}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copiarResultado() {
    var copyText = document.getElementById("msg").value;
    navigator.clipboard.writeText(copyText).then(() => { } );  
}

var boton3 = document.querySelector("#btn-copy"); boton3.onclick = copiarResultado;

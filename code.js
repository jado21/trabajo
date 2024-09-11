function encriptar(){
    let texto= document.getElementById("area_texto").value;
   /* let titulo_mensaje= document.getElementById("titulo_mensaje");

    let deadpool= document.getElementById("deadpool");
*/
    let texto_cifrado = texto
                        /*Al momento de poner hola --> me traducia a hoberlaimes porque el primero estaba la a antes que la i
                         entonces puede ser que esto trabaje como un bucle */
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");


    if(document.getElementById("area_texto").value.length != 0){
        document.getElementById("area_texto").value = texto_cifrado;
        document.getElementById("titulo_mensaje").textContent="Bien hecho, se encripto";
        document.getElementById("deadpool").src = "./image/deadpool_feliz.png";
    }

    else{
        deadpool.src = "./image/deadpool_texto.png";
        document.getElementById("titulo_mensaje").textContent= "No hay texto";
        alert("Ya te dije, que no hay texto");
    }
}

function desencriptar(){
    let texto= document.getElementById("area_texto").value;

    let texto_cifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(document.getElementById("area_texto").value.length != 0){
            document.getElementById("area_texto").value = texto_cifrado;
            document.getElementById("titulo_mensaje").textContent="Bien hecho, se desencripto";
            document.getElementById("deadpool").src = "./image/deadpool_feliz.png";
        }
    
        else{
            deadpool.src = "./image/deadpool_texto.png";
            document.getElementById("titulo_mensaje").textContent= "No hay texto";
            alert("Ya te dije, que no hay texto");
        }


}

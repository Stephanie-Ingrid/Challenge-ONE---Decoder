const textArea = document.querySelector(".text-area");
const menssagem = document.querySelector(".menssagem");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    menssagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["a" , "al"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    menssagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["a" , "al"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(textoResultado.innerText);
    
    document.querySelector("#texto__copiado").style.display = "block";

    setTimeout(() => {
        document.querySelector("#texto__copiado").style.display = "none";
    }, 1500);
};


document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btn-copiar") copiarTexto();
});

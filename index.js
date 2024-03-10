
const input = document.getElementById("texto")

function convertirTexto() {
    let texto = input.value;

    texto = texto.toUpperCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    input.value = texto;
}

let valorEncriptado = ''
let valorDesencriptado = ""

function encriptar() {
    valorEncriptado = ""
    let cadena = input.value
    for (let i = 0; i < cadena.length; i++) {
        let caracter = '';
        if (cadena[i] === 'A'){
            caracter = 'AI';
        }else if(cadena[i] === 'E'){
            caracter = 'ENTER';    
        }else if(cadena[i] === 'I'){
            caracter = 'IMES';    
        }
        else if(cadena[i] === 'O'){
            caracter = 'OBER';    
        }
        else if(cadena[i] === 'U'){
            caracter = 'UFAT';    
        }else caracter = cadena[i];
        valorEncriptado = valorEncriptado + caracter;
        }
        console.log("valorEncriptado", valorEncriptado)
        const resultadoContenedor = document.getElementById("resultado-contenedor")
        resultadoContenedor.classList.remove("centrado")
        const imagen = document.getElementById("imagen-resultado")
        imagen.classList.add("hide")
        const contenedor = document.getElementById("contenedor-resultado")
        contenedor.classList.add("hide")
        const contenedorCopiar = document.getElementById("contenedor-copiar")
        contenedorCopiar.classList.remove("hide")
        const resultado = document.getElementById("resultado")
        resultado.innerHTML = valorEncriptado
}

function desencriptar() {
    valorDesencriptado = valorEncriptado.replaceAll("AI", "A").replaceAll("ENTER", "E").replaceAll("IMES", "I").replaceAll("OBER", "O").replaceAll("UFAT", "U")
    console.log("valorDesencriptado", valorDesencriptado)
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = valorDesencriptado
}

function copiarTexto() {
    const resultado = document.getElementById("resultado")
    navigator.clipboard.writeText(resultado.textContent)
}
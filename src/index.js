import cipher from './cipher.js';



function textoMaiusculo(event){
    const texto = event.target.value
    event.target.value
    event.target.value = texto.toUpper.case();
}

function cifrar(){
    const textoCifrar= document.querySelector("#TextoParaCriptografar").value;
    const resultado = cipher.encode(textoCifrar, 5);
    document.querySelector("#TextoCriptografado").innerText = resultado;
};

const inputCifrar = document.querySelector("#cifrar");
inputCifrar.addEventListener("click",cifrar);

function decifrar(){
    const textoCifrado= document.querySelector("#TextoParaDescriptografar").value;
    const traduz = cipher.decode(textoCifrado, 5);
    document.querySelector("#TextoDescriptografado").innerText = traduz;
};
const inputDecifrar = document.querySelector("#decifrar");
inputDecifrar.addEventListener("click",decifrar);
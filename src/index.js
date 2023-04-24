import cipher from './cipher.js';


function cifrar(){
  const textoCifrar= document.querySelector("#TextoParaCriptografar").value.trim();
  const offset = document.querySelector("#deslocamento").value;
  const resultado = cipher.encode(parseInt(offset ), textoCifrar);
  document.querySelector("#TextoCriptografado").innerText = resultado;
}

const inputCifrar = document.querySelector("#cifrar");
inputCifrar.addEventListener("click",cifrar);


 function textoMaiusculo(event) {
  const texto = event.target.value
  event.target.value = texto.toUpperCase();
}
 

document.querySelector("#TextoParaCriptografar").addEventListener("input", textoMaiusculo);


function decifrar(){
  const textoCifrado= document.querySelector("#TextoParaDescriptografar").value.trim();
  const offset = document.querySelector("#deslocamento2").value;
  const traduz = cipher.decode(parseInt(offset ), textoCifrado);
  document.querySelector("#TextoDescriptografado").innerText = traduz;
}
const inputDecifrar = document.querySelector("#decifrar");
inputDecifrar.addEventListener("click",decifrar);

document.querySelector("#TextoParaDescriptografar").addEventListener("input", textoMaiusculo);

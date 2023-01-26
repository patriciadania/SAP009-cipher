import cipher from './cipher.js';


function cifrar(){
  const textoCifrar= document.querySelector("#TextoParaCriptografar").value;
  const resultado = cipher.encode(textoCifrar, 3);
  document.querySelector("#TextoCriptografado").innerText = resultado;
}

const inputCifrar = document.querySelector("#cifrar");
inputCifrar.addEventListener("click",cifrar);

function decifrar(){
  const textoCifrado= document.querySelector("#TextoParaDescriptografar").value;
  const traduz = cipher.decode(textoCifrado, 3);
  document.querySelector("#TextoDescriptografado").innerText = traduz;
}
const inputDecifrar = document.querySelector("#decifrar");
inputDecifrar.addEventListener("click",decifrar);
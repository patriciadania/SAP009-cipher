 
const cipher = {encode, decode};

function encode(offset, textoCifrar){
  let mensagem = "";
  if(typeof textoCifrar !== "string" || typeof offset !=="number"){
    throw new TypeError 
  }
  for (let i = 0; i < textoCifrar.length; i++){
    const executa = ((textoCifrar.charCodeAt(i) -65 + offset) % 26) +65;
    mensagem += String.fromCharCode(executa);
  }
  return mensagem;
}


function decode(offset, textoCifrado){
  let mensagem1 = "";
  if(typeof textoCifrado !== "string" || typeof offset !== "number"){
    throw new TypeError 
  }
  for (let i = 0; i < textoCifrado.length; i++){
    const executar = ((textoCifrado.charCodeAt(i) -90 - offset) % 26) +90;
    mensagem1 += String.fromCharCode(executar);
  }
  return mensagem1;
}

export default cipher;




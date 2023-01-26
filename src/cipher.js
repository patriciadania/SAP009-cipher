
 
const cipher = {encode, decode};

function encode(textoCifrar, offset){
  let mensagem = "";
  for (let i =0; i < textoCifrar.length;i++){
    let executa = ((textoCifrar.charCodeAt(i) -32 + offset) % 254) +32;

    mensagem += String.fromCharCode(executa);

  }
  return mensagem;
}
function decode(textoCifrado, offset){
  let mensagem = "";
  for (let i =0; i < textoCifrado.length;i++){
    let executa = ((textoCifrado.charCodeAt(i) -32 - offset) % 254) +32;
    mensagem += String.fromCharCode(executa);
  
  }
  return mensagem;
}
  

export default cipher;
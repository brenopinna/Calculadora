const textoVisor = document.querySelector('.texto-visor');
const botoes = document.querySelectorAll('.botoes button');

const simbolos = ['/','*','-','+','.'];

botoes.forEach(botao => {
   botao.addEventListener('click', () => {
      let value = botao.innerHTML;
   
      if(botao.hasAttribute('nao-digitavel')){
         if(value == 'C'){
            apagaTudo();
         }else if(value == "Back"){
            if(textoVisor.innerHTML != 'ERRO!'){
               apagaUltimo();
            }
         }else if(value == '='){
            resultado()
         }
      }else{
         if(textoVisor.innerHTML != 'ERRO!'){
            escreve(value)
         }
      }
   });
});

function escreve(value){
   const isNumber = !isNaN(value);
   const isSymbol = simbolo(value);
   const lastCharacter = textoVisor.innerHTML.charAt(textoVisor.innerHTML.length - 1)

   if(isNumber){
      textoVisor.innerHTML == 0 ?
      textoVisor.innerHTML = value :
      textoVisor.innerHTML += value;
   }else if(isSymbol){
      if(!simbolo(lastCharacter)){
         textoVisor.innerHTML += value;
      }
   }

   function simbolo(character){
      return simbolos.includes(character);
   }
}

function apagaTudo(){
   textoVisor.innerHTML = 0;
}

function apagaUltimo(){
   textoVisor.innerHTML = textoVisor.innerHTML.substring(0, textoVisor.innerHTML.length - 1);
   if(textoVisor.innerHTML.length == 0){
      textoVisor.innerHTML = 0;
   };
}

function resultado(){
   try {
      let resultado = eval(textoVisor.innerHTML);
      if(resultado % 1 != 0){
         resultado = parseFloat(resultado.toFixed(2))
      }
      if(typeof(resultado) != 'string'){
         textoVisor.innerHTML = resultado;
      }else{
         textoVisor.innerHTML = "ERRO!"
      }
   } catch {
      textoVisor.innerHTML = "ERRO!"
   }
}

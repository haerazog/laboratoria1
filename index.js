/*import validator from './validator.js';

console.log(validator);*/

//Definir variables
let salida_num = [];
let salida_str = "";

function myFunction(){

  const num_card = document.getElementById("card_num").value;
  salida_num.length = num_card.length;
  salida_num.fill("#");

  for(i=salida_num.length-4; i<salida_num.length; i++){
    salida_num[i]=num_card[i];
  }
  salida_str = salida_num.toString();
  salida_str=salida_str.replace(/,/g,"");

  document.getElementById("respuesta").innerHTML = "Se ha validado la tarjeta número: "+salida_str;
}

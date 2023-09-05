var agora = new Date ()
var hora = agora.getHours ()
console.log (`Agora são exatamente ${hora} horas`)
if (hora <5) {
  console.log (`Boa madrugada`)
}
else if ( hora < 12){
  console.log (`Bom dia`)
} else if (hora < 17){
  console.log (`Boa Tarde`)
} else if (hora <= 23){
  console.log (`Boa noite`)
}
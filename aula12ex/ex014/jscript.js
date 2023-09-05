function carregar (){
  var msg = window.document.getElementById ('msg')
  var img = window.document.getElementById ('imagem')
  var agora = new Date ()
  var hora = agora.getHours ()
  msg.innerHTML =`Agora são exatamente ${hora} horas`
  if (hora < 12) {
    img.src="fotomanhã.jpg"
    document.body.style.background="#FCDC97"
  } else if (hora <= 18){
    img.src="fototarde.jpg"
    document.body.style.background="#ECA57D"
  } else if (hora <= 23){
    img.src="fotonoite.jpg"
    document.body.style.background="#2C5C94"
  }
   else {
    msg.innerHTML=`[ERRO]Hora invalida`
   }
 

}
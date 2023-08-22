function carregar ()  {
  var msg = window.document.getElementById ('msg')
  var img = window.document.getElementById ('imagem')
  var data = new Date ()
  var hora = data.getHours ()
  msg.innerHTML =` Agora são ${hora} horas`
   if (hora >= 0  && hora <=12){
      img.src='fotomanhã.jpg'
   }
   else if (hora >=13 && hora <= 17){
    img.src='fototarde.jpg'
   }  
   else if (hora >=18 && hora <= 23){
    img.src='fotonoite.jpg'
   }
   else {
    msg.innerHTML=`[ERRO] hora incorreta`
    
   }
}
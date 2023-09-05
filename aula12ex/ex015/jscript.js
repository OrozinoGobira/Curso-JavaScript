function verificar (){
  var data = new Date () 
  var ano = data.getFullYear ()
 var fano = window.document.getElementById ('txtano')
 var res = window.document.getElementById ('res')

 if (fano.value.length == 0 || fano.value > ano ){
  alert ('[ERROR] verifica os dados e tenta novamente')
 }
 else {
  var fsex = window.document.getElementsByName ('radsex')
  var idade = ano - Number(fano.value)
  var genero = ''
  var img = document.createElement ('img')
  img.setAttribute ('id', 'foto')
  img.width= 300;
  img.height=300;
  img.style.borderRadius='50%';
  document.body.style.textAlign='center'

  if (fsex[0].checked){
    genero='Homem'
   if (idade < 12) {
   img.setAttribute ('src', 'foto.bebe.m.jpg')
  } else if (idade < 21) {
   img.setAttribute('src','foto.jovem.m.jpg') 
  } else if (idade <= 55){
    img.setAttribute('src', 'foto.adulto.m.jpg')
  } else  {
    img.setAttribute('src', 'foto.idoso.m.jpg')
  }
} if (fsex[1].checked){
  genero='Mulher'
  if (idade <12){
    img.setAttribute('src', 'foto.bebe.f.jpg')
  } else if (idade < 21) {
    img.setAttribute('src', 'foto.jovem.f.jpg')
  } else if (idade < 55){
    img.setAttribute ('src', 'foto.adulto.f.jpg')
  } else {
    img.setAttribute('src' ,'foto.idoso.f.jpg')
  }
}
  res.innerHTML=`É ${genero} com ${idade} anos <br>`
  res.appendChild(img)
 }
}
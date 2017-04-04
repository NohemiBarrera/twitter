var click = 0;
var contadorClicks = document.body;
var newTweet = document.getElementById("tweet");
var publicar = document.getElementById("publicar");
var publicaciones = document.getElementById("publicaciones");
var autor = document.getElementById("autor");
var tuit = document.getElementById("tuit");
  
contadorClicks.addEventListener("click", clicks);
newTweet.addEventListener("keyup", contadorDeCaracteres);
publicar.addEventListener("click", publicarTweet);
 
  
function contadorDeCaracteres(){
  var numeroCaracteres = newTweet.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}
 
function clicks(){
  click++;
  document.getElementById("contadorClicks").innerText = click;
}

function publicarTweet(){
  var articulo = document.createElement("article");
  var parrafo = document.createElement("p");
  var parrafo2 = document.createElement("p");
  parrafo.innerText = newTweet.value;
  parrafo2.innerText = "De: " + autor.value;
  articulo.appendChild(parrafo);
  articulo.appendChild(parrafo2);
  publicaciones.insertBefore(articulo, publicaciones.firstChild);
  newTweet.value = "";
  autor.value ="";
 }
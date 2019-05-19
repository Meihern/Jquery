//  chemin relatif : reponses/script-01.js
// 

var div1 = $('#ce div').eq(0)
// Changer la couleur de la 1ère div
div1.css('color','red')
// Cloner la 1ère div dans la fin
var div1_clone = div1.clone()
$('#ce').append(div1.clone())
// Déplacer la dernière div en tête
var div_last = $('#ce div').eq(-1)
$("#ce").prepend(div_last)
//Ajouter une nouvelle div affichant le nombre d'éléments à la liste
$("#ce").append("<div> Nombre des divs : "+$("#ce div").length+"</div>")
//Ajouter l'ordre de chaque div avant chaque div
$('#ce div').each((i,e) => 
{ 
var div_content = i+1+" "+$(e).text()
$(e).text(div_content) })



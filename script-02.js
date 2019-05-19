//  chemin relatif : reponses/script-02.js

//Faire disparaître ou afficher les boites :



var div_main = $("#ce div")
var div_first = div_main.eq(0)
div_first.on('click',function(evt){
    div_main.each((i,e) => 
    {
        if(i!=0){ 
    $(e).toggle(1000)}
    })

})
//








//  Chemin relatif : reponses/script-05.js

// 1 - Calculer les sous - totaux

var table_main = $("#ce table tbody tr")
var sous_totaux_rows = table_main.has("td").not(":last")
sous_totaux_rows.each((i,e) => {
    var current_sous_total_row = $(e).children('td')
    var current_Prix_cell = current_sous_total_row.eq(1)
    var current_Quantite_cell = current_sous_total_row.eq(2)
    var current_sous_total_cell = current_sous_total_row.eq(3)
    var current_sous_total = parseInt(current_Prix_cell.text())*parseInt(current_Quantite_cell.text())
    current_sous_total_cell.text(current_sous_total)
   })
// 2 - Calculer le total
var updated_sous_totaux_rows = table_main.has("td").not(":last")
var last_row = table_main.last()
var Total = 0
updated_sous_totaux_rows.each((i,e) => {
var updated_sous_totaux_cells = $(e).children('td')
var current_sous_total = updated_sous_totaux_cells.eq(3)
console.log(current_sous_total.text())
Total += parseInt(current_sous_total.text())
})

last_row.children("td").last().text(Total)

//











const prompt = require("prompt-sync")()

let list = {
   easy: ["pat", "bet", "fat", "cap", "poi", "met", "bot", "tap", "vet", "pig", "lol"],
   medium: ["portrait", "facile", "gateau", "bisounours", "police"],
   hard: ["chromatographie", "pareillement", "bachelor", "Winny", "graphitisme"]
}

function random(tableau) {
   let word = tableau[Math.floor(Math.random() * tableau.length)]
   return word
}

function remove(table, mot) {
   let index = table.indexOf(mot)
   table.splice(index, 1)
   return (table)
}


exports.getRandomWord = random;
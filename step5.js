//4; créé une fonction qui permettra de retourné un message de félicitation si une de lettres en question dans le jeu a été découverte
/**
 * 
 * @param {string} GoodLetter 
 * @param {string} tab 
 * @returns string
 */

function congrat(Letter,tab){
    let congratTab=["bien!", "Super","Félicitation","Excellent !","Vous avez assuré !","Formidable ","Magnifique !","Impressionnant !"];
    var max= congratTab.length ;
    var min=0;
    var random = Math.floor(Math.random() * (max - min))  +min;
    if(tab.includes(Letter)){
        console.log(congratTab[ random ]);
        return true;
    }

}
congrat("m", "madara");
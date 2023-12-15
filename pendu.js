 // 1
 function menu(){
    console.log(">>>>>>>>>MENU<<<<<<<<");
    console.log("| 1) Jouer          | \n| 2) ajouter un mot | \n| 3) Quitter        |");
    console.log("XXXXXXXXXXXXXXXXXXXXX");
    return menu;
 }

// 4
/**
* @function verify
* @param {string} letter
* @returns boolean
*/
function verify(letter, randomWords){
   for(let i=0;i < randomWords.length;i++){
       if(randomWords[i].includes(letter)){
           return true;
       }
       else{
           return false;
       }
   }
}

exports.menu = menu; 
exports.verify = verify; 
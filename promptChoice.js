const prompt = require ("prompt-sync")();
const add = require("./addWord")
/**

 * @function askChoice

 * @returns number

 */

function askChoice() {

    //menu();

    return +prompt("Veuillez choisir entre les menus: ");

}



/**

 * @function userChoice

 * @param {number} choice 

 * @returns 

 */

function userChoice() {
    let choice;

    do {
        choice = askChoice()

        if (choice == 1) {
            //fonction jouer;
        }

        else if (choice == 2) {
            add.addWord();
        }

        else if (choice == 3) {
            console.log("Merci d'avoir jouer! A bientôt.");
        }

        else{
            console.log ("invalid commmand")
        }
    } while (choice != 3)

}



/**

 * @function promptChoice permet de demander et d'executer la requête de l'utilisateur

 * @returns string || function 

 */


function promptChoice (){

    return userChoice();  

}

exports.askChoice = askChoice;
exports.executeChoice = userChoice;
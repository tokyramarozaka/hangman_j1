// Cette fonction va décorer le debut du jeu

/**
 * @function strarting
 */

function starting(){
    console.log("\n  \n  \n                づ｡◕‿‿◕｡)づ  chargement ... \n     \n    \n    \n    ")
    console.log( "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
    console.log( "::                                                        ::")
    console.log( "::                                                        ::")
    console.log( "::         😊 Bienvenue dans le jeu HANGMAN 😊            ::")
    console.log( "::                                                        ::")
    console.log( "::                                                        ::")
    console.log( "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
}

    starting()


/** 
 * @function win
*/
    function win(){
        console.log ("    \n   \n 🥳  🎉  🥳  \n   \n")
        console.log("   -------  ")
        console.log(" /         \     ")
        console.log(" | ^     ^ |  ")
        console.log(" \     W    /   ")
        console.log("   -------")
        console.log("     ||     ")
        console.log("=============")
    }
    win();

/**
 * @function lose 
 */
    function lose(){
        console.log("    \n   \n ❌ 💀 ❌  \n  \n  ")
        console.log("   ------  ")
        console.log(" /        \  ")
        console.log(" | x    x |  ")
        console.log(" \    --   /   ")
        console.log("   -----")
        console.log("     ||     ")
        console.log("============")

    }
    lose();
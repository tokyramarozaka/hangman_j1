/**
 * Choose a number i randomly and use it to print an element in a given array
 * ex: random->i=2; console.log(array[2])
 */

function messageEchec() {
    //random number generated
    let i = Math.floor(Math.random() * 8);
  
    let array = [
      "Incorect!!!",
      "Raté!!",
      "Mauvaise réponse!!!",
      "C'est faux!!",
      "Nullos!!!",
      "Ooops!!!",
      "Attention!! Incorrect",
      "Oh la la !!",
    ];
    console.log(array[i]);
  }
  
  //mauvaiseReponse();
let size = 8;
let board = "";
for(let row = 0; row < size; row++){
    for(let counter = 0; counter < size; counter++){
        if((row + counter) % 2 === 0){
            board +=" ";
        }   else{
            board +="#";
           }
          }
          board +="\n";
         }
         
         console.log(board);

function writeCards(name,type){
    const cards = [["lisa", "kaitlin", "jan"], "surprise"];
    for (let i =0; i < name.length; i++){
        cards[i] = `Thank you, ${name[i]}, for the wonderful ${type} gift!`
 
     }
     console.log (cards)
     return cards;

}
writeCards(["lisa", "kaitlin", "jan"], "surprise");

function countDown(i) {
   
    while(i >=0) {
        console.log(i);
        i--;
    }
}

countDown(10);

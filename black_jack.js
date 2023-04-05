//1 return 11
//

/*
let firstcard=getrandomCard()
let lastcard=getrandomCard()
cards=[firstcard,lastcard]
sum=firstcard+lastcard;
*/

let player={
    name:"Abhay",
    chip:200
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" "+player.chip

let cards=[]
let sum=0

let message="";
let hasblackjack=false;
let  isAlive=false;


//console.log(sum);
//console.log(cards);
let messageEl=document.getElementById("messageEl")
let sumEl=document.getElementById("sum-El")
let cardEl=document.getElementById("card-El")


function  getrandomCard() {
    let randomNumber= Math.floor((Math.random() * 13) + 1);//2-11
    if(randomNumber>10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


//console.log(hasblackjack);
//console.log(isAlive);

function renderGame() {
if(sum<21){
    //  console.log("you can draw a new card");
        message="you can draw a new card";
    }
    else if(sum===21){
    //  console.log("you won black_jack");
        message="you won black_jack"
        hasblackjack=true
    }
    else{
    //  console.log("lost the match set new game ");
        message="lost the match"
        isAlive=false
    }
    
    messageEl.innerHTML=message
    //console.log(message);
    sumEl.textContent="Sum : "+sum
    //cardEl.textContent="cards"+firstcard+" "+lastcard
    //cardEl.textContent="cards: "+cards[0]+" "+cards[1]
    cardEl.textContent="Cards: "
    for(let  i=0;i<cards.length;i++){
        cardEl.textContent=cardEl.textContent+cards[i]+" "
    }
}

function startGame() {
    isAlive=true
    let firstcard=getrandomCard()
    let lastcard=getrandomCard()
    cards=[firstcard,lastcard]
    sum=firstcard+lastcard

    // console.log("Drawing a new card");
   //  let newcard=4;
   // sum=sum+newcard;
    renderGame();
    
}
function newCard() {

    if(isAlive===true && hasblackjack===false)
    {
    let card=getrandomCard()
    sum=sum+card;
    cards.push(card)

    //console.log(cards);
    renderGame()
    }
}


//Array

/*

let featuredPosts=['check out my Netflix clone',
'Here is code for my project','I have just relauched my portfolio']

console.log(featuredPosts);

let list=['Abhay',19,true]
console.log(list.length);

let cardNew=[7,4]
cardNew.push(6)
console.log(cardNew);

let newMessage="same here"
featuredPosts.push(newMessage)//add element from last
console.log(featuredPosts);

featuredPosts.pop()//remove element from last
console.log(featuredPosts);

*/

// for(let a=10;a<21;a++)
// {
//     console.log(a);
// }s

// for(let a=2;a<21;a=a+2){
//         console.log(a);
// }

// for(let i=10;i<=100;i=i+10){
//     console.log(i);
// }

// let message_a=['Hey how are you','I am Abhay',
//                 'Same here','good job ']
// for(let i=0;i<message_a.length;i++){
//     console.log(message_a[i]);
// }
// console.log(message_a.length);


// let cards1=[7,3,9]

// for(let i=0;i<cards1.length;i++){
//     console.log(cards1[i]);
// }

// let greetingEL=document.getElementById("greeting-el")
// let sentence=['hello','my','name','is','Abhay']

// for(let i=0;i<sentence.length;i++){
//     greetingEL.innerHTML = greetingEL.innerHTML+ sentence[i]+" ";
    
// }

// let greet2="hello";
// greet2=greet2+"how are you";
// console.log(greet2);


//Random function

/*

function roll_dice() {
    return Math.floor((Math.random() * 6) + 1);
}
let abc=roll_dice();
console.log(abc);

*/

//let playerName="Abhay"
//let playerChips=120

// let player={
//     name:"Abhay",
//     Chips:120
// }
// let playerEl=document.getElementById("player-el")
// playerEl.textContent=player.name+" "+player.chip

// console.log(playerEl);

//object


let course={
    title:"learn javascript",
    lesson:16,
    creator:"xyz",
    lenght:63,
    level:2,
    isFree: true,
    tags:['html','css','javascript',10]
}

console.log(course.tags[2]);
console.log(course.isFree);

let castle={

}


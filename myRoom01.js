function checklength(i) {
    'use strict';
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var minutes, seconds, count, counter, timer;
count = 601; //seconds
counter = setInterval(timer, 1000);

function timer() {
    'use strict';
    count = count - 1;
    minutes = checklength(Math.floor(count / 60));
    seconds = checklength(count - minutes * 60);
    if (count < 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML = 'death in ' + minutes + ':' + seconds + ' ';
    if (count === 0) {
        location.reload();
    }
}

//the prisoner's inventory.  edit to equal "true" if it makes sense to your room.  There are opportunities to change these later based on player actions later in the function.
let hasShovel = false;
let hasKey01 = false;
let hasKey02 = false;
let hasKey03 = false;
let doorUnlocked=false;
let doorOpen=false;
let candleLit=false;
currentGender="female";
pronounOne="she";
pronounTwo="her";

//current direction.  edit to equal player's direction on entering the room.  for instance, if they exit the previous room through a door in the north wall, they are still facing north in the new room.
currentDirection="North";
let currentVictim=(Math.floor(Math.random() * 9) + 5)

    if (currentVictim%2===0){
        currentGender="male";
        pronounOne="he";
        pronounTwo="him";
    }


let currentVictimStatement=("You have activated the game.  Prisoner " + currentVictim + " is now in the room.  Try not to let " + pronounTwo + " die");
window.alert(currentVictimStatement);

//storyline progress responses.  these will change based on the story of your room.  For instance, if the clue for the end game is on the west wall and they enter "face west", the response string may equal "the numbers 1 and 2 are scrawled on the wall in brownish red liquid.  Could it be blood?"
let response01="the door is now unlocked";
let response02="The hinges wail in deathly squeals...the rust of ages breaking free.  A dark doorway stands before you";
let response03="You don't have a key!";

//gameplay responses.  They should follow the appropriate command entered.  For instance, if user enters "face north", add "return faceNorthResponse"
let faceNorthResponse="You are now facing North.  Hundreds of scratch marks mar the plaster";
let faceEastResponse="You are now facing East.  Something gleams in the dim light. You have found a key.";
let faceSouthResponse="You are now facing South.  Someone has sprayed griffiti here.  It says, \"look away from dixieland\"";
let faceWestResponse="A door of iron bars.  It looks as though it hasn't been opened in ages.  Even though the stairs beyond it lead downward, this appears to the only escape from your captivity";
/*
Available commands are:
1 "face north"
2 "face east"
3 "face south"
4 "face west"
5 "pickup key"
6 "use key"
7 "use door"
8 "use stairs"
9 "inventory"
10 "light candle"
11 "pickup key"
12 "use key"
13 "pickup shovel"
14 "use shovel"
*/
let mainImage="curserE.png";

function roomTemplate(){

    let moveData = document.getElementById("playerMove");
    let userInput = moveData.value;

//these are the basic "face" (direction) commands and the results they should display.
if (candleLit===false && userInput==="look around"){
    
}else if (candleLit===false && userInput==="face north"){
    window.alert("You cannot see a thing.  It is pitch black.");
    currentDirection="north";

}else if (candleLit===false && userInput==="face east"){
    window.alert("You cannot see a thing.  It is pitch black.");
    currentDirection="east";

}else if (candleLit===false && userInput==="face south"){
    window.alert("You cannot see a thing.  It is pitch black.");
    currentDirection="south";

}else if (candleLit===false && userInput==="face west"){
    window.alert("You cannot see a thing.  It is pitch black.");
    currentDirection="west";

}else if (candleLit===true && userInput==="look around"){
    window.alert("In the dim light you can make out four walls - brick.  The corners glisten with seeping water");
    img01.src = "lookAround.jpg";

}else if (userInput==="inventory"){
    img01.src = "darkBrick.jpeg";
    window.alert("you have a small candle and a lighter.  As you light the candle, the room takes shape around you.");
    candleLit=true;

}else if (candleLit===true && userInput==="face north"){
    currentDirection="north";
    window.alert(faceNorthResponse);
    img01.src = "scratchMarks.jpeg";

}else if (candleLit===true && userInput==="face east"){
    currentDirection="east";
    window.alert(faceEastResponse);
    hasKey01=true; 

}else if (candleLit===true && userInput==="face south"){
    currentDirection="south";
    window.alert(faceSouthResponse);
    img01.src = "base1.jpg";

}else if (candleLit===true && userInput==="face west"){
    currentDirection="west";
    window.alert(faceWestResponse);
    img01.src = "ironBar.jpg";

}else if (currentDirection==="west" && hasKey01===true && userInput==="use key"){
    window.alert(response01);
    doorUnlocked=true;

}else if (currentDirection!=="west" && hasKey01===false && userInput==="use key"){
    window.alert("Neither are you facing the door, nor do you have a key");

}else if (currentDirection==="west" && hasKey01===false && userInput==="use key"){
    window.alert("you don't have a key!!");

}else if (doorUnlocked===true && userInput==="open door"){
    window.alert(response02);
    doorOpen=true;

}else if (currentDirection==="west" && doorOpen===true && userInput==="open door"){
    window.alert("The door is already open"); 

}else if (currentDirection==="west" && doorOpen===true && userInput==="use door"){
    window.alert("You step to the cavernous opening before you.  A breeze whistles from beyond the light of your candle.  If you knew where you were...WHO you were, you might think this was a grand adventure.  As it is, it feels like certain death.  You take the first halting step down...Welcome To The Curser.");
    window.location.href = "https://thomaslthoene.github.io/myCurser/myRoom02.html";

}else return window.alert("You cannot do that");
}



let submit = document.getElementById("submit-button");
submit.addEventListener("click", roomTemplate);


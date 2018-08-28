//the player's inventory.  edit to equal "true" if it makes sense to your room.  There are opportunities to change these later based on player actions later in the function.
let hasShovel = false;
let hasKey01 = false;
let hasKey02 = false;
let hasKey03 = false;
let doorUnlocked=false;
let doorOpen=false;
let candleLit=false;

//current direction.  edit to equal player's direction on entering the room.  for instance, if they exit the previous room through a door in the north wall, they are still facing north in the new room.
currentDirection="North";

//storyline progress responses.  these will change based on the story of your room.  For instance, if the clue for the end game is on the west wall and they enter "face west", the response string may equal "the numbers 1 and 2 are scrawled on the wall in brownish red liquid.  Could it be blood?"
let response01="the door is now unlocked";
let response02="The hinges wail in deathly squeals...the rust of ages breaking free.  A dark doorway stands before you";
let response03="You don't have a key!";

//gameplay responses.  They should follow the appropriate command entered.  For instance, if user enters "face north", add "return faceNorthResponse"
let faceNorthResponse="You are now facing North.  Scrawled on the crumbling brick is the number 13";
let faceEastResponse="You are now facing East.  Something gleams in the dim light. You have found a key.";
let faceSouthResponse="You are now facing South.  Someone has sprayed griffiti here.  It says, \"look away from dixieland\"";
let faceWestResponse="A giant locked iron door bars your progress.  It looks as though it hasn't been opened in ages";
let punchSphinx="The sphinx awakens.  Inhaling deeply, he exhales riddle."
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

function roomTemplate(){

    let moveData = document.getElementById("playerMove");
    let userInput = moveData.value;
    
//these are the basic "face" (direction) commands and the results they should display.
if (candleLit===false && userInput==="look around"){
    window.alert("You cannot see a thing.  It is pitch black.");

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
    window.alert("You are facing " + currentDirection);

}else if (userInput==="inventory"){
    window.alert("you have a small candle and a lighter.  As you flick the lighter, the room takes shape around you.");
    window.alert("You are now facing " + currentDirection);
    candleLit=true;

}else if (candleLit=true && userInput==="face north"){
   currentDirection="north";
   window.alert(faceNorthResponse);
   window.alert("You are now facing " + currentDirection);

}else if (candleLit=true && userInput==="face east"){
    currentDirection="east";
    window.alert(faceEastResponse);
    window.alert("You are now facing " + currentDirection);
    hasKey01=true; 

}else if (candleLit=true && userInput==="face south"){
    currentDirection="south";
    window.alert(faceSouthResponse);
    window.alert("You are now facing " + currentDirection);

}else if (candleLit=true && userInput==="face west"){
    currentDirection="west";
    window.alert(faceWestResponse);
    window.alert("You are now facing " + currentDirection);

}else if (currentDirection==="west" && hasKey01==true && userInput==="use key"){
    window.alert(response01);
    doorUnlocked=true;
    hasKey01=false;

}else if (doorUnlocked===true && hasKey01===false && userInput==="use key"){
    window.alert("You don't have any more - the door is already unlocked");

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
    window.location.href = "/Users/ProgClass/Documents/codeslo/mycode/Week-07/1Monday/curser/myRoom02.html"; 

}else return window.alert("You cannot do that here");
}

let submit = document.getElementById("submit-button");
submit.addEventListener("click", roomTemplate);

//Timer function.  Starts on page load.
function checklength(i) {
    'use strict';
    if (i < 10) {
        i = i;
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

//the prisoner's current circumstance.  Changed later based on player actions later in the function.
let hasShovel = false;
let hasKey01 = false;
let hasKey02 = false;
let hasKey03 = false;
let doorUnlocked=false;
let doorOpen=false;
let candleLit=false;
currentGender="female";
heShe="she";
heSheCapital="She"; //for use at sentence start
himHer="her";
himHerCapital="Her";
currentDirection="North";

//gender, set with a random number which then redefines pronouns for future strings.
let currentPrisoner=(Math.floor(Math.random() * 100))

    if (currentPrisoner%2===0){
        currentGender="male";
        heShe="he";
        heSheCapital="He"; //for use at sentence start
        himHer=himHer="Him";
    }

let currentPrisonerStatement=("You have activated the game.  Prisoner " + currentPrisoner + " is now in the room.  Try not to let this one die.");
window.alert(currentPrisonerStatement);

//storyline progress responses.  
let response01="The door is now unlocked";
let response02="The hinges squeal...the rust of ages breaking free.  A dark doorway stands before " + himHer + ". " + heSheCapital + " seems unwilling to move forward ;)";
let response03=heSheCapital + " doesn't have a key!";

//gameplay responses.  They should follow the appropriate command entered.  For instance, if user enters "face north", add "return faceNorthResponse"
faceNorthResponse=heSheCapital + " is now facing North.  Hundreds of scratch marks mar the plaster";
faceEastResponse=heSheCapital + " is now facing East.  Something gleams in the dim light. " + heSheCapital + " has found a key. ";
faceSouthResponse=heSheCapital + " is now facing South.  Someone has sprayed griffiti here.  It says, \"look away from dixieland\"";
faceWestResponse=heSheCapital + " is now facing west.  " + heSheCapital + " sees a locked door of iron bars.  Beyond it stairs...leading downward";

function roomTemplate(){

    let moveData = document.getElementById("playerMove");
    let userInput = moveData.value;

//move and look results in the dark.
if (candleLit===false && userInput==="look around"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="face north"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="walk north"){
    window.alert("No.  You've killed " + himHer + ".  " + heSheCapital + " couldn't see our 'surprise.'  Not smart to move about in the dark.");
    location.reload();

}else if (candleLit===false && userInput==="face east"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="walk east"){
    window.alert("No.  You've killed " + himHer + ".  " + heSheCapital + " couldn't see our 'surprise.'  Not smart to move about in the dark.");
    location.reload();

}else if (candleLit===false && userInput==="face south"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="walk south"){
    window.alert("No.  You've killed " + himHer + ".  " + heSheCapital + " couldn't see our 'surprise.'  Not smart to move about in the dark.");
    location.reload();

}else if (candleLit===false && userInput==="face west"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="walk west"){
    window.alert("No.  You've killed " + himHer + ".  " + heSheCapital + " couldn't see our 'surprise.'  Not smart to move about in the dark.");
    location.reload();

//post "inventory" (candle lit) commands

}else if (userInput==="inventory"){
    window.alert("Well done.  You have figured out the first command. Here..." +  heSheCapital + " now has a small candle and a lighter.  It won't last long, but probably longer than " + minutes + " minutes ;)");
    window.alert(heSheCapital + " is very close to the edge of a deep, DEEP hole in the floor.  Thankfully " + heShe + " can now see to move around it safely.");
    candleLit=true;

}else if (candleLit===true && userInput==="look around"){
    window.alert("In the dim light " + heShe + " can make out four walls - brick.  Uh oh, " + heShe + " says the corners are seeping water ;) " + minutes + " minutes " + seconds + " seconds remaining.");

}else if (candleLit===true && userInput==="face north"){
    currentDirection="north";
    window.alert(faceNorthResponse);

}else if (candleLit===true && userInput==="face east"){
    currentDirection="east";
    window.alert(faceEastResponse);
    hasKey01=true; 

}else if (candleLit===true && userInput==="face south"){
    currentDirection="south";
    window.alert(faceSouthResponse);

}else if (candleLit===true && userInput==="face west"){
    currentDirection="west";
    window.alert(faceWestResponse);

}else if (currentDirection==="west" && hasKey01===true && userInput==="use key"){
    window.alert(response01);
    doorUnlocked=true;

}else if (currentDirection!=="west" && hasKey01===false && userInput==="use key"){
    window.alert("Neither is " + heShe + " facing a door, nor does " + heShe + " have a key.");

}else if (currentDirection==="west" && hasKey01===false && userInput==="use key"){
    window.alert(heSheCapital + " doesn't don't have a key!!");

}else if (doorUnlocked===true && userInput==="open door"){
    window.alert(response02);
    doorOpen=true;

}else if (currentDirection==="west" && doorOpen===true && userInput==="open door"){
    window.alert("The door is already open"); 

}else if (currentDirection==="west" && doorOpen===true && userInput==="move forward"){
    window.alert(heSheCapital + " steps to the cavernous opening.  A whistling breeze makes the candle flicker.  " + heSheCapital + " takes the first step toward freedom.");
    window.alert(" or maybe death ;)");
    window.location.href = "https://thomaslthoene.github.io/myCurser/myRoom02.html";

} else window.alert("You wish");
   // location.reload();
}



let submit = document.getElementById("submit-button");
submit.addEventListener("click", roomTemplate);


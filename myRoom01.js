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
    document.getElementById("timer").innerHTML = minutes + ':' + seconds + ' ';
    if (count === 0) {
        location.reload();
    }
}

//the prisoner's opening circumstance.  Changed later based on player actions later in the function.
hasKey01 = false;
hasKey02 = false;
hasKey03 = false;
doorUnlocked=false;
doorOpen=false;
candleLit=false;
hasShovel = false;
currentGender="female";
heShe="she";
heSheCapital="She"; //for use at sentence start
himHer="her";
himHerCapital="Her";
hisHers="hers";
hisHersCapital="Hers";
currentDirection="North";

//gender, set with a random number which then redefines pronouns for future strings based on even/odd.
let currentPrisoner=(Math.floor(Math.random() * 100))

    if (currentPrisoner%2===0){
        currentGender="male";
        heShe="he";
        heSheCapital="He"; //for use at sentence start
        himHer="him";
        himHerCapital="Him";
        hisHers="his";
        hisHersCapital="His";
    }

//opening alert
window.alert("You have activated the game and Prisoner " + currentPrisoner + " is now in the room.  \n\nTry not to let " + himHer + " die.\n \n;^]");

//storyline progress responses.  
let response01="The door is now unlocked";
let response02="The hinges squeal...the rust of ages breaking free.  \nA dark doorway stands before " + himHer + ", but " + heShe + " seems unwilling to move forward.  \n\nI wonder why?\n\n ;^]";
let response03=heSheCapital + " doesn't have a key!";

function roomTemplate(){

    let moveData = document.getElementById("playerMove");
    let userInput = moveData.value;

//move and look results in the dark.
if (candleLit===false && userInput==="look around"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="face north"){
    return window.alert(heSheCapital + " cannot see a thing.  It is pitch black.");

}else if (candleLit===false && userInput==="walk north"){
    window.alert("No.  \nYou've killed " + himHer + ".  " + heSheCapital + " couldn't see our 'surprise.'  \n\nNot smart to move about in the dark.\n");
    location.reload();

}else if (candleLit===false && userInput==="face east"){
    return window.alert(heSheCapital + " cannot see a thing.  \nIt is pitch black.");

}else if (candleLit===false && userInput==="walk east"){
    window.alert("No.  \nYou've killed " + himHer + ".  \n" + heSheCapital + " couldn't see our 'surprise.'  \n\nNot smart to move about in the dark.\n");
    location.reload();

}else if (candleLit===false && userInput==="face south"){
    return window.alert(heSheCapital + " cannot see a thing.  \nIt is pitch black.");

}else if (candleLit===false && userInput==="walk south"){
    window.alert("No.  \nYou've killed " + himHer + ".  \n" + heSheCapital + " couldn't see our 'surprise.'  \n\nNot smart to move about in the dark. \n");
    location.reload();

}else if (candleLit===false && userInput==="face west"){
    return window.alert(heSheCapital + " cannot see a thing.  \nIt is pitch black.");

}else if (candleLit===false && userInput==="walk west"){
    window.alert("No.  \nYou've killed " + himHer + ".  \n" + heSheCapital + " couldn't see our 'surprise.'  \n\nNot smart to move about in the dark.\n");
    location.reload();

//post "inventory" (candle lit) commands
}else if (candleLit===true && userInput==="inventory"){
    window.alert("No.\n\n We already gave " + himHer + " a candle.  What more do you expect?  \n\n How ungrateful.");
    location.reload();

}else if (userInput==="inventory"){
    window.alert("Well done.  \n\nYou finally figured out the first command.  We dropped " + himHer + " a small candle and a lighter.  \n\nIt won\'t stay lit long, but probably longer than the " + minutes + " minutes you have left until "+ heShe + " dies anyway \n\n;^]");
    window.alert(heSheCapital + " is very close to the edge of a deep, DEEP hole in the floor.  Thankfully " + heShe + " can now see to move around it safely.");
    candleLit=true;

}else if (candleLit===true && userInput==="look around"){
    window.alert("In the dim light " + heShe + " can make out four walls - brick.  Uh oh, " + heShe + " says the corners are seeping water. \n \n ;^]");

}else if (candleLit===true && userInput==="face north"){
    currentDirection="north";
    window.alert(heSheCapital + " is now facing North.  \n\nScratch marks mar the plaster.\n \n Oooh - scary.\n\n or at least they thought so \n\n;^]");

}else if (candleLit===true && userInput==="face east"){
    currentDirection="east";
    window.alert(heSheCapital + " is now facing East.  "+heSheCapital+" notices something at the base of the wall.  It looks like...yes, " + heShe + " has found a key.");
    hasKey01=true; 

}else if (candleLit===true && userInput==="face south"){
    currentDirection="south";
    window.alert(heSheCapital + " is now facing South.  Someone has sprayed griffiti here.  \n\nIt says, \"look away from dixieland\" ");

}else if (candleLit===true && userInput==="face west"){
    currentDirection="west";
    window.alert(heSheCapital + " is now facing west. \n \n" + heSheCapital + " sees a locked door of iron bars.  Beyond it stairs...leading downward\n \n ;^]");

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
    window.alert(" or maybe death \n \n ;^]");
    window.location.href = "https://thomaslthoene.github.io/myCurser/myRoom02.html";

} else window.alert("You wish");
  //  location.reload();
}



let submit = document.getElementById("submit-button");
submit.addEventListener("click", roomTemplate);


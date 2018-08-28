let basicH1 = document.getElementById("basicH1");
//let button01 = document.getElementById("button01");
//let image01= document.getElementById("img01");
//let redButton = document.getElementById("redButton");
//let input_name = document.getElementById("name");


/*function changeH1() {
    if (basicH1.innerHTML === "Welcome to Curser") {
        basicH1.innerHTML = "Angry Cat! meow!";
        image01.src = "angrycat.jpg";
    } else {
        basicH1.innerHTML = "Happy Cat"
        image01.src = "cutecat.jpg";
    }
};

function makeRed() {
    if (basicH1.classList.contains("red")){
        basicH1.classList.remove("red");
    } else {
        basicH1.classList.add("red");
    }
};

function getInputData() {
    let data = [];
    data.push(input_name.value);
    console.log(data);
}

function checkData() {
    console.log(this.value);
    if (this.value === ""){
        console.log("anonymous")
    }
    if (this.value === "") {
        this.classList.add("alert");
        this.placeholder = "Required";
    }
}
*/
function linkPage() {
    return window.location.assign("/Users/ProgClass/Documents/codeslo/mycode/Week-07/1Monday/curser/myCurser/myRoom01.html");
}

//redButton.addEventListener('click', makeRed);
//submit-button.addEventListener('mouseover', makeRed); 
//submit-button.addEventListener('mouseout', makeRed);

let submit = document.getElementById("submit-button");
submit.addEventListener("click", linkPage);


//input_name.addEventListener("blur", checkData);



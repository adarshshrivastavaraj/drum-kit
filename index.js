var buttonList=document.querySelectorAll(".drum");
function handleClick(){
    // var audio = new Audio("sounds/tom-3.mp3");
    // audio.play(); 
    // this.style.color="white";
    var clickedInnerHTML=this.innerHTML;
    buttonAnimation(clickedInnerHTML);
    switch (clickedInnerHTML) {
        case "w":
         var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    case "a":
         var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    case "s":
         var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    case "d":
         var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    case "l":
         var audio = new Audio("sounds/kick.mp3");
    audio.play();
    case "j":
         var audio = new Audio("sounds/crash.mp3");
    audio.play();
    case "k":
         var audio = new Audio("sounds/snare.mp3");
    audio.play();
            
            break;
    
        default:
            break;
    }
       } 
for(var i=0 ; i<buttonList.length;i++){
    buttonList[i].addEventListener("click",handleClick);
}


// on button click

function makeSound() {
   var e= event.key;
   buttonAnimation(e);
    switch (e) {
        case "w":
         var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    case "a":
         var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    case "s":
         var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    case "d":
         var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    case "l":
         var audio = new Audio("sounds/kick.mp3");
    audio.play();
    case "j":
         var audio = new Audio("sounds/crash.mp3");
    audio.play();
    case "k":
         var audio = new Audio("sounds/snare.mp3");
    audio.play();
            
            break;
    
        default:
            break;
    }

    
}

document.addEventListener("keypress",makeSound);

// adding button animation

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    // a class named presed is defined in css 
    activeButton.classList.add("pressed");



    setTimeout(function(){    activeButton.classList.remove("pressed");
    ; }, 100);






}
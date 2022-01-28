//function for checking if key is pressed.//
function checkin(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("tom-1.mp3")
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio("tom-2.mp3")
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("tom-3.mp3")
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("tom-4.mp3")
    tom4.play();
    break;

    case "j":
    var snare = new Audio("snare.mp3")
    snare.play();
    break;

    case "k":
    var crash = new Audio("crash.mp3")
    crash.play();
    break;

    case "l":
    var kickbass = new Audio("kick-bass.mp3")
    kickbass.play();
    break;
  }

}
//function for checking if a button is pressed.//

//length of a buttin.//
var no_of_buttons = document.querySelectorAll(".drum").length;
//button click log.//
for(var i=0 ; i<no_of_buttons ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", clicked);

function clicked(){
var buttonInnerHTML = this.innerHTML;
checkin(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
console.log(buttonInnerHTML);
};
}
//keypress function//
  document.addEventListener('keypress',function() {

    var key = event.key;
    console.log(key);

    checkin(key);
    buttonAnimation(key);
}
);
/**button animations */
function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },150);
}
/**---------------- */
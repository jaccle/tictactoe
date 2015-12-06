var xo;
xo = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X"];
var tdtag = document.getElementsByTagName("td");
var input = document.getElementsByTagName("input");
var unused = document.getElementsByClassName("empty");
var winTxt = document.getElementsByClassName('winner')[0];
var turnID = document.getElementById("turn");
var showID = document.getElementById("show-timer");
var timerID = document.getElementById("timer");
var x = document.getElementById("x");
var o = document.getElementById("o");
var a1 = document.getElementById("A1");
var b2 = document.getElementById("B2");
var c3 = document.getElementById("C3");
var a3 = document.getElementById("A3");
var c1 = document.getElementById("C1");
var playerNm = document.getElementsByTagName("h3")[0];
var namesCl = document.getElementsByClassName("names");
var enterNames = document.getElementById("enter-names");
var cssStr = "color: 'oldlace';text-align: center;opacity: 1;display: block;font-size: 15vmax; width: 80%;margin: 10%;position: fixed;animation: fadein 0.2s;transform: translateY(-1);transition: all 0.5s;";
/////////////////////////////////////////////////////


//alternate filling empty spaces with "X" and "O", entering input to table cell

//cannot change from X to O until reset button hit

//reset/New Game button
function reset() {
   var button = document.getElementById("reset");
   button.addEventListener("click", function () {
      for (var i = 0; i < tdtag.length; i++) {
         tdtag[i].classList.add("empty");
         xo = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X"];
         tdtag[i].innerText = "";
         winTxt.style.display = "none";
         winTxt.style.opacity = "0";
         winTxt.style.transform = "translateY(100%)";
         winTxt.style.transition = "transform 0.5s";
         winTxt.innerText = "";
      }
   });
}

//entering xes and ohs in empty cells
function fill() {
   for (var i = 0; i < tdtag.length; i++) {
      tdtag[i].addEventListener("click", function () {
         if (xo.length === 0) {
            reset();
         } else if (this.classList.contains('empty') && winTxt.style.display !== "block") {
            this.innerText = xo.shift();
            this.classList.remove("empty");
            player();
         }
         if (xo.length <= 6) {
            winnerC("left");
            winnerC("center");
            winnerC("right");
            winnerC("top");
            winnerC("middle");
            winnerC("bottom");
         }
      });
   }
}

//hover effect for empty cells
function hoverOn() {
   for (var i = 0; i < tdtag.length; i++) {
      tdtag[i].addEventListener("mouseover", function () {
         if (this.innerText === "" && xo.length !== 0 && winTxt.style.display != "block") {
            this.innerText = xo[0];
         }
      });
   }
}

function hoverOff() {
   for (var i = 0; i < tdtag.length; i++) {
      tdtag[i].addEventListener("mouseleave", function () {
         if (this.classList.contains('empty')) {
            this.innerText = "";
         }
      });
   }
}
//check and stop for winner
function winnerC(clas) {
   clas = clas.toString();
   var clasVar = document.getElementsByClassName(clas);
   for (i = 0; i < 8; i++) {
      if (a1.innerText === xo[1] && b2.innerText === xo[1] && c3.innerText === xo[1] ||
         a3.innerText === xo[1] && b2.innerText === xo[1] && c1.innerText === xo[1] ||
         clasVar[0].innerText === xo[1] && clasVar[1].innerText === xo[1] && clasVar[2].innerText === xo[1]) {
         if (xo[1] === "X" && x.value !== "" && enterNames.checked !== false) {
            winTxt.innerText = x.value + "  WINS!";
            winTxt.style.fontSize = "10vmax";
         } else if (xo[1] === "O" && o.value !== "" && enterNames.checked !== false) {
            winTxt.innerText = o.value + "  WINS!";
            winTxt.style.fontSize = "10vmax";
         } else {
            winTxt.innerText = xo[1] + "  WINS!";
         }
         winTxt.style.cssText = cssStr;
      } else if (unused.length === 0) {
         winTxt.innerText = "It's a draw!";
         winTxt.style.cssText = cssStr;
      }
   }
}

function disabled() {
   enterNames.addEventListener("click", function () {
      if (enterNames.checked) {
         for (i = 0; i < namesCl.length; i++) {
            namesCl[i].style.display = "block";
         }
      } else {
         for (i = 0; i < namesCl.length; i++) {
            namesCl[i].style.display = "none";
         }
      }
   });
}



function player() {
   //loop if .class.length = true  then display winner
   for (var i = 0; i < tdtag.length; i++) {
      if (turnID.checked) {
         playerNm.style.display = "block";
         if (xo[0] === "X" && x.value !== "" && enterNames.checked) {
            playerNm.innerText = x.value + "'s Turn";
         } else if (xo[0] === "O" && o.value !== "" && enterNames.checked) {
            playerNm.innerText = o.value + "'s Turn";
         } else {
            playerNm.innerText = xo[0] + "'s Turn";
         }
      } else {
         playerNm.style.display = "none";
      }
   }
}




//if timed turns is checked or clicked, start timer.
//five second turns

//install TIMER for each turn
///have countdown timer shown on page (setInterval)
///allow players to enter the number of seconds per turn
//if (form is entered with number, is !NaN after parseInt) {
//number entered*1000
//think I want setTimeout}
//else if(form is empty there is no time limit)
//ex. to go off of
// var timerId = setTimeout(function () {
//    alert("hi")
// }, 10000)
// clearTimeout(setTimeout(function () {
//       alert("hi")
//    }, 10000))
//    //or
// var timerId2 = setInterval(function () {
//    alert("hi")
// }, 10000)
// clearTimeout(timerId2)
//    //or
// var count = 0
// var timerId3 = setInterval(function () {
//       count++;
//       console.log(count)
//       if (count === 3) {
//          clearInterval(timerId3)
//       }
//    }, 2000)
///also want clearTimeout for when answer is entered


//if 



//Bonuses:

//state whose turn it is (refer to Thursday's exercise done with Anthony)


///GAME STOPS when there is a winner (all one class full with same value or A1, B2, C3; A3, B2, C1)
//var result = element.hasAttribute(attName);
//hook up to reset button
//animation that covers the screen "WINNER!"
// [id ^= "winner"]: checked + .winner {
//    opacity: 1;
//    display: block;
//    transform: translateY(0);
//    transition: all 0.5 s 0.5 s;
// }
///tally of who has won more

///if(all of one class is full with same value, make sure all is checked and not one) {
//for (var i = 0; i < 3; i++) {
//   if (class === "X" || class * 3 === "O") {
//
//   }
//}
//there's a winner declared
//}

///players ENTER NAMES into form and the winner is returned (proper associated input returned)
//position:fixed



//allow for keyboard use

//allow for toggle fullscreen



//post to bit balloon and add to profile as independent tic-tac-toe javascript project. Mention what extra done./////////////////////////////////////////////////////
window.onload = function () {
   console.log("Javascript is working");
   //call functions
   reset();
   fill();
   hoverOn();
   hoverOff();
   disabled();
   turnID.addEventListener("click", player);
   showID.disabled = true;
   for (i = 0; i < namesCl.length; i++) {
      namesCl[i].style.display = "none";
   }
   console.log("we made it to the end of the code successfully");
};

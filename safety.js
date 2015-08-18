var xo;
xo = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X"];
var tdtag = document.getElementsByTagName("td");
var unused = document.getElementsByClassName("empty");
var cssStr = "color: 'oldlace';text-align: center;opacity: 1;display: block;font-size: 15 vmax; width: 80%;margin: 10%;position: fixed;animation: fadein 0.2s;transform: translateY(-1);transition: all 0.5s;";
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
         document.getElementsByClassName('winner')[0].style.display = "none";
         document.getElementsByClassName('winner')[0].style.opacity = "0";
         document.getElementsByClassName('winner')[0].style.transform = "translateY(100%)";
         document.getElementsByClassName('winner')[0].style.transition = "transform 0.5s";
         document.getElementsByClassName('winner').innerText = "";
      }
   });
}

//entering xes and ohs in empty cells
function fill() {
   for (var i = 0; i < tdtag.length; i++) {
      tdtag[i].addEventListener("click", function () {
         if (xo.length === 0) {
            reset();
         } else if (this.classList.contains('empty') && document.getElementsByClassName('winner')[0].style.display !== "block") {
            this.innerText = xo.shift();
            this.classList.remove("empty");
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
         if (this.innerText === "" && xo.length !== 0 && document.getElementsByClassName('winner')[0].style.display != "block") {
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

function winnerC(clas) {
   clas = clas.toString();
   for (i = 0; i < 8; i++) {
      if (document.getElementById("A1").innerText === xo[1] && document.getElementById("B2").innerText === xo[1] && document.getElementById("C3").innerText === xo[1] ||
         document.getElementById("A3").innerText === xo[1] && document.getElementById("B2").innerText === xo[1] && document.getElementById("C1").innerText === xo[1] || document.getElementsByClassName(clas)[0].innerText === xo[1] && document.getElementsByClassName(clas)[1].innerText === xo[1] && document.getElementsByClassName(clas)[2].innerText === xo[1]) {
         document.getElementsByClassName('winner')[0].innerText = xo[1] + "  WINS!"
         document.getElementsByClassName('winner')[0].style.cssText = cssStr;
      }
   }
}

//if loop .class.length = true winner
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

//allow for keyboard use

//allow for toggle fullscreen



//post to bit balloon and add to profile as independent tic-tac-toe javascript project. Mention what extra done./////////////////////////////////////////////////////
window.onload = function () {
   console.log("Javascript is working");
   //call functions
   reset();
   fill();
   hoverOff();
   hoverOn();
   console.log("we made it to the end of the code successfully");

};

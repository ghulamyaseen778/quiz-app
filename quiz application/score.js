var score = localStorage.getItem("abcd")
var username= localStorage.getItem("current username")
var min = localStorage.getItem("sec")
var sec = localStorage.getItem("min")
console.log(score+username+min+sec)
 document.getElementById("username456").innerHTML = username
 document.getElementById("time").innerHTML = min + ":" + sec
 document.getElementById("score").innerHTML = score
// stop watch

//   end
var array_of_question=[
    {
        question: "if x is a set contains an integer which is neither positive nor negative then the set x is ",
        answer: 3,
        options: [
            "set is empty ",
            "set is non empty ",
            "set is finite ",
            "set is both non-empty and finite ",
        ]
    },
    {
        question: "If x ∈ N and x is prime, then x is ____ set.",
        answer: 0,
        options: [
            "a.	Infinite set",
            "b.	Finite set",
            "c.	Empty set",
            "d.	Not a set",
        ]
    },
    {
        question: "If x is a set and the set contains the real number between 1 and 2, then the set is ____.",
        answer: 2,
        options: [
          "a.	Infinite set",
          "b.	Finite set",
          "c.	Empty set",
          "d.	Not mentioned",
        ]
    },
    {
        question: "Which of the following is a subset of set {1, 2, 3, 4}?",
        answer: 3,
        options: [
            "	{1, 2}",
            "	{1, 2, 3}",
            "	{1}",
            "	All of the mentioned",
        ]
    },
    {
        question: "Convert the set x in roster form if set x contains the positive prime number, which divides 72.",
        answer: 1,
        options: [
            "a.	{∅}",
            "b.	{2, 3}",
            "c.	{2, 3, 7}",
            "d.	{3, 5, 7}",
        ]
    },
    {
        question: "Power set of empty or Null set has exactly ___ subset.",
        answer: 0,
        options: [
            "a.	One",
            "b.	Two",
            "c.	Zero",
            "d.	Three",
        ]
    },
    {
        question: "What is the Cartesian product of set A and set B, if the set A = {1, 2} and set B = {a, b}?",
        answer: 2,
        options: [
            "a.	{ (1, a), (1, b), (2, a), (b, b) }",
            "b.	{ (1, 1), (2, 2), (a, a), (b, b) }",
            "c.	{ (1, a), (2, a), (1, b), (2, b) }",
            "d.	{ (1, 1), (a, a), (2, a), (1, b) }",
        ]
    },
    {
        question: " The members of the set S = {x | x is the square of an integer and x < 100} is ______",
        answer: 2,
        options: [
            "a.	{0, 2, 4, 5, 9, 55, 46, 49, 99, 81}",
            "b.	{1, 4, 9, 16}",
            "c.	{0, 1, 4, 9, 16, 25, 36, 49, 64, 81",
            "d.	{0, 1, 4, 9, 25, 36, 49, 123}",
        ]
    },
    {
        question: " The intersection of the sets {1, 2, 8, 9, 10, 5} and {1, 2, 6, 10, 12, 15} is the set _____",
        answer: 0,
        options: [
            "a.	{1, 2, 10}",
            "b.	{5, 6, 12, 15}",
            "c.	{2, 5, 10, 9}",
            "d.	 {1, 6, 12, 9, 8}",
        ]
    },
    {
        question: " The difference of {1, 2, 3, 6, 8} and {1, 2, 5, 6} is the set ____",
        answer: 2,
        options: [
            "a.	{1, 3}",
            "b.	{5, 6, 8}",
            "c.	{3, 8}",
            "d.	{2, 6, 5}",
        ]
    }
]

// var total = 0;
// var score =0;
 
// function score_setting(){
//     var option = document.getElementById("options")
 
//   for(var i = 0; i < option.length; i++){
//       if(option[i].checked){
//           var ans = option[i].value
//           console.log(ans)
          
//           if(i == array_of_question[total].answer){
//             score++
//             console.log(score)
//         }
//         option[i].checked = false
        
//     }
// }
// } 
// function show(e) {
//     var quest = document.getElementById("dynamic1")
//     quest.innerHTML = "Q" + (e + 1) + ")" + array_of_question[e].question
//     var options= document.getElementById("option12");
//     for (var i = 0; i < options.length; i++) {
//         options[i].innerHTML = array_of_question[e].options[i]
//  console.log(array_of_question)
//     }
//     total++
//   }
// //   function next(){
// //     var optns = document.getElementById("options")
// //       var cond = false;
// //       for(var i = 0; i < optns.length; i++){
// //           if (optns[i].checked == true){
// //             score_setting()
         
// //             cond = true
// //           }
// //       }
// //       if(cond){
// //       if(count < array_of_question.length-1){
// //           total++
// //           show(total)
// //           }
// //           else{
// //               alert("You have secured " + score + " marks")
// //           }
// //         }
// //     }  
var count = 0;
var score =0;
 
var options = document.getElementsByName("option")
function calc(){
 
  for(var i = 0; i < options.length; i++){
      if(options[i].checked){
          var ans = options[i].value
          
          
          if(i == array_of_question[count].answer){
            score++
             console.log(score)
         }
         options[i].checked = false
          
      }
  }
}

function showques(e) {
    var quest = document.getElementById("dynamic1")
    quest.innerHTML = "Q" + (e + 1) + ")" + array_of_question[e].question
    var options = document.querySelectorAll("#option12");
    for (var i = 0; i < options.length; i++) {
      options[i].innerHTML = array_of_question[e].options[i]
    }
   console.log(options.length)
}
function nextques(){
    var optns = document.querySelectorAll("#options")
    var btn = document.getElementById("next_btn")
    var cond = false;
    for(var i = 0; i < optns.length; i++){
        if (optns[i].checked == true){
            calc()
            cond = true
          }
          
      }
      if(cond){
      if(count < array_of_question.length-1){
          count++
          showques(count)
          }
          else{
              alert("You have secured " + score + " marks")
              localStorage.setItem("abcd", score);
            window.open("./remarks.html")
            var sec = document.getElementById("sec");
            var min = document.getElementById("min");
            localStorage.setItem("sec",sec.innerHTML)
            localStorage.setItem("min",min.innerHTML)
            
          }
        }
    }
  document.getElementById("username1").innerHTML=localStorage.getItem("current username")
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("questionTurn").innerHTML =
  "Question Turn - " + player1_name;
document.getElementById("answerTurn").innerHTML =
  "Answer Turn - " + player2_name;
function send() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  actualAnswer = parseInt(num1) * parseInt(num2);
  questionNumber = `<h4>${num1} x ${num2} </h4>`;
  inputBox =
    '<br/>Answer : <input type="text" class="form-control" id="inputCheckBox">';
  checkBtn =
    '<br/><br/><button class="btn btn-danger" onclick="check()">Check</button>';
  row = questionNumber + inputBox + checkBtn;
  document.getElementById("output").innerHTML = row;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
  answer = document.getElementById("inputCheckBox").value;
  if (answer == actualAnswer) {
    if (questionTurn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
      questionTurn = "player2";
      answerTurn = "player1";
      document.getElementById("questionTurn").innerHTML =
        "Question Turn - " + player2_name;
      document.getElementById("answerTurn").innerHTML =
        "Answer Turn - " + player1_name;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
      questionTurn = "player1";
      answerTurn = "player2";
      document.getElementById("questionTurn").innerHTML =
        "Question Turn - " + player1_name;
      document.getElementById("answerTurn").innerHTML =
        "Answer Turn - " + player2_name;
    }
  } else {
    if (questionTurn == "player1") {
      questionTurn = "player2";
      answerTurn = "player1";
      document.getElementById("questionTurn").innerHTML =
        "Question Turn - " + player2_name;
      document.getElementById("answerTurn").innerHTML =
        "Answer Turn - " + player1_name;
    } else {
      questionTurn = "player1";
      answerTurn = "player2";
      document.getElementById("questionTurn").innerHTML =
        "Question Turn - " + player1_name;
      document.getElementById("answerTurn").innerHTML =
        "Answer Turn - " + player2_name;
    }
  }
  document.getElementById("output").innerHTML = "";
}

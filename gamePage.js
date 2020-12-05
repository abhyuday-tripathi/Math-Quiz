player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML =
  "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML =
  "Answer Turn - " + player2_name;

function send() {
  getWord = document.getElementById("word").value;
  word = getWord.toLowerCase();
  charAtOne = word.charAt(1);
  lengthByTwo = Math.floor(word.length / 2);
  charAtTwo = word.charAt(lengthByTwo);
  lengthMinusOne = word.length - 1;
  charAtThree = word.charAt(lengthMinusOne);
  removeOne = word.replace(charAtOne, "_");
  removeTwo = removeOne.replace(charAtTwo, "_");
  removeThree = removeTwo.replace(charAtThree, "_");
  console.log(removeThree);
  question_word = '<h4 id="word_display"> Question. ' + removeThree + "</h4>";
  inputBox =
    '<br>Answer: <input type="text" id="inputOne"class="form-control">';
  checkBtn =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + inputBox + checkBtn + "<br>";
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
  answer = document.getElementById("inputOne").value.toLowerCase();
  if (answer == word) {
    if (questionTurn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
      questionTurn = "player2";
      answerTurn = "player1";
      document.getElementById("player_question").innerHTML =
        "Question Turn - " + player2_name;
      document.getElementById("player_answer").innerHTML =
        "Answer Turn - " + player1_name;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
      questionTurn = "player1";
      answerTurn = "player2";
      document.getElementById("player_question").innerHTML =
        "Question Turn - " + player1_name;
      document.getElementById("player_answer").innerHTML =
        "Answer Turn - " + player2_name;
    }
  } else {
    if (questionTurn == "player1") {
      questionTurn = "player2";
      answerTurn = "player1";
      document.getElementById("player_question").innerHTML =
        "Question Turn - " + player2_name;
      document.getElementById("player_answer").innerHTML =
        "Answer Turn - " + player1_name;
    } else {
      questionTurn = "player1";
      answerTurn = "player2";
      document.getElementById("player_question").innerHTML =
        "Question Turn - " + player1_name;
      document.getElementById("player_answer").innerHTML =
        "Answer Turn - " + player2_name;
    }
  }
  document.getElementById("output").innerHTML = "";
}

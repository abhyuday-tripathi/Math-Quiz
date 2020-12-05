function addUser() {
  player1_name = document.getElementById("userName").value;
  player2_name = document.getElementById("userName2").value;
  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  window.location = "gamePage.html";
}

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

function addUser() {
  nameplayer1 = document.getElementById("userName").value;
  nameplayer2 = document.getElementById("userName2").value;
  localStorage.setItem("player1_name", nameplayer1);
  localStorage.setItem("player2_name", nameplayer2);
  window.location = "gamePage.html";
}

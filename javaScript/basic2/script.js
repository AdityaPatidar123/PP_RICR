function dark() {
  document.getElementById("con").classList.add("Dark");
}

function light() {
  document.getElementById("con").classList.remove("Dark");
}

function changeback(color) {
  document.getElementById("con").style.background = color;
}

function changehead(color) {
  document.getElementById("h").style.color = color;
}

function changetext(color) {
  document.getElementById("p").style.color = color;
}

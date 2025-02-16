function add() {
  let a = Number(document.getElementById("h1").innerText);
  a=a + 1;
  document.getElementById("h1").innerText = a;
}

function sub() {
  let a = Number(document.getElementById("h1").innerText);
  a=a - 1;
  document.getElementById("h1").innerText = a;
}

function reset() {
  document.getElementById("h1").innerText = 0;
}

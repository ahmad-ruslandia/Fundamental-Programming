let text = "";
let i = 10;

while (i > 0) {
  text += "Perulangan While - " + i + "<br>";
  i--;
}

document.getElementById("i").innerHTML = text;
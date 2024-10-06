document.getElementById("img").src = "./Images/of.png";
document.getElementById("text").innerHTML = "Off";
document.getElementById("Off").style.backgroundColor = "rgb(245,188,0)";
document.getElementById("Off").style.color = "white";

function On() {
  document.getElementById("img").src = "./Images/on.png";
  document.getElementById("text").innerHTML = "On";
  document.getElementById("On").style.backgroundColor = "rgb(245,188,0)";
  document.getElementById("On").style.color = "white";
  document.getElementById("Off").style.backgroundColor = "white";
  document.getElementById("Off").style.color = "black";
}

function Off() {
  document.getElementById("img").src = "./Images/of.png";
  document.getElementById("text").innerHTML = "Off";
  document.getElementById("Off").style.backgroundColor = "rgb(245,188,0)";
  document.getElementById("Off").style.color = "white";
  document.getElementById("On").style.backgroundColor = "white";
  document.getElementById("On").style.color = "black";
}

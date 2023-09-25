var gridlines = [];

function drawGrid() {
  var grid = document.getElementById("grid");

  let w = window.innerWidth;
  let h = window.innerHeight;

  var path;

  for (let i = 0; i < 10; i++) {
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M 1,97.857143 C 19.285714,96.428571 24.016862,131.64801 90.714286,132.85714 140.78762,133.7649 202.79376,66.16041 202.79376,66.16041"
    );
    grid.appendChild(path);
  }
}

// document.addEventListener("DOMContentLoaded", drawGrid());
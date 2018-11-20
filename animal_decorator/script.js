hat = document.getElementById("xmas-hat");

document.addEventListener('click', getCoord, true);

function getCoord(e) {
    var x = e.clientX + window.scrollX - hat.width/2;
    var y = e.clientY + window.scrollY - hat.height/2;
    moveHat(x, y);
}

function moveHat(xPos, yPos) {
    var hat = document.getElementById("xmas-hat");
    hat.style.position = "absolute";

    hat.style.left = xPos+"px";
    hat.style.top = yPos+"px";
}
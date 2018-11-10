var squareButton = document.getElementById("square-button");
var halfButton = document.getElementById("half-button");
var percentButton = document.getElementById("percent-button");
var areaButton = document.getElementById("area-button");
var solution = document.getElementById("solution");

function squareNumber(n) {
    result = n * n;
    console.log("The result of squaring the number " + n + " is " + result);
    return result;
}

function halfNumber(n) {
    result = n / 2 ;
    console.log("Half of " + n + " is " + result);
    return result;
}

function percentOf(n1, n2) {
    result = (n1/n2) * 100;
    console.log(n1 + " is " + result + "% of " + n2);
    return result;
}

function areaOfCircle(r) {
    result = (Math.PI * (r * r)).toFixed(2);
    console.log("The area for a circle with radius " + r + " is " + result);
    return result;
}

squareButton.addEventListener("click", function () {
    var input = document.getElementById("square-input").value;
    solution.innerHTML = squareNumber(input);
});

halfButton.addEventListener("click", function () {
    var input = document.getElementById("half-input").value;
    solution.innerHTML = halfNumber(input);
});

percentButton.addEventListener("click", function () {
    var input1 = document.getElementById("percent1-input").value;
    var input2 = document.getElementById("percent2-input").value;
    solution.innerHTML = percentOf(input1, input2) + "%";
});

areaButton.addEventListener("click", function () {
    var input = document.getElementById("area-input").value;
    solution.innerHTML = areaOfCircle(input);
});


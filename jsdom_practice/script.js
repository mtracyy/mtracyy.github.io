function htmlElements() {
    var divNum = document.getElementsByTagName('div').length;
    var pNum = document.getElementsByTagName('p').length;
    var h1Num = document.getElementsByTagName('h1').length;

    alert ("There are " +
        divNum + " div elements, " +
        pNum + " p elements, and " +
        h1Num + " h1 elements on the page."
    )
}

function idOne() {
    var divOne = document.getElementById("one");
    var numChildren = divOne.getElementsByTagName('*').length;
    alert(numChildren);
}

function idTwo() {
    var divTwo = document.getElementById("two");
    var numChildren = divTwo.getElementsByTagName('*').length;
    alert(numChildren);
}
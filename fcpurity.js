function giveScore() {
    var element = document.getElementById("score");
    var score = checkboxes();
    element.innerHTML = "You scored " + score + "! Rating: " + roast(score);
    element.scrollIntoView({ block: "center" });
}
function checkboxes() {
    var inputElems = document.getElementsByTagName("input"),
        count = 100;
    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
            count--;
        }
    }
    return count;
}
function roast(num) {
    if (num == 100) {
        return "Haven't touched a team yet.";
    }
    if (num > 85) {
        return "Foundations virgin.";
    }
    if (num > 70) {
        return "You've been on a team or two.";
    }
    if (num > 50) {
        return "You live for Foundations.";
    }
    if (num > 25) {
        return "Is getting this spicy allowed?";
    }
    return "Official Foundations whore.";
}

function uncheckBoxes() {
    var inputElems = document.getElementsByTagName("input");
    for (var checkbox of inputElems) {
        checkbox.checked = false;
    }
    window.scrollTo(0, 0);
}
let count = 1;
function cinaClick() {
    count += 1;
    if (count % 2 == 0) {
        document.getElementById("cina").src = "imgs/cina2.png";
    } else {
        document.getElementById("cina").src = "imgs/cina1.png";
    }
}

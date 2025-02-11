function moveRandomE1(elm) {
    elm.style.position = "absolute";
    elm.style.top = Match.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Match.floor(Math.random() * 90 + 5) + "%";
}

const moveRandomE1 = document.querySelector("#move-random");

moveRandomE1.addEventListener("mouseenter", function(e) {
    moveRandomE1(e.target);
});